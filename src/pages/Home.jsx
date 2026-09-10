import React from 'react'
import ProductCard from '../components/ProductCard'
import initialProducts from '../data/productos'

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {
    initialProducts.map((producto) => (
      <ProductCard
        key={producto.id}
        producto={producto}
      />
    ))
  }
</div>
  )
}

export default Home
