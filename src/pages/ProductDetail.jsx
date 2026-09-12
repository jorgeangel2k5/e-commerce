import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetail = () => {

    const navigate = useNavigate()

    const {id} = useParams()

    const producto = {
        title: "Bicicleta Mountain Bike R29 TopMega",
        category: "Mountain",
        price: 250000,
        stock: 8,
        description: "Bicicleta ideal para terrenos irregulares.",
        image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=600&q=80"
    }
    
  return (
    <div>
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
        <button 
            className='mt-6 mx-5 px-5 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700'
            onClick={() => navigate(-1)}
        >
            Volver
        </button>

    </div>
   
  )
}

export default ProductDetail