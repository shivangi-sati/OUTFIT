import { useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Collection from './pages/Collection'
import About from './pages/About'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Contact from './pages/Contact'
import SearchBar from './components/SearchBar'
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer'
function App() {


  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] border-box p-0 m-0'> 
    <ToastContainer/>
    <NavBar/>
    <SearchBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/collection' element={<Collection/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/placeorder' element={<PlaceOrder/>}/>
      <Route path='/products/:productId' element={<Product />} />
    </Routes>
    <Footer/>

</div>
     
  )
}

export default App
