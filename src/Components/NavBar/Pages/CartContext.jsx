import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (itemId, size) => {
    const updatedCart = cartItems.filter(
      (item) => !(item.id === itemId && item.size === size)
    );
    setCartItems(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cartItems, removeFromCart, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
