import React, { useEffect, useState } from 'react'
import style from './cart.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { clearProducts, clacTootlePrice, deleteProduct ,decreaseitemCont ,increaseitemCont} from '../../Redux/CartSlice';
import { Link } from 'react-router-dom';
import shoping_img from './shopping_cart.9bdd8040b334d31946f4.png'
export default function CartPage() {
  let items = JSON.parse(localStorage.getItem('dataOfProducts'))  ;
  let totalItems = JSON.parse(localStorage.getItem('totalItems'))  ;
  let {carts,totalPrice} = useSelector((state)=> state.cartPage);
  let dispatch =useDispatch();
  let [Products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(items)
    dispatch(clacTootlePrice())
  }, [JSON.stringify(items),carts,JSON.stringify(totalItems)])
  
  return (
    <>
        {Products.length===0?
        <div className= {`${style.box} py-5 text-center bg-white`}>
          <img  src={shoping_img} alt="" />
        
          <div className="message">
            <p>Your shopping cart is empty.</p>
            <Link to='/'>
              <button className=''>Go shopping Now</button>
            </Link>
          </div>
        </div>
        :
      <>
    <div className="cart">
      <div className={`${style.cartHead} mb-5`}>
        <span>S.N.</span>
        <span>Product</span>
        <span>Unit Price</span>
        <span>Quantity</span>
        <span>Total Price</span>
        <span>Actions</span>
      </div>
      {Products?.map((Product,index)=><div key={index} className={`${style.cartBody}`}>
      <span>{index+1}</span>
        <span>{Product.title}</span>
        <span>{Product?.price - (Product.price * (Product.discountPercentage/100)).toFixed(1)}</span>
        <span className='text-center'>
          <button onClick={()=>dispatch(decreaseitemCont(Product.id),dispatch(clacTootlePrice()))} className='Decrease d-block m-auto'>-</button>
                    {totalItems[index]?.cont}
          <button onClick={()=>dispatch(increaseitemCont(Product.id),dispatch(clacTootlePrice()))} className=' increase d-block m-auto'>+</button>
        </span>
        <span>{(Product.price*totalItems[index]?.cont) - ((Product.price*totalItems[index]?.cont) * (Product.discountPercentage/100)).toFixed(1)}</span>
        <span onClick={()=>dispatch(deleteProduct(Product.id))} className='text-black'>Delete</span>
      </div>
        )}
        <div className="cartFooter d-flex justify-content-between align-items-center bg-white p-5 mt-5 rounded-2">
          <div className="clearBtn">
            <button onClick={()=>dispatch(clearProducts())}  className='btn btn-outline-danger fs-4 rounded-0 p-3'> <i className="fas fa-trash me-2"></i>CLEAR CART</button>
          </div>
          <div className={style.tootle}>
            <span className='fs-4'>Tootle <span>({items.length})</span> items : <span className={style.tootlePrice}>{totalPrice}</span></span>
            <div className={style.checkOut}>check out</div>
          </div>
        </div>
    </div>
        
      </>
      }
    </>
    
  )
}
