import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';


const ProductItem = ({id,name,price,image}) => {
  const { currency }=useContext(ShopContext);
  return (

    <div >
      <Link to={`/products/${id}`}>
        <div className='overflow-hidden w-60 h-auto'>
          <img className='max-w-full rounded-2xl h-auto hover:scale-110 transition-all ease-in-out'src={image[0]}/>

        </div>
        <p className=' font-medium'>{name}</p>
        <p className='text-sm font-extrabold'>{currency}{price}</p>
        </Link>

    </div>
  )
}

export default ProductItem