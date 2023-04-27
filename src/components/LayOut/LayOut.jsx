import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'


export default function LayOut() {
  return (
    <>
        <Header/>
        <div className="container py-5">
          <Outlet/>
        </div>
        <Footer/>
    </>
  )
}
