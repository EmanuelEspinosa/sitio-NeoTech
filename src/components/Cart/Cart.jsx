import "./Cart.css"
import { useCartContext } from "../../context/CartContext/useCartContext";
import { useState } from "react";
import { ConfirmModalCart } from "../layout/confirmModalCart/ConfirmModalCart";

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
            <h2>Carrito de compras</h2>

            {cart.length === 0 ? (<p>El carrito está vacío.</p>) : (
                <>
                    <ul className="cart-list">
                        {cart.map((prod) => (
                            <li key={prod.id} className="cart-item">
                                <span>{prod.name}</span>
                                <span>Cantidad: {prod.quantity}</span>
                                <span>Precio unitario: ${prod.price}</span>
                                <span>Subtotal: ${prod.price * prod.quantity}</span>

                                <div className="cart-buttons">
                                    <button
                                        onClick={() => handleRemoveUnit(prod.id)}
                                        disabled={prod.quantity === 1}
                                    >
                                        -
                                    </button>
                                    <button onClick={() => addItem({ ...prod, quantity: 1 })}>
                                        +
                                    </button>
                                    <button onClick={() => deleteItem(prod.id)}>Eliminar</button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="cart-summary">
                        <p>Total de productos: {getTotalItems()}</p>
                        <p>Total a pagar: ${total()}</p>
                        <button
                            onClick={openCheckoutModal}
                            disabled={cart.length === 0}
                            className="checkout-btn"
                        >
                            Finalizar compra
                        </button>
                        <button onClick={clearCart} className="clear-btn">
                            Vaciar carrito
                        </button>
                    </div>
                </>
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
                    onCancel={handleCancel}
                    message={checkoutMessage}
                />
            )}
        </section>
    );
}