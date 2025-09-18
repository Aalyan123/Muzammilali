import React from 'react'
import Header from "../HomePage/Navbar"
import Footer1 from "../Services/Startproject"
import Footer2 from "../HomePage/Footer"
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
       <Header/> 
       <Outlet/>
       <Footer1/>
       <Footer2/>
    </>
  )
}

export default Layout