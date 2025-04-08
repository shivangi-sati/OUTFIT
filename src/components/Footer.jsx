import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:flex-row flex-wrap gap-10 md:gap-30 mt-6 md:mt-30 mx-10 md:mx-40 text-gray-600 font-extralight  md:p-20'>
        <div className='flex-1'>
        <img className='w-32 mb-5'src={assets.logo}/>
        <p className='text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, doloribus similique? Officia quas magnam adipisci soluta sit beatae totam voluptates laboriosam ullam nobis itaque eius, cum amet blanditiis consequatur veritatis!</p>
        </div>
        <div className='flex-1 '>
            <h1 className='mb-5 text-2xl font-bold '>COMPANY</h1>
            <p >Home</p>
            <p >About Us</p>
            <p >Delivery</p>
            <p >Privacy Policies</p>
        </div>
        <div className='flex-1 '>
            <h1 className='mb-5 text-2xl font-bold '>GET IN TOUCH</h1>
            <p>8700860157</p>
            <p>shivangisati7@gmail.com</p>
            <a href='/'>Instagram</a>
            
        </div>

    </div>
    <hr className='sm:mb-20 sm:w-1/2 sm:m-auto'/>
    </div>

  )
}

export default Footer