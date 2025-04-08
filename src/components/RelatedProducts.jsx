import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({category,subCategory}) => {
    const { products }=useContext(ShopContext);
    const [related , setRelated]=useState([]);
    useEffect(()=>{
        if (products.length>0){    
            let productsCopy= products.slice();
           let productsCopyList=productsCopy.filter((item)=>category === item.category );
           
            setRelated(productsCopyList.slice(0,5));

            
        }
    },[products, category,subCategory])
  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Title heading1={'RELATED'} heading2={'PRODUCTS'}/>
        </div>
        <div>
            {related.map((item,index)=>(
                <ProductItem key={index} id={item._id}name={item.name} price={item.price} image={item.image}  /> 

            ))}
        </div>


    </div>
  )
}

export default RelatedProducts