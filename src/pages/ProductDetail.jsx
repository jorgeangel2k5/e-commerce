import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import initialProducts from '../data/productos'
import NotFound from './NotFound'

const ProductDetail = () => {

    const navigate = useNavigate()

    const {id} = useParams()

    const producto = initialProducts.find(
        (item) => item.id === Number(id)
    )

    if (!producto) {
        return <NotFound />
    }
    
  return (
    <div className="min-h-screen">
        <button 
            className='mt-6 mx-5 px-5 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700'
            onClick={() => navigate(-1)}
        >
            Volver
        </button>
        <h1 className="text-4xl font-bold mx-10 mt-10">
            Detalle del producto
        </h1>
         <div className='m-10 p-6 rounded-lg shadow-lg border'>
            <div className='flex flex-col md:flex-row gap-6'>
                <div className='md:w-1/2'>
                    <img 
                        className='w-full h-80 object-cover rounded-lg' 
                        src={producto.image} 
                        alt={producto.title} 
                    />
                </div>
                <div className='md:w-1/2'>
                    <h1 className='font-bold text-3xl mb-4'>{producto.title}</h1>

                    <h5 className='text-gray-500 mb-4 text-2xl '>{producto.category}</h5>

                    <p className='text-green-800 text-2xl font-bold mb-4'>${producto.price}</p>

                    <p className='text-gray-600 mb-1'>Stock: {producto.stock}</p>

                    <p className='text-2xl mt-6 border-t pt-6'>{producto.description}</p>

                </div>
            </div>
        </div>
    </div>
   
  )
}

export default ProductDetail