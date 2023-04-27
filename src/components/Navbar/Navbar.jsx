import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './navbar.module.scss'
import Sidebar from '../Sidebar/Sidebar';
import {  useSelector } from 'react-redux';




export default function Navbar() {
  let {dataOfCatigory} = useSelector((state)=>state.catigoryPage)
  let input = document.querySelector('.middel-nav input');
  let {conter} = useSelector((state)=> state.cartPage);
  const [searchTerm, setSearchTerm] = useState("");

  function enptyInput() {
    input.value='';
  }

  function setProductToLocal(e) {
    setSearchTerm(e.target.value);
  }
  return (

  <nav>
    <Sidebar/>
    <div className="container-fluid">
      <div className="main-nav py-3 d-flex align-items-center justify-content-evenly">
        <div className="left-nav">
          <ul className='d-flex align-items-center'>
            <li className='me-3'>
            <button className='text-white' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><span><i className="fas fa-bars fs-3"></i></span></button>
            </li>
            <li className='me-3'>
            <Link><span><i className="fa-solid fa-bag-shopping fs-2"></i></span></Link>
            </li>
            <li><span className='fw-bold fs-2'><Link to='/'>Snap<span className='fw-normal'>Up.</span></Link></span></li>
          </ul>
        </div>
        <div className= {`${style.middelNav} w-75`}>
            <div className="searchInput bg-white rounded-2  p-2 d-flex align-items-center justify-content-between ">
            <input onChange={(e)=>setProductToLocal(e) } className=' inputCeret px-3 w-75  me-4' type="text" placeholder='Search your preferred items here' />
            <Link onClick={()=>enptyInput()}  to={`/search/${searchTerm}`}><i  className="fa-solid fa-magnifying-glass btnColor fs-4 py-2 px-4"></i></Link>
            </div>
            <div className={`${style.LinksComponents}`}>
              <ul className='d-flex align-items-center py-2'>
                <li className='me-3'><Link to="catigory/smartphones">Smartphones</Link></li>
                <li className='me-3'><Link to="catigory/laptops">Laptops</Link></li>
                <li className='me-3'><Link to="catigory/fragrances ">Fragrances</Link></li>
                <li className='me-3'><Link to="catigory/skincare ">Skincare</Link></li>
                <li className='me-3'><Link to="catigory/groceries">Groceries</Link></li>
                <li className='me-3'><Link to="catigory/Home-Decoration">Home Decoration</Link></li>
                <li className='me-3'><Link to="catigory/Furniture">Furniture</Link></li>
                <li className='me-3'><Link to="catigory/tops">Tops</Link></li>
                
              </ul>
            </div>
        </div>
        <div className="right-nav">
          <div  className="iconCart position-relative">
            <Link to='/cart'>
              <i className='fa-solid fa-cart-shopping fs-3'></i>
              <span className={`${style.spanCart}`}> {conter}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}
