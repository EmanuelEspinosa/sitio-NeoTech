import { useState } from "react"
import { CartContext } from "./CartContext"

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const exists = (id) => {
        const exist = cart.some(p => p.id === id);
        return exist;
    };

    const addItem = (item) => {
        if (exists(item.id)) {
            const updateCart = cart.map((prod) => {
                if (prod.id === item.id) {
                    return { ...prod, quantity: prod.quantity + item.quantity };
                }
                else {
                    return prod;
                }
            });
            setCart(updateCart);
            return {
                success: true,
                message: `${item.quantity} unidad(es) agregada(s) al producto ya existente`
            };
        } else {
            setCart([...cart, item]);
            return {
                success: true,
                message: `${item.name} agregado al carrito`
            };
        }
    }


    const deleteItem = (id) => {
        const product = cart.find((p) => p.id === id);
        const filtered = cart.filter((p) => p.id !== id);
        setCart(filtered);
        return {
            success: true,
            message: `${product.name} eliminado del carrito`
        }
    }


    const removeOneUnit = (id) => {
        const updatedCart = cart.map(p => {
            if (p.id === id) {
                const newQuantity = p.quantity - 1;
                return newQuantity > 0 ? { ...p, quantity: newQuantity } : null;
            }
            return p;
        }).filter(Boolean); // elimina los null si quantity llega a 0

        setCart(updatedCart);
        return {
            success: true,
            message: `Se eliminó 1 unidad del producto`
        };
    };

    const total = () => {
        const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);
        return Math.round(total * 100) / 100;
    }

    const getTotalItems = () => {
        const totalItems = cart.reduce((acc, p) => acc + p.quantity, 0);
        return totalItems;
    };

    const checkOut = () => {
        setCart([]);
        return {
            success: true,
            message: `Compra finalizada con éxito. ¡Gracias por tu compra!`
        };
    }


    const clearCart = () => {
        setCart([]);
    };


    const values = {
        cart,
        addItem,
        deleteItem,
        removeOneUnit,
        total,
        clearCart,
        getTotalItems,
        checkOut
    };

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>

}