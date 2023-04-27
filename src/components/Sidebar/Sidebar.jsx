import React from 'react'

import style from './sidebar.module.scss'
import { Link } from 'react-router-dom'
export default function Sidebar() {
  let productName =['Fragrances','Skincare','Groceries','Smartphones','Laptops','Home-Decoration',
                    'Furniture','Tops','Womens-Dresses','Womens-Shoes','Mens-shirts','Mens-shoes',
                    "Mens-watches","Womens-watches","Womens-bags","Womens-jewellery","Sunglasses",
                    "Automotive","Motorcycle","Lighting"]
  return (

<>
<div className={` offcanvas offcanvas-start offcanvas offcanvas-start p-3  ${style.side} `} data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div className="offcanvas-header pe-0">
    <h5 className="offcanvas-title fw-bold " id="offcanvasWithBothOptionsLabel">ALL CATEGORIES</h5>
    <button type="button" data-bs-dismiss="offcanvas" aria-label="Close"><i className= {` fa-solid fa-xmark ${style.btnColor}`}></i></button>
  </div>
  <div className="offcanvas-body">
  <ul className=''>
  {productName.map((product,index)=><li key={index}><Link  to={`catigory/${product} `}>{product}</Link></li>)}
    
  </ul>
    
  </div>
</div></>
  )
}
