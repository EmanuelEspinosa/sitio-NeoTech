import { useState } from "react";
import "./Pagination.css"

export const Pagination = ({ products, paginaActual, setPaginaActual, productosPorPagina }) => {

    const totalPages = Math.ceil(products.length / productosPorPagina);

    const onPreviusPage = () => {
        if (paginaActual > 1) {
            setPaginaActual(paginaActual - 1);
        }
    }
    const onNextPage = () => {

        if (paginaActual < totalPages) {
            setPaginaActual(paginaActual + 1);
        }
    }

    const botones = [];
    for (let i = 0; i < totalPages; i++) {
        botones.push(
            <button
                key={i}
                onClick={() => setPaginaActual(i + 1)}
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