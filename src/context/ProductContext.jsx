import React, { createContext, useState } from "react";
import initialProducts from "../data/productos";

// 1. Exportación nombrada del Contexto (necesaria para el useContext en Home.jsx)
export const ProductContext = createContext();

// 2. Componente Proveedor
export const ProductProvider = ({ children }) => {
  const [productos, setProductos] = useState(initialProducts);
  const [busqueda, setBusqueda] = useState("");

  return (
    <ProductContext.Provider value={{ productos, setProductos, busqueda, setBusqueda }}>
      {children}
    </ProductContext.Provider>
  );
};