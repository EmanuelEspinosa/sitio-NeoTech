import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { Pagination } from "../Pagination/Pagination";

export const ItemListContainer = () => {
    const [products, setProductos] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);

    const productosPorPagina = 6;
    const indiceInicial = (paginaActual - 1) * productosPorPagina;
    const indiceFinal = indiceInicial + productosPorPagina;
    const productosVisibles = products.slice(indiceInicial, indiceFinal);

    useEffect(() => {
        fetch("/data/products.json")
            .then((res) => {
                if(!res.ok){
                    throw new Error("Hubo un problema al buscar productos");
                }
                return res.json();
            })
            .then((data) => {
                setProductos(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <section className="sectionProducts">
            <h1>Bienvenidos</h1>

            <div className="listproducts">
                <ItemList list={productosVisibles} />
            </div>

            <Pagination
                products={products}
                paginaActual={paginaActual}
                setPaginaActual={setPaginaActual}
                productosPorPagina={productosPorPagina}
            />
        </section>
    );
};
