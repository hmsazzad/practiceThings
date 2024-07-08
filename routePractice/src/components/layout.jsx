import React from 'react'
import Navbar from './navbar'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";




function Layout() {
  return (
    <div className='flex gap-8 items-center'>
      <Navbar />
      <Outlet/>
    </div>
  )
}

export default Layout