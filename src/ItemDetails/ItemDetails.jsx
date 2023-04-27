import React, { useEffect, useState } from 'react'

import style from './item.module.scss'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader'

export default function ItemDetails({dataOfCatigory}) {
    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts(dataOfCatigory.products);
    }, [dataOfCatigory.products])
    return (
        <>
        <div className="row g-5 ">
        {products?.map((product,index )=><div key={index} className=" col-md-6 col-lg-4 col-xl-3 ">
        <Link to={`/product/${product.id}`}>
            <div className= {`${style.item} position-relative bg-white text-center`}>
                <span className={`${style.pots}`}>{product.category}</span>
                <img className='w-100 ' src={product.thumbnail} alt="" />
                <div className="info p-3">
                <div className={`${style.brandName} pb-2`}>Brand: <span className='text-black '>{product.brand}  </span></div>
                <div className={style.productName}><span>{product.title}</span></div>
                <div className={`${style.priceInfo} fs-4  d-flex justify-content-center`}>
                <span>${product.price}</span>
                <span>{`$${(product.price-((product.discountPercentage/100)* product.price)).toFixed(2)}`}</span>
                <span>(% off)</span>
                
                </div>
                </div>
            </div>
        </Link>
            
        </div>
        )}
        </div>
            
            
        
        </>
        
    )
}
