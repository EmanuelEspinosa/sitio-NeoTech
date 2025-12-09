import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faLock, faShop, faTruckFast, faShieldHalved, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import "./ItemDetail.css"
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { useState } from "react";

import { Count } from "../Count/Count";
import { ConfirmModalCart } from "../../layout/confirmModalCart/ConfirmModalCart";
import { StarRating } from "../../layout/StarRating/StarRating";
import { calculateDiscountPrice } from "../../utils/calculateDiscountPrice";


export const ItemDetail = ({ detail }) => {
    const {
        id,
        name,
        brand,
        category,
        feature,
        description,
        price,
        imageUrl,
        valoracion
    } = detail;

    const { addItem, exists } = useCartContext();
    const [showModal, setShowModal] = useState(false);
    const [confirmMessage, setConfirmMessage] = useState("");
    const [selectedQuantity, setSelectedQuantity] = useState(0);

    const { newPrice, descuento } = calculateDiscountPrice(price, category);

    const handleCancel = () => {
        setShowModal(false);
    }

    const handleConfirm = (quantity) => {
        setSelectedQuantity(quantity); // se guarda la cantidad
        setShowModal(true);            // se muestra el modal
    };

    const handleModalConfirm = () => {
        const itemToAdd = { ...detail, quantity: selectedQuantity, price: newPrice };
        const result = addItem(itemToAdd);
        setConfirmMessage(result.message);
        setTimeout(() => {
            setConfirmMessage("");
            setShowModal(false);
            setSelectedQuantity(0);
        }, 3000);
    };

    const buttonText = exists(detail.id) ? "Producto agregado" : "Agregar al carrito";
    const buttonClass = exists(detail.id) ? "btn-added" : "btn-default";

    return (
        <section className="item-detail">
            <Link className="icono-cierreCard" to={"/products"}><FontAwesomeIcon icon={faTimes} size="2x" /></Link>
            <div className="item-detail__image" id="product-image">
                <img src={imageUrl} alt={name} />
            </div>

            <div className="product-price-pay" id="product-pay">
                <h3>{brand} · {category}</h3>
                <h2>{name}</h2>
                <StarRating rating={valoracion} />
                <div className="container-price">
                    <p className="item-detail__price">${newPrice.toLocaleString("es-AR")}</p>
                    <div className="info-price">
                        <div className="price-old">
                            ${price.toLocaleString()}
                        </div>
                        <div className="porcent-desc">{descuento}% Off</div>
                    </div>

                </div>

                <div className="mode-pay">
                    <div className="mode-pay-card">
                        <div className="card-pay">
                            <img src="/images/logo-alternativo.png" />
                        </div>
                        <h4>12 cuotas fijas con credito NeoTech</h4>
                    </div>

                    <div className="mode-pay-card">
                        <div className="card-pay">
                            <img src="/images/MediosPago/Visa.jpg" alt="visa" />
                        </div>
                        <div className="card-pay">
                            <img src="/images/MediosPago/MasterCard.jpg" alt="mastercard" />
                        </div>
                        <h4>12 cuotas sin interés de ${(newPrice / 12).toFixed(2)}</h4>
                    </div>
                    <div className="mode-pay-card">
                        <div className="card-pay">
                            <img src="/images/MediosPago/NaranjaX.jpg" />
                        </div>
                        <h4>5 cuotas sin interés de ${(newPrice / 5).toFixed(2)}</h4>
                    </div>
                    <div className="mode-pay-card">
                        <div className="card-pay">
                            <img src="/images/MediosPago/AmericanExpress.png" />
                        </div>
                        <h4>9 cuotas sin interés de ${(newPrice / 9).toFixed(2)}</h4>
                    </div>
                    <div className="mode-pay-card">
                        <div className="card-pay">
                            <img src="/images/MediosPago/Cabal.png" />
                        </div>
                        <h4>6 cuotas sin enterés de ${(newPrice / 6).toFixed(2)}</h4>
                    </div>
                </div>

                <div className="btn-addCart">
                    <Count btnText={buttonText} btnClass={buttonClass} onConfirm={handleConfirm} />
                </div>

                <div className="info-pay">
                    <div className="info-pay_item">
                        <FontAwesomeIcon icon={faLock} className="icon-info-pay" />
                        <div>
                            <h4>Pago Seguro</h4>
                            <p>Nuestro sitio cumple todas las normas de seguridad web</p>
                        </div>
                    </div>
                    <div className="info-pay_item">
                        <FontAwesomeIcon icon={faShop} className="icon-info-pay" />
                        <div>
                            <h4>Retira GRATIS e Inmediato!</h4>
                            <p>En nuestras sucursales</p>
                        </div>
                    </div>
                    <div className="info-pay_item">
                        <FontAwesomeIcon icon={faTruckFast} className="icon-info-pay" />
                        <div>
                            <h4>Envio a domicilio a todo el país</h4>
                            <p> NeoTech Express en 48 hs hábiles ¡Gratis! (AMBA)</p>
                        </div>
                    </div>
                    <div className="info-pay_item">
                        <FontAwesomeIcon icon={faShieldHalved} className="icon-info-pay" />
                        <div>
                            <p><b>Garantía extendida NeoTech</b></p>
                            <p> Amplía las garantías de tus productos</p>
                        </div>
                    </div>
                </div>

                <div className="shopp-protected">
                    <div>
                        <FontAwesomeIcon icon={faLock} />
                        <p>Tu compra esta protegida</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faRotateLeft} />
                        <p>Devolución gratuita hasta en 10 días hábiles.</p>
                    </div>
                </div>


            </div>

            <div className="product-info" id="prod-info">
                <p className="item-detail__feature">{feature}</p>
                <ul className="item-detail__specs">
                    {Object.entries(description).map(([key, value]) => (
                        <li key={key}>
                            <p className="key-description"><strong>{key}</strong></p>
                            <strong >{value}</strong>
                        </li>
                    ))}
                </ul>
            </div>
            {/* MODAL DE CONFIRMACIÓN */}
            {showModal && (
                <ConfirmModalCart
                    onConfirm={handleModalConfirm}
                    onCancel={handleCancel}
                    message={confirmMessage}
                    prompt={`¿Deseás agregar ${selectedQuantity} unidad(es) de ${detail.name} al carrito?`}
                />
            )}
        </section>
    );
}