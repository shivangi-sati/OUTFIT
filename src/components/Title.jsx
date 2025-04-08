import React from 'react'

const Title = ({heading1,heading2}) => {
  return (
    <div className='flex  items-center justify-center gap-2 mb-1 mt-6 py-6'>
        <p className=' text-[15px] sm:text-2xl md:text-3xl text-gray-600'>{heading1}</p>
        <p className=' text-[15px] sm:text-2xl md:text-3xl'>{heading2}</p>
        <p className='bg-amber-950 w-8 md:w-11 h-[1.5px]'></p>

    </div>
  )
}

export default Title