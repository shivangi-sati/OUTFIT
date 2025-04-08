import React from 'react'
import { assets } from '../assets/assets'

const AboutUs = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-center sm:flex-nowrap gap-10 flex-wrap mb-[10%]'>
          <img className='w-[500px] h-auto ' src={assets.contact_img}/>
          <div >

          <h1 className='font-bold text-2xl' >Our Store</h1>
          <br/>
          <p className='text-gray-600 text-lg'>54709 Willms Station</p>
          <p className='text-gray-600 text-lg '>Suite 350, Washington, USA</p>
          <br/>

          <p className='text-gray-600 text-lg'>Tel: (415) 555-0132</p>
          <p className='text-gray-600 text-lg'>Email: admin@forever.com</p>
          <br/>
          <p className='font-bold text-2xl'>Careers at Forever</p>
          <br/>
          <p className='text-gray-600 text-lg'>Learn more about our teams and job openings</p>
          <br/>
          <button className='w-36 transition-colors duration-500 ease-in-out cursor-pointer hover:bg-black hover:text-white h-15 text-center border'> Explore Jobs</button>








          </div>
    </div>
  )
}

export default AboutUs