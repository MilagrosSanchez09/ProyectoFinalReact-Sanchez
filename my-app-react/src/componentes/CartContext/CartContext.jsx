import React, { useState, createContext } from "react";

//Creamos el context
export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);

    //Existe el producto o no?
    const isInCart = (id) => {
        return carrito.some(x => x.id === id);
    }

//Dentro del carrito: 

    // Añadir Item.
    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let pos = carrito.findIndex(x => x.id === item.id); //5
            carrito[pos].quantity += quantity; //cart[5].quantity += 5
            setCarrito([...carrito]);
        } else {
            setCarrito([...carrito, {...item, quantity:quantity}]);
        }
    }

    //Eliminar Item
    const removeItem = (id) => {
        const products = carrito.filter(x => x.id !== id);
        setCarrito([...products]);
    }

    //Vaciar el carrito.
    const dropCart = () => {
        setCarrito([]);
    }

    //Total 
    const totalCart = () => {
        return carrito.reduce((total, item) => total += item.quantity, 0);
    }

    const sumaTotal = () => {
        return carrito.reduce((total, item) => total += item.quantity * item.precio, 0);
    }

    return (
        <CartContext.Provider value={{carrito, addItem, removeItem, dropCart, totalCart, sumaTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;