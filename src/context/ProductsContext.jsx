import React, { useState } from "react";
import http from "../api/axios";

const defaultState = {
  products: [],
};

export const ProductsContext = React.createContext(defaultState);

export const fetchProducts = () => {
  return http.get(`/products`);
};

export const fetchProductById = id => http.get(`/products/${id}`);

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const providerValue = {
    products,
    setProducts,
  };

  return <ProductsContext.Provider value={providerValue}>{children}</ProductsContext.Provider>;
};
