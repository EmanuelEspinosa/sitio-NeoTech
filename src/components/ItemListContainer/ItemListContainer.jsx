import { useEffect, useRef, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { Pagination } from "../../layout/Pagination/Pagination";
import { FilterBar } from "../../layout/FilterBar/FilterBar";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/products";
import { fieldsByCategory } from "../../../public/data/fieldsByCategory";

export const ItemListContainer = () => {
    const [products, setProductos] = useState([]);
    const [categoris, setCategorias] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const { category } = useParams();

    const productosPorPagina = 6;
    const indiceInicial = (paginaActual - 1) * productosPorPagina;
    const indiceFinal = indiceInicial + productosPorPagina;
    const productosVisibles = products.slice(indiceInicial, indiceFinal);
    const listRef = useRef();


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


    // useEffect(() => {
    //     fetch("https://691f471ebb52a1db22c124a1.mockapi.io/products")
    //     fetch("/data/products.json")
    //         .then((res) => {
    //             if (!res.ok) {
    //                 throw new Error("Hubo un problema al buscar productos");
    //             }
    //             return res.json();
    //         })
    //         .then((data) => {

    //             const categoriasUnicas = [...new Set(data.flatMap((prod) => prod.category))];
    //             setCategorias(categoriasUnicas);


    //             if (category) {
    //                 setProductos(data.filter((prod) => prod.category === category));
    //             } else {
    //                 setProductos(data);
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, [category]);

    return (
        <section id="products" className="sectionProducts" ref={listRef}>
            
            <div className="banner-ProductList">
                <img src="/images/banner-todosProductos.jpg"/>
            </div>
            <FilterBar categorias={categoris} />
            <div className="products-container">
                <div className="listproducts" >
                    <ItemList list={productosVisibles} />
                </div>

                <Pagination
                    products={products}
                    paginaActual={paginaActual}
                    setPaginaActual={setPaginaActual}
                    productosPorPagina={productosPorPagina}
                />
            </div>
        </section>
    );
};
