// ShopContext.jsx
import React, { createContext } from 'react';
import all_product from '../../assets/all_product'; // make sure this path is valid

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { all_product };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
