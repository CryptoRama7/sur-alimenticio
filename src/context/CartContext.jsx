import { useContext, useState } from 'react';
import React from 'react'
export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    
    const addItem = (item, newQyt) => {
        const { qyt = 0 } = cartList.find(prod => prod.id === item.id) || {};
        const newCartList = cartList.filter(prod => prod.id !== item.id);
        setCartList([...newCartList, {...item, qyt: qyt + newQyt }])
    }

    const clearCart = () => setCartList([]); 

    const removeItem = (id) => {
        setCartList(cartList.filter(item => item.id !== id));
    }

    const isInCart = (id) => {
        return cartList.find(item => item.id === id) ? true : false;
    }

    const totalProducts = () => cartList.reduce((acumulador, productoActual) => acumulador + productoActual.qyt, 0);    

    const totalPrice = () => {
        return cartList.reduce((prev, act) => prev + act.qyt * act.price, 0);   
    }

    return (
        <CartContext.Provider value={{
            clearCart,
            addItem, 
            removeItem, 
            totalPrice, 
            totalProducts, 
            isInCart, 
            cartList
        }}>
            { children }
        </CartContext.Provider>
    );
}

export default CartProvider;