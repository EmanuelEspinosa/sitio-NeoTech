import { useNavigate, useParams } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./FilterBar.css"
import { useState } from "react";

export const FilterBar = ({ categorias, setPageActual, search, setSearch, setSortOrder, sortOrder }) => {

    const [showFilters, setShowFilters] = useState(false);
    const [showCategories, setShowCategories] = useState(false);
    const [showPrice, setShowPrices] = useState(false);

    // const [desplegado, setDesplegado] = useState(false);
    const navigate = useNavigate();
    const { category } = useParams();

    // const toggleDesplegado = () => setDesplegado(!desplegado);
    const toggleFilters = () => setShowFilters(!showFilters);
    const toggleCategories = () => setShowCategories(!showCategories);
    const togglePrice = () => setShowPrices(!showPrice);

    const handleClick = (cat) => {
        if (cat === "Todas") {
            navigate("/products");
            // toggleDesplegado();
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        } else {
            navigate(`/products/category/${cat}`);
            // toggleDesplegado();
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
        setPageActual(1);
    };

    return (
        <div className="filter-bar">
            {/* Botón principal */}
            <div className="filters-search">
                <button className="toggle-btnFilters" onClick={toggleFilters}>
                    Filtros {showFilters ? <FaChevronUp /> : <FaChevronDown />}
                </button>

                {/* Barra de búsqueda siempre visible */}
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


            {/* Panel de filtros */}
            {showFilters && (
                <div className="filters-panel">
                    {/* Sección Categorías */}
                    <div className="filter-section section-category">
                        <button className="toggle-btnCateg" onClick={toggleCategories}>
                            Categorías {showCategories ? <FaChevronUp /> : <FaChevronDown />}
                        </button>
                        {showCategories && (
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

                    {/* Sección Por precio */}
                    <div className="filter-section">
                        <button className="toggle-btnPrice" onClick={togglePrice}>
                            Por precio {showPrice ? <FaChevronUp /> : <FaChevronDown />}
                        </button>
                        {showPrice && (
                            <div className="filter-tags">
                                <button
                                    className={sortOrder === "sin_filtrar" ? "active" : ""}
                                    onClick={() => { setPageActual(1); setSortOrder("sin_filtrar"); }}
                                >
                                    Sin filtrar
                                </button>
                                <button
                                    className={sortOrder === "desc" ? "active" : ""}
                                    onClick={() => { setPageActual(1); setSortOrder("desc"); }}
                                >
                                    Descendente
                                </button>
                                <button
                                    className={sortOrder === "asc" ? "active" : ""}
                                    onClick={() => { setPageActual(1); setSortOrder("asc"); }}
                                >
                                    Ascendente
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>

    )
};