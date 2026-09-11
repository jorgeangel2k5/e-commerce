import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ producto }) => {

  const navigate = useNavigate()

  return (
    <div className="border rounded-lg shadow-md p-4 m-4 hover:shadow-2xl transition-all duration-300">

      <img
        src={producto.image}
        alt={producto.title}
        className="w-full h-48 object-cover rounded-md"
      />

      <h3 className="text-lg font-bold mt-3 min-h-14">
        {producto.title}
      </h3>

      <p className="text-gray-600">
        {producto.category}
      </p>

      <p className="text-xl font-semibold mt-2">
        ${producto.price}
      </p>

      <button
        className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        // onClick={() => navigate(`/product/${producto.id}`)}
      >
        Ver detalle
      </button>

    </div>
  )
}

export default ProductCard