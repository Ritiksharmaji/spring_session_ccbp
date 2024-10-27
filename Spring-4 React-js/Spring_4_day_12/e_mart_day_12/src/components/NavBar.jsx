import React from 'react'
import { Link } from 'react-router-dom'
// for cart
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from 'react-redux';

function NavBar() {
  const quantity = useSelector((store)=> store.cartReducer.cartQuantity)
 
  return (
    <div className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/user'>User</Link>
        <Link to='/cart'>
        <div className='cart_container'>
          <div className='cart_container_icon'>
          <FaCartArrowDown/>
          </div>
          <div className='cart_container_quantity'>
           {quantity}
          </div>
        </div>
        
        </Link>
    </div>
    
  )
}

export default NavBar