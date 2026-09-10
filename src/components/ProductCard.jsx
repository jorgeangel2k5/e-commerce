import React from 'react'

const ProductCard = ({ producto }) => {
  return (
    <div className="border rounded-lg shadow-md p-4">
      <img
        src={producto.image}
        alt={producto.title}
        className="w-full h-48 object-cover rounded-md"
      />

      <h3 className="text-lg font-bold mt-3">
        {producto.title}
      </h3>

      <p className="text-gray-600">
        {producto.category}
      </p>

      <p className="text-xl font-semibold mt-2">
        ${producto.price}
      </p>
    </div>
  )
}

export default ProductCard