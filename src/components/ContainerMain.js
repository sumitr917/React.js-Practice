import React from 'react'
import Sidebar from './Sidebar'
import Home from './Home'
import WishList from './WishList'
import MyOrders from './MyOrders'
import Help from './Help'
import MyProfile from './MyProfile'
import Logout from './Logout'
import { BrowserRouter } from 'react-router-dom'
import {Route, Routes} from 'react-router-dom'

export default function ContainerMain() {
  return (
    <div>
        <div className='row bg-light'>
          <BrowserRouter>
            <div className='col-md-2'>
                <Sidebar></Sidebar>
            </div>
            <div className='col-md-10'>
              <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/myOrders' element={<MyOrders/>}></Route>
                <Route path='/wishlist' element={<WishList/>}></Route>
                <Route path='/help' element={<Help/>}></Route>
                <Route path='/myProfile' element={<MyProfile/>}></Route>
                <Route path='/logout' element={<Logout/>}></Route>
              </Routes>
            </div>
          </BrowserRouter>
        </div>
    </div>
  )
}
