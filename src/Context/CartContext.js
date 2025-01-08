import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [noOfItems, setNoOfItems] = useState(0);

  const addItemToCart = () => {
    setNoOfItems((prevItems) => prevItems + 1);
  };

  const removeItemFromCart = () => {
    setNoOfItems((prevItems) => prevItems - 1);
  }

  const setItemsCount = (count) => {
    setNoOfItems(count);
  };

  return (
    <CartContext.Provider value={{noOfItems, addItemToCart, removeItemFromCart, setItemsCount}}>
        {children}
    </CartContext.Provider>
  )
};
