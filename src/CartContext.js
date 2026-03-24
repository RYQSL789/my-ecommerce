import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (product, quantity) => {
    const exists = cartItems.find(item => item.id === product.id);
    if (exists) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalQuantity = () => cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, totalQuantity, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};