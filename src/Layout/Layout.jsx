import React from 'react'
import Header from "../HomePage/Navbar"
import Footer1 from "../Services/Startproject"
import Footer2 from "../HomePage/Footer"
import { Outlet } from 'react-router-dom'
import ScrollToTop from "../ScrollTop";

const Layout = () => {
  return (
    <>   
       <ScrollToTop/>
       <Header/> 
       <Outlet/>
       <Footer1/>
       <Footer2/>
    </>
  )
}

export default Layout