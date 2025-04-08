import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const NavBar = () => {
  const [visible,setVisible]=useState(false);
  const {setShowSearch,getCartCount}=useContext(ShopContext);
  

  return (
    <div className='flex items-center justify-around py-5 flex-wrap font-medium'>
           <Link to='/'> <img className='w-36'alt='' src={assets.logo} /></Link>
       
        
          <ul className='hidden sm:flex text-sm text-gray-600 items-center gap-5 '>
            <NavLink to='/' className='flex flex-col gap-1 items-center'>
            <p>HOME</p>
            <hr className=' hidden w-2/4 border-none h-[1.5px] bg-gray-600'/>

            </NavLink>
            <NavLink to='/collection' className='flex flex-col gap-1 items-center'>
            <p>COLLECTION</p>
            <hr className=' hidden w-2/4 border-none h-[1.5px] bg-gray-600'/>

            </NavLink>
            <NavLink to='/about' className='flex flex-col gap-1 items-center'>
            <p>ABOUT</p>
            <hr className=' hidden w-2/4 border-none h-[1.5px] bg-gray-600'/>

            </NavLink>
            <NavLink to='/contact' className='flex flex-col gap-1 items-center'>
            <p>CONTACT</p>
            <hr className='hidden w-2/4 border-none h-[1.5px] bg-gray-600'/>

            </NavLink>

          </ul>
          <div className='flex gap-3 items-center'>
            <img onClick={()=>setShowSearch(true)} className='w-4.5 cursor-pointer' src={assets.search_icon} alt="" />
            <div className='group relative'>
          <Link to='/login'>  <img className='w-4.5 cursor-pointer' src={assets.profile_icon}/></Link>
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
              <div className='flex flex-col gap-3 w-36 bg-gray-400 text-slate-500 py-3 px-5 rounded'>
                <p className='cursor-pointer hover:text-black'>My Profile</p>
                <p className='cursor-pointer hover:text-black'>Orders</p>
                <p className='cursor-pointer hover:text-black'>Logout</p>
              </div>

            </div>

          </div>
          <Link to='/cart' className='relative'> 
            
            <img className='w-4.5'src={assets.cart_icon} alt=''/>
            <p className='absolute bottom-[-3px] right-[-3px] w-3 leading-3 text-center bg-black text-white rounded-full aspect-square  text-[8px]'>{getCartCount()}</p>
             </Link>
             <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-4.5 cursor-pointer  sm:hidden'/>
             
        </div>
        {/* side bar menu */}
        <div className={`absolute top-0 bottom-0 right-0 overflow-hidden bg-white transition-all ${visible?'w-full':'w-0'}`}>
          <div className='flex flex-col text-gray-600'>
            <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
              <img className='h4 rotate-180'src={assets.dropdown_icon}/>
              <p>Back</p>
            </div>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'><p>HOME</p></NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'><p>COLLECTION</p></NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'><p>ABOUT</p></NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'><p>CONTACT</p></NavLink>

          </div>
        </div>
       


    </div>
  )
}

export default NavBar