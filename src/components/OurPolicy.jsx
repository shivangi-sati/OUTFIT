import React from 'react'
import { assets } from '../assets/assets'
const OurPolicy = () => {
  return (
    <div className='flex flex-col  mt-20 sm:flex-row gap-44 flex-wrap my-10 items-center text-center justify-center'>
        
            <div>
            <img className='w-12 h-auto m-auto mb-4 ' src={assets.exchange_icon} alt=''/>
            <p className='font-bold'>Easy Exchange Policy</p>
            <p className='text-gray-400  font-light'>We offer hassle free exchange policy</p>
        
            </div>
            <div>
            <img className='w-12 h-auto m-auto mb-4 ' src={assets.quality_icon} alt=''/>
            <p className='font-bold'>7 Days Return Policy</p>
            <p className=' text-gray-400  font-light'>7 Days Return Policy</p>
        
            </div>
            <div>
            <img className='w-12 h-auto m-auto mb-4 ' src={assets.support_img} alt=''/>
            <p className='font-bold'>Best customer support</p>
            <p className='text-gray-400 font-light'>we provide 24/7 customer support</p>
        
            </div>

    </div>
  )
}

export default OurPolicy
