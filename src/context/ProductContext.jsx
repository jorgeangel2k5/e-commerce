import React, { createContext } from 'react'
import { useState, useEffect } from 'react'
import products from '../data/productos'

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {

    const [productos, setProductos] = useState(products)
    useEffect(() => {
        const datosGuardados = localStorage.getItem(productos);
        if (datosGuardados == []) {

        }
        
    }, [])

    return (
        <ProductContext.Provider value={{productos}}>
            {children}
        </ProductContext.Provider>
    )
}
export default ProductContext