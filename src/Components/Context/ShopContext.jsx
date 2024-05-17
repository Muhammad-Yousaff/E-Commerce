// ShopContext.jsx
import React, { createContext, useState } from 'react';
import all_product from '../../assets/all_product'; 
export const ShopContext = createContext(null);


const getDefaultCart = () => {
  const cart = {};
  all_product.forEach((product) => {
    cart[product.id] = 0;
  });
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
    console.log(cartItems);
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
  };

  const getTotalCartAmount= ()=>{
 
    let totelAmount = 0;
    for(const item in cartItems)
{
  if(cartItems[item]>0)
  {
    let itemInfo =all_product .find((product)=>product.id===Number(item))
    totelAmount +=itemInfo.new_price * cartItems[item];
  }
}
return totelAmount;
  }


const getTotalItems = ()=>{
  let totalItem =0;
  for(const item in cartItems)
  {
    if(cartItems[item]>0)
    {
      totalItem+= cartItems[item];
    }
  }
  return totalItem;
}



  const contextValue = {
    getTotalItems ,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
