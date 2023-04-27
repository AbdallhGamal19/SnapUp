import React from 'react';
import  style from './header.module.scss';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
export default function Header() {
  return (
    <header className={`text-white  fs-5 ${style.header}`}>
      <div className="container-fluid">
        <div className="header-cnt">
          <div className={` d-flex justify-content-between align-items-center ${style.headerCntTop}`}>
            <div className="head-l mb-2">
              <ul className='d-flex align-items-center'>
                <li>
                <span><Link to='/' >Seller Center</Link></span>
                </li>
                <li className='vert-line'></li>
                <li>
                <span><Link to='/' >Download</Link></span>
                </li>
                <li className='vert-line'></li>
                <li className='d-flex align-items-center'>
                <span> Follow us on</span>
                <ul className='d-flex align-items-center fs-4'>
                  <li className='m-3' >
                    <a href='www.facebook.com'><i className='fab fa-facebook'></i></a>
                  </li>
                  <li>
                    <a href='www.instagram.com'><i className='fab fa-instagram'></i></a>
                  </li>
                </ul>
                </li>
              </ul>
            </div>
            <div className="head-r">
              <ul className='d-flex align-items-center'>
                <li>
                  <Link to='/'>
                    <i className='fa-solid fa-circle-question me-2'></i>
                    <span>Support</span>
                  </Link>
                </li>
                <li className='vert-line'></li>
                <li>
                  <span><Link to='/'>Register</Link></span>
                </li>
                <li className='vert-line'></li>
                <li>
                  <span><Link to='/'>Login</Link></span>
                </li>
              </ul>
            </div>
          </div>
          <Navbar/>
        </div>
      </div>
    </header>
  )
}
