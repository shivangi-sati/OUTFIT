import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title'

const AboutUs = () => {
  return (
    <div>
    <div className='flex flex-col flex-wrap sm:flex-row items-center justify-center mb-[4%] '>
        <img className='w-[450px] h-auto ' src={assets.about_img}/>
        <div className='text-wrap font-medium text-[17px] font-serif w-[50%] mx-[2%] p-[2%] '>
        <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
            <br/>
         <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
         <br/>
         <h1 className='font-bold'>Our Mission</h1>
         <br/>
         <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
        </div>
        <p></p>
    </div>
    <div className='flex flex-col justify-center items-center'>
        <Title heading1='WHY' heading2='CHOOSE US'/>
        <div className='flex flex-col sm:flex-row flex-wrap p-0 items-center justify-center sm:w-[1000px] sm:h-[380px] ' >
            <div className='p-9 w-[33.3%] h-[50%] sm:border '>
            <p>Quality Assurance:</p>
           <p className='text-wrap'> We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
           </div>
        
        
            <div className='p-9 w-[33.3%] h-[50%] sm:border '>
            <p>Convenience:</p>
           <p className='text-wrap'> With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          
        </div>
        
            <div className='p-9 w-[33.3%] h-[50%] sm:border '>
            <p>Exceptional Customer Service:</p>
           <p className='text-wrap'> Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
           </div>
        </div>

    </div>


    </div>
  )
}

export default AboutUs