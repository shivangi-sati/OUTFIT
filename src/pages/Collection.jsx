import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../components/ProductItem'
import Title from '../components/Title'
import Footer from '../components/Footer'

const Collection = () => {
  const { products,search,showSearch }=useContext(ShopContext);
  const [visible, setVisible]=useState(true);
  const [category,setCategory]=useState([]);
  const [subcategory,setSubCategory]=useState([]);
  const [filterproduct, setFilterproduct]=useState([]);
  const [sortType,setSortType]=useState('relavent')
  const applyFilter=()=>{
    let productCopy=products.slice();
    if (category.length>0){
      productCopy=productCopy.filter((item)=>category.includes(item.category))

    }
    if(showSearch && search){
      productCopy=productCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(subcategory.length>0){
      productCopy=productCopy.filter((item)=>subcategory.includes(item.subCategory))
    }
    
    setFilterproduct(productCopy)
  }

  useEffect(()=>{
    applyFilter();

  },[category,subcategory,search,showSearch])
  function toggleCategory(e){
    if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item=>item!=e.target.value))
      
    }
    else{
      setCategory(prev=>[...prev,e.target.value])
    }
    
    
  }
  function toggleSubCategory(e){
    if(subcategory.includes(e.target.value)){
      setSubCategory(prev=> prev.filter(item=>item!=e.target.value))
      
    }
    else{
      setSubCategory(prev=>[...prev,e.target.value])
    }
    
    
  }
  const sortBy=()=>{
    let fpcopy=filterproduct.slice();
    switch (sortType){
      case 'low-high':
        setFilterproduct(fpcopy.sort((a,b)=>(a.price-b.price)));
        break;
      case 'high-low':
        setFilterproduct(fpcopy.sort((a,b)=>(b.price-a.price)));
        break;
      default:
        applyFilter();
        break;
    }
  }
  useEffect(()=>{
    sortBy();

  },[sortType])

  return (
    <div>
    <div className="flex flex-row  sm:gap-4 flex-wrap  pb-10 border-t">
      <div className='min-w-60 '>
        <p className='flex text-xl sm:items-center gap-2 cursor-pointer mt-15 my-5 mx-3 sm:mx-30'>FILTERS</p>
        <div className={` border border-gray-400 py-3 px-3 mt-6 min-w-55 mx-3 sm:mx-30 ${visible? "sm:block ": "hidden" }`}>
        <p className='mb-3 font-bold text-[15px] '>CATEGORIES</p>
        <div className='flex flex-col gap-2 text-gray-500 font-light'>
          <p className='flex gap-[2px]'>
            <input type='checkbox' value={'Men'} onChange={toggleCategory}/> Men
          </p>
          <p className='flex gap-[2px]'>
          
            <input type='checkbox' value={'Women'} onChange={toggleCategory}/> Women
          </p>
          <p className='flex gap-[2px]'>

            <input type='checkbox' value={'Kids'} onChange={toggleCategory}/> Kids
          </p>
        </div>
      
          

        </div>
        <div className={` border border-gray-400 py-3 px-3 mt-6 min-w-60 mx-3 sm:mx-30 ${visible? "sm:block ": "hidden"}`}>
        <p className='mb-3 font-bold text-[15px] '>TYPE</p>
        <div className='flex flex-col gap-2 text-gray-500 font-light'>
          <p className='flex gap-[2px]'>
            <input type='checkbox' value={'Topwear'} onChange={toggleSubCategory}/> Topwear
          </p>
          <p className='flex gap-[2px]'>
          
            <input type='checkbox' value={'Bottomwear'} onChange={toggleSubCategory}/> Bottomwear
          </p>
          <p className='flex gap-[2px]'>

            <input type='checkbox' value={'Winterwear'} onChange={toggleSubCategory}/> Winterwear
          </p>
        </div>

          

        </div>

      </div>
      <div className='flex-1'>
      <div className='flex mx-3 sm:mx-0  items-start justify-between  '>
        <Title heading1="ALL" heading2="COLLECTIONS"/>
        <select onChange={(e)=>setSortType(e.target.value)} className='my-7 border border-gray-400 font-extralight p-3 ml-2 outline-none'>
          <option  value="relavent">Sort by:Relavent
          </option>
          <option value="low-high">Sort by:Low to High
          </option>
          <option value="high-low">Sort by:High to Low
          </option>
        </select>
        </div>
       
        <div className=' flex-col flex mx-3 sm:mx-0 sm:flex-row gap-1 sm:gap-5 flex-wrap '>
          {
            filterproduct.map((item , index)=>(
              <ProductItem key={index} id={item._id} name={item.name} price={item.price}image={item.image}/> 


            ))
          }
        </div>
        
      </div>

     
      </div>
      
      </div>
  )
}


export default Collection