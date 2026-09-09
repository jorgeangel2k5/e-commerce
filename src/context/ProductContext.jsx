import React, { createContext } from 'react'
import { useState, useEffect } from 'react'
import initialProducts from '../data/productos'

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {

    const [productos, setProductos] = useState(initialProducts)
    useEffect(() => {
        const datosGuardados = localStorage.getItem("catalogo");

        if (datosGuardados != null) {
            setProductos(JSON.parse(datosGuardados))
        }        
    }, [])

    useEffect(() => {
        localStorage.setItem(
            "catalogo",
            JSON.stringify(productos)
        )
    }, [productos])

    return (
        <ProductContext.Provider value={{productos}}>
            {children}
        </ProductContext.Provider>
    )
}
export default ProductContext