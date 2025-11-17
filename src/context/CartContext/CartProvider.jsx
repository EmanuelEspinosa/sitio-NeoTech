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
            //console.log("Nuevo carrito:", updateCart);
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

    // const addItem = (item) => {
    //     if (exists(item.id)) {
    //         return { success: false, message: "El producto ya está en el carrito" };
    //     }
    //     setCart([...cart, item]);
    //     return { success: true, message: `${item.name} agregado al carrito` };
    // };

    // const addItem = (item) => {
    //     if(exists(item.id)){
    //         alert("El producto ya existe en el carrito");
    //         return;
    //     }
    //     setCart([...cart, item]);
    //     alert(`${item.name} agregado`);
    // };

    const clearCart = () => {
        setCart([]);
    };

    const getTotalItems = () => {
        if (cart.length) {
            return cart.length;
        }
    };

    const values = {
        cart,
        addItem,
        clearCart,
        getTotalItems,
    };

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>

}