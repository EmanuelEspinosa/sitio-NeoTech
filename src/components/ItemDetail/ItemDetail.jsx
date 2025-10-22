import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./ItemDetail.css"
import { Link } from "react-router-dom";

export const ItemDetail = ({ detail }) => {
    const {
        name,
        brand,
        category,
        feature,
        description,
        price,
        imageUrl
    } = detail;

    return (
        <section className="item-detail">
            <Link className="icono-cierreCard" to={"/"}><FontAwesomeIcon icon={faTimes} size="2x" /></Link>
            <div className="item-detail__image">
                <img src={imageUrl} alt={name} />
            </div>

            <div className="item-detail__info">
                
                <h3>{brand} · {category}</h3>
                <h2>{name}</h2>
                
                <p className="item-detail__price">${price.toLocaleString("es-AR")}</p>
                <p className="item-detail__feature">{feature}</p>

                <ul className="item-detail__specs">
                    {Object.entries(description).map(([key, value]) => (
                        <li key={key}>
                            <p><strong>{key}</strong></p> 
                            <strong>{value}</strong>
                        </li>
                    ))}
                </ul>
                <button>Agregar al carrito</button>
            </div>
        </section>
    );
}