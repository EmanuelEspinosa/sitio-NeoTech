import { useNavigate, useParams } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./FilterBar.css"
import { useState } from "react";

export const FilterBar = ({categorias}) => {

    const [desplegado, setDesplegado] = useState(false);
    const navigate = useNavigate();
    const { category } = useParams();
    
    const toggleDesplegado = () => setDesplegado(!desplegado);

    const handleClick = (cat) => {
        if (cat === "Todas") {
            navigate("/");
            toggleDesplegado();
        } else {
            navigate(`/category/${cat}`);
            toggleDesplegado();
        }
    };

    return (
        <div className="filter-bar">
            <button className="toggle-button" onClick={toggleDesplegado}>
                Filtros {desplegado ? <FaChevronUp /> : <FaChevronDown />}
            </button>

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