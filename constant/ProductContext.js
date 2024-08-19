// ProductContext.js
import React, { createContext, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <ProductContext.Provider value={{ selectedProduct, setSelectedProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
