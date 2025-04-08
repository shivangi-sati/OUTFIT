import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'
const LatestCollection = () => {
    const { products }=useContext(ShopContext);
    const [latestProduct,setLatestProduct]=useState([]);
    useEffect(()=>{
      setLatestProduct(products.slice(0,10));
    },[])
    
  return (
    <div className='flex flex-col flex-wrap justify-center items-center'>
      <Title heading1='LATEST' heading2='COLLECTIONS'/>
      <p className='text-center text-sm sm:text-[15px] p-3.5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet alias dolorem laborum esse, quaerat illum dignissimos ea corporis ipsum quas.</p>
      
{/* products rendering */}
<div className='flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 py-5 m-[20px]'>

{latestProduct.map((item ,index)=>(
  <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
))}

</div>
      
</div>
  )
}

export default LatestCollection