import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item, type) => {
    setCartItems((prevItems) => {
      if (type == "plus") {
        return [...prevItems, item];
      } else {
        let itemIndex = prevItems.findIndex((el) => el.id == item.id);
        let isZeroItemsInCart = item.countInCart == 0 ? true : false;
        if (isZeroItemsInCart) {
          prevItems = prevItems.filter((el) => el.id !== item.id);
          return prevItems
        } else {
          return [...prevItems];
        }
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
