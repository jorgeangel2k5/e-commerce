import React from 'react'
import { useState, useEffect } from 'react'
import initialProducts from '../data/productos'

const SearchBar = () => {

    const [busqueda, setBusqueda] = useState('')

    const productosFiltrados = initialProducts.filter((producto) => {
        return producto.category === busqueda
    }) 

    return (
        <div>
            <input 
                type="text" 
                placeholder='Ingrese que tipo de bicicleta busca'
                onChange={(e) => setBusqueda(e.target.value)}
            />

            <h3>{busqueda}</h3>
        </div>
    )
}

export default SearchBar