import React from 'react'
import NavBar from './components/NavBar'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import Profile from './components/Profile'
import ProductDetails from './components/ProductDetails';
import PageNotFound from './components/PageNotFound';
function App_2() {
  return (
   
   <>
    <NavBar/>
    <Home/>
    <Routes>
      <Route to="/" element={<Home/>}/>
      <Route to="/product" element={<Product/>}></Route>
      <Route to="/product/:id" element={<ProductDetails/>} ></Route>
      <Route path="/home" element={<Navigate to="/" />} />
      <Route to="*" element={<PageNotFound/>}></Route>
    </Routes>
   </>
  )
}

export default App_2