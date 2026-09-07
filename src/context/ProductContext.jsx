import React, { createContext } from 'react'
import { useState, useEffect } from 'react'
import products from '../data/productos'

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {

    const [productos, setProductos] = useState(products)
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

    // Agregar producto
    const agregarProducto = (nuevoProducto) => {
        setProductos([...productos, nuevoProducto])
    }

    return (
        <ProductContext.Provider value={{productos, agregarProducto}}>
            {children}
        </ProductContext.Provider>
    )
}
export default ProductContext