import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='main-bg  text-center py-4'>
      <div className="footerLinks ">
        <ul className='d-flex justify-content-center align-items-center fs-5 ' >
          <li>
            <Link to='/'>PRIVACY POLICY</Link>
          </li>
          <li className="vert-line"></li>
          <li>
            <Link to='/'>TERM OF SERVICE</Link>
          </li>
          <li className="vert-line"></li>
          <li>
            <Link to='/'>ABOUT SNAPUP.</Link>
          </li>
        </ul>
      </div>
      <p className='fs-5 text-white mt-3'>© 2023 SnapUp. All Rights Reserved.</p>
    </footer>
  )
}
