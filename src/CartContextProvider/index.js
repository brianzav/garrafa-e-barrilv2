// CartContextProvider.js
import React, { createContext, useState, useCallback } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingProductIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingProductIndex].quantity += product.quantity;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  const decreaseQuantity = useCallback((productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  }, [cartItems]);

  const increaseQuantity = useCallback((productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) => (item.id === productId ? { ...item, quantity: item.quantity + 1 } : item))
    );
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
