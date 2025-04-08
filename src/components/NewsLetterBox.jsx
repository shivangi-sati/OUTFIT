import React, { useState } from 'react'

const NewsLetterBox = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
        
    }
  return (
    <div className='text-center'>
        <p className='font-extrabold text-3xl'>Subscribe now & get 20% off</p>
        <p className='font-extralight text-gray-400 mt-3 text-[15px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, eum vel cumque </p>
        <form onSubmit={handleSubmit} className='w-full sm:w-1/2 flex gap-3 items-center border mx-auto my-6 pl-3'>
        <input type='text' placeholder='Enter your email' className='w-full sm:flex-1  outline-none' required />
        <button className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button> 
        </form>
    </div>
  )
}

export default NewsLetterBox