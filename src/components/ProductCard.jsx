import React from 'react'

const ProductCard = ({producto}) => {
  return (
    <div className='border border-solid'>
        <img src={producto.image} alt="" className='rounded-sm object-cover'/>
        <h3 >{producto.title}</h3>
        <h4 className='text-gray-800'>{producto.category}</h4>
        <p className='font-semibold'>{producto.price}</p>
    </div>
  )
}

export default ProductCard