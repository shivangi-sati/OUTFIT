import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const { products }=useContext(ShopContext);
    const [bestSeller, setBestSeller]=useState([]);
    useEffect(()=>{
        const bestProduct=products.filter((items)=>(items.bestseller))
        setBestSeller(bestProduct.slice(0,5))

    },[])
    
  return (
   
        <div className='flex flex-col  flex-wrap justify-center items-center'>
      <Title heading1='BEST' heading2='SELLER'/>
      <p className='text-center text-sm p-3.5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet alias dolorem laborum esse, quaerat illum dignissimos ea corporis ipsum quas.</p>
      
      <div className='flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 py-5 m-[20px]'>

{bestSeller.map((item ,index)=>(
  <ProductItem key={index} id={item.id} name={item.name} price={item.price} image={item.image} />

))}
</div>
    </div>
  )
}

export default BestSeller