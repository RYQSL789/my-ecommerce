                                       import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        const itemExists = cart.find(prod => prod.id === item.id);
        if (itemExists) {
            setCart(cart.map(prod => 
                prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
            ));
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const removeItem = (id) => setCart(cart.filter(prod => prod.id !== id));
    const clear = () => setCart([]);
    const totalQuantity = () => cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = () => cart.reduce((acc, item) => acc + (item.quantity * item.price), 0);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, totalQuantity, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};