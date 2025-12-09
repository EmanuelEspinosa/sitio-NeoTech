import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { Pagination } from "../../layout/Pagination/Pagination";
import { FilterBar } from "../../layout/FilterBar/FilterBar";
import { Link, useParams } from "react-router-dom";
import { getProducts } from "../../services/products";
import { fieldsByCategory } from "../../../public/data/fieldsByCategory";

export const ItemListContainer = () => {
    const [products, setProductos] = useState([]);
    const [categoris, setCategorias] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("sin_filtrar"); // "sin_filtrar" | "asc" | "desc"
    const { category } = useParams();

    useEffect(() => {
        setPaginaActual(1)
        getProducts(category)
            .then((data) => {
                setCategorias(Object.keys(fieldsByCategory));

                if (data && data.length > 0) {
                    setProductos(data);
                }
                else {
                    setProductos([]);
                }
            })
            .catch((err) => {
                console.error("Error al obtener productos:", err);
                setProductos([]);
            });
    }, [category]);

    let filteredProducts = searchTerm === "" ? products : products.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortOrder === "asc") {
        filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
        filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
    }


    const productosPorPagina = 6;
    const indiceInicial = (paginaActual - 1) * productosPorPagina;
    const indiceFinal = indiceInicial + productosPorPagina;
    const productosVisibles = filteredProducts.slice(indiceInicial, indiceFinal);


    return (
        <section id="products" className="sectionProducts">
            {/* <div className="sectionProducts-banner">
                <div className="products-banner1">
                    <img src="/images/banner-productos1.png"/>
                </div>
                <div className="products-banner2">
                    <img src="/images/banner-productos2.png"/>
                </div>
            </div> */}
            <div className="list-container">
                <div className="breadcrumb">
                    {category ?
                        <p>
                            <Link className="breadcrumb-link" to={'/'}>Inicio</Link> /
                            <Link className="breadcrumb-link" to={"/products"}> Productos</Link> / {category}
                        </p> :
                        <p>
                            <Link className="breadcrumb-link" to={'/'}>Inicio</Link> / Productos
                        </p>
                    }
                </div>
                <FilterBar
                    categorias={categoris}
                    setPageActual={setPaginaActual}
                    search={searchTerm}
                    setSearch={setSearchTerm}
                    sortOrder={sortOrder}
                    setSortOrder={setSortOrder}
                    products={filteredProducts}
                />
                <div className="products-container">
                    <div className="listproducts" >
                        <ItemList list={productosVisibles} />
                    </div>

                    <Pagination
                        products={filteredProducts}
                        paginaActual={paginaActual}
                        setPaginaActual={setPaginaActual}
                        productosPorPagina={productosPorPagina}
                    />
                </div>
            </div>
        </section>
    );
};
