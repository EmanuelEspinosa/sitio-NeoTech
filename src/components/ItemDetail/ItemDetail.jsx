import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./ItemDetail.css"
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { useState } from "react";
import { ConfirmModalCart } from "../layout/confirmModalCart/ConfirmModalCart";
import { Count } from "../Count/Count";

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
    const [selectedQuantity, setSelectedQuantity] = useState(0);

    const handleCancel = () => {
        setShowModal(false);
    }

    const handleConfirm = (quantity) => {
        setSelectedQuantity(quantity); // guardás la cantidad
        setShowModal(true);            // mostrás el modal
    };

    const handleModalConfirm = () => {

        const itemToAdd = { ...detail, quantity: selectedQuantity };
        // console.log(itemToAdd); // ← acá sí vas a ver la clave quantity
        const result = addItem(itemToAdd);


        // const result = addItem({ ...detail, quantity: selectedQuantity });
        setConfirmMessage(result.message);
        setTimeout(() => {
            setConfirmMessage("");
            setShowModal(false);
            setSelectedQuantity(0);
        }, 3000);
    };

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
                <Count btnText={"Agregar al carrito"} onConfirm={handleConfirm} />
                {/* <button className="btn-agregarCarrito" onClick={handleAddClick}>Agregar al carrito</button> */}
            </div>

            {/* MODAL DE CONFIRMACIÓN */}
            {showModal && (
                <ConfirmModalCart
                    onConfirm={handleModalConfirm}
                    onCancel={handleCancel}
                    message={confirmMessage}
                />
            )}
        </section>
    );
}