import { useNavigate, useParams } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./FilterBar.css"
import { useState } from "react";

export const FilterBar = ({ categorias, setPageActual, search, setSearch }) => {

    const [desplegado, setDesplegado] = useState(false);
    const navigate = useNavigate();
    const { category } = useParams();

    const toggleDesplegado = () => setDesplegado(!desplegado);

    const handleClick = (cat) => {
        if (cat === "Todas") {
            navigate("/products");
            toggleDesplegado();
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        } else {
            navigate(`/products/category/${cat}`);
            toggleDesplegado();
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
    };

    return (
        <div className="filter-bar">
            <div className="filters-category-search">
                <button className="toggle-button" onClick={toggleDesplegado}>
                    Categorías {desplegado ? <FaChevronUp /> : <FaChevronDown />}
                </button>

                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Buscar productos..."
                        value={search}
                        onChange={(e) => {
                            setPageActual(1);
                            setSearch(e.target.value);
                        }}
                    />
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </div>
            </div>


            {desplegado && (
                <div className="filter-tags">
                    <button
                        className={!category ? "active" : ""}
                        onClick={() => handleClick("Todas")}
                    >
                        Todas
                    </button>
                    {categorias.map((cat) => (
                        <button
                            key={cat}
                            className={category === cat ? "active" : ""}
                            onClick={() => handleClick(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};