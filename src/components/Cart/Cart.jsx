import "./Cart.css"
import { useCartContext } from "../../context/CartContext/useCartContext";
import { useState } from "react";
import { ConfirmModalCart } from "../../layout/confirmModalCart/ConfirmModalCart";

export const Cart = () => {
    const {
        cart,
        addItem,
        clearCart,
        deleteItem,
        removeOneUnit,
        total,
        getTotalItems,
        checkOut
    } = useCartContext();

    const [showModal, setShowModal] = useState(false);
    const [checkoutMessage, setCheckoutMessage] = useState("");
    const [modalType, setModalType] = useState(null); // puede ser "checkout" o "info"


    const clearCarrito = () => {
        setModalType("clearCart");
        setShowModal(true);
    }

    const handleClearCarrito = () => {
        clearCart();
        setShowModal(false);
    }


    const handleCheckoutConfirm = () => {
        const result = checkOut();
        setCheckoutMessage(result.message);
        setModalType("info");
        setTimeout(() => {
            setShowModal(false);
            setCheckoutMessage("");
        }, 3000);
    };

    const openCheckoutModal = () => {
        setModalType("checkout");
        setShowModal(true);
    };

    const handleCancel = () => {
        setShowModal(false);
        setCheckoutMessage("");
    };

    const handleRemoveUnit = (id) => {
        const result = removeOneUnit(id);
        setCheckoutMessage(result.message);
        setModalType("info");
        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
            setCheckoutMessage("");
        }, 3000);
    };


    return (
        <section className="cart-container">
            <h2><span role="img" aria-label="carrito">🛒</span> Mi Carrito</h2>

            {cart.length === 0 ? (<p>El carrito está vacío.</p>) : (
                <div className="cart-main">

                    <ul className="cart-list">
                        {cart.map((prod) => (
                            <li key={prod.id} className="cart-item">
                                <span><img src={prod.imageUrl} /></span>

                                <div className="cart-item__header">
                                    <h3>{prod.name}</h3>
                                </div>



                                <span>Precio  ${prod.price.toLocaleString("es-AR")}</span>

                                <div className="cart-buttons">
                                    <div className="card_buttons-cant">
                                        <button
                                            onClick={() => handleRemoveUnit(prod.id)}
                                            disabled={prod.quantity === 1}>
                                            -
                                        </button>
                                        <span>{prod.quantity}</span>
                                        <button onClick={() => addItem({ ...prod, quantity: 1 })}>
                                            +
                                        </button>
                                    </div>
                                    <span>Subtotal ${(prod.price * prod.quantity).toLocaleString("es-AR")}</span>

                                    <button className="btn-elim" onClick={() => deleteItem(prod.id)}>Eliminar</button>
                                </div>



                            </li>
                        ))}
                    </ul>

                    <div className="cart-summary">
                        <h3>Pedido</h3>
                        {/* <p>Total de productos: {getTotalItems()}</p> */}
                        <div className="cart_summary-item">
                            <p>Total de productos</p>
                            <p><strong>{getTotalItems()}</strong></p>
                        </div>

                        <div className="cart_summary-item">
                            <p>Impuestos</p>
                            <p><strong>$ 0</strong></p>
                        </div>

                        <div className="cart_summary-item">
                            <p>Subtotal</p>
                            <p><strong>${total().toLocaleString("es-AR")}</strong></p>
                        </div>

                        <div className="cart_summary-itemDescuento">
                            <p>¿Tenés un cupón de descuento?</p>
                            <div>
                                <input type="text" placeholder="Ingresa tu número de cupon" />
                                <button>Aplicar</button>
                            </div>
                        </div>

                        <div className="totalPagar">
                            <p>TOTAL</p>
                            <p>${total().toLocaleString("es-AR")}</p>
                        </div>

                        <button onClick={openCheckoutModal} className="checkout-btn">
                            Finalizar compra
                        </button>
                        <button onClick={clearCarrito} className="clear-btn">
                            Vaciar carrito
                        </button>

                        <p className="cart-summary__info">🔒 Compra protegida <br /> 🚚 Envío gratis en pedidos mayores a $70.000</p>
                    </div>
                </div>
            )}

            {showModal && modalType === "checkout" && (
                <ConfirmModalCart
                    onConfirm={handleCheckoutConfirm}
                    onCancel={handleCancel}
                    prompt="¿Deseás finalizar la compra?"
                />
            )}

            {showModal && modalType === "info" && (
                <ConfirmModalCart
                    // onCancel={handleCancel}
                    message={checkoutMessage}
                />
            )}

            {showModal && modalType === "clearCart" && (
                <ConfirmModalCart
                    onConfirm={handleClearCarrito}
                    onCancel={handleCancel}
                    prompt="¿Desea vaciar el carrito?"
                />
            )}

        </section>
    );
}