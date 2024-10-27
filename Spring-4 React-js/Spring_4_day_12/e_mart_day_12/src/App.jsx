import React from 'react'
import NavBar from './components/NavBar'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import PageNotFound from './pages/PageNotFound';
import Cart from './pages/Cart';
import User2 from './pages/User2';
import PaginationProvider from './contexts/PaginationContext';

function App() {
  return (
   <>
   <PaginationProvider>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/product/:id" element={<ProductDetails/>} ></Route>
      <Route path='/user' element={<User2/>}/>
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="*" element={<PageNotFound/>}></Route>
    </Routes>
    </PaginationProvider>
   </>
  )
}
export default App