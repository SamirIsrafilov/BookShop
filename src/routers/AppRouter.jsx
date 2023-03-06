import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Categories from '../pages/Categories';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Layout from '../pages/Layout';
import SignUp from '../pages/SignUp';
import BookDeatails from '../pages/BookDeatails';
import Card from '../pages/Card';
import { CartProvider } from 'react-use-cart';

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path='/' element={<Layout/>} >
          <Route path='/' element={<Home />}></Route>
          <Route path='/categories' element={<Categories />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/cart' element={<Card />}></Route>

       
        <Route path="/:productId" element={<BookDeatails/>}></Route>
          </Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>

          
        </Routes>
        </CartProvider>


      </BrowserRouter>


    </div>
  )
}

export default AppRouter