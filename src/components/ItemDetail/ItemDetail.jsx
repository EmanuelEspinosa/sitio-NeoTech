import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./ItemDetail.css"
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { useState } from "react";
import { ConfirmModalCart } from "../layout/confirmModalCart/ConfirmModalCart";

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

    const { addItem } = useCartContext();
    const [showModal, setShowModal] = useState(false);
    const [confirmMessage, setConfirmMessage] = useState("");

    const handleAddClick = () => {
        setShowModal(true);
    };

    const handleConfirm = () => {
        const result = addItem(detail);
        setConfirmMessage(result.message);
        setTimeout(() => {
            setConfirmMessage("");
            setShowModal(false);
        }, 3000);
    };

    const handleCancel = () => {
        setShowModal(false);
    };

    return (
        <section className="item-detail">
            <Link className="icono-cierreCard" to={"/"}><FontAwesomeIcon icon={faTimes} size="2x"/></Link>
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
                <button className="btn-agregarCarrito" onClick={handleAddClick}>Agregar al carrito</button>
            </div>

            {/* MODAL DE CONFIRMACIÓN */}
            {showModal && (
                <ConfirmModalCart
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                    message={confirmMessage}
                />
            )}
        </section>
    );
}