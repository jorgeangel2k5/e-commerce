import React, { createContext } from 'react'
import { useState, useEffect } from 'react'
import initialProducts from '../data/productos'

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {

    const [productos, setProductos] = useState(() => {
        const datosGuardados = localStorage.getItem("catalogo");
        if (datosGuardados != null) {
            return JSON.parse(datosGuardados);
        }
        return initialProducts;
    });

    useEffect(() => {
        localStorage.setItem(
            "catalogo",
            JSON.stringify(productos)
        )
    }, [productos])

    return (
        <ProductContext.Provider value={{productos, setProductos}}>
            {children}
        </ProductContext.Provider>
    )
}
export default ProductContext