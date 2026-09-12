import React, { useState } from 'react'

import ProductCard from '../components/ProductCard'
import SearchBar from '../components/SearchBar'
import initialProducts from '../data/productos'

const Home = () => {

  const [busqueda, setBusqueda] = useState('')

  const productosFiltrados = initialProducts.filter((producto) =>
    producto.category
      .toLowerCase()
      .includes(busqueda.toLowerCase())
  )

  return (
    <div className="p-6">

      <SearchBar
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {productosFiltrados.map((producto) => (
          <ProductCard
            key={producto.id}
            producto={producto}
          />
        ))}

      </div>

    </div>
  )
}

export default Home