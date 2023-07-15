import React from 'react'
import {Link} from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='bg-light sidebar'>
      <ul>
        <li>
          <Link to='/'>Home</Link> 
        </li>
        <li>
          <Link to='/myProfile'>My Profile</Link> 
        </li>
        <li>
          <Link to='/myOrders'>My Orders</Link> 
        </li>
        <li>
          <Link to='/wishlist'>Wishlist</Link> 
        </li>
        <li>
          <Link to='/help'>Help</Link> 
        </li>
        
        <li>
          <Link to='/logout'>Log Out</Link> 
        </li>
      </ul>
      
    </div>
  )
}
