import { useState } from "react";
import "./Pagination.css"
import { Link } from "react-router-dom";

export const Pagination = ({ products, paginaActual, setPaginaActual, productosPorPagina }) => {

    const totalPages = Math.ceil(products.length / productosPorPagina);

    const onPreviusPage = () => {
        if (paginaActual > 1) {
            setPaginaActual(paginaActual - 1);
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        }
    }
    const onNextPage = () => {

        if (paginaActual < totalPages) {
            setPaginaActual(paginaActual + 1);
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        }
    }

    const pageActualSet = (page) => {
        setPaginaActual(page);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }

    const botones = [];
    for (let i = 0; i < totalPages; i++) {
        botones.push(
            <button
                key={i}
                onClick={() => pageActualSet(i + 1)}
                className={paginaActual === i + 1 ? "activo" : "btn-page"}
            >
                {i + 1}
            </button>
        );
    }

    return (
        <div className="pagination">
            <button className={`pagination-previous ${paginaActual === 1 ? 'is-disabled' : ''}`} onClick={onPreviusPage}>Anterior</button>
            {botones}
            <button className={`pagination-next ${paginaActual >= totalPages ? 'is-disabled' : ''}`} onClick={onNextPage}>Siguiente</button>
        </div>
    );
};