import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from './productSinglPage.module.scss'
import { useDispatch } from 'react-redux'
import { clacTootlePrice, decreaseitemCont, increaseitemCont } from '../../Redux/CartSlice'
import Loader from '../../Loader/Loader'


export default function ProductSinglePage() {

  let dispatch =useDispatch()
  let dataOfProducts=[];
  if(localStorage.getItem('dataOfProducts')!==null) {
    dataOfProducts=JSON.parse(localStorage.getItem('dataOfProducts'));
  }

  let [contOfItem, setContOfItem] = useState(1);
  let [totalItems, setTotalItem] = useState(JSON.parse(localStorage.getItem('totalItems')))

  let {id}=useParams();
  const [dataOfProduct, setDataOfProduct] = useState([]);
  
  useEffect(() => {
    getData(id)
  }, []);

async function getData(id) {
  await axios.get(`https://dummyjson.com/products/${id}`)
    .then((respons)=>setDataOfProduct(respons.data))
    
}
function setNumOfItemsToLocalStorge(productId) {
  totalItems.push({id:productId,cont:contOfItem});
  localStorage.setItem('totalItems',JSON.stringify(totalItems))
}

function setDataToLoclaStorige (dataOfProduct) {
  for (let i = 0; i < dataOfProducts.length; i++) 
    if(dataOfProduct.id===dataOfProducts[i].id) 
      return;

  dataOfProducts.push(dataOfProduct);
  localStorage.setItem('dataOfProducts',JSON.stringify(dataOfProducts));
  setNumOfItemsToLocalStorge(dataOfProduct.id,contOfItem);
}

function increaseNumOfItem() {
  setContOfItem(contOfItem+1)
}
function decreaseNumOfItem() {
  if(contOfItem!==1) {
    setContOfItem(contOfItem-1)
    
  }

  
}




  return (
    
    <>

      <div className="modal fade bg-transparent" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-transparent border-0">
            <div className={` ${style.model} modal-body`}>
              An Item Has Been Added To Your Shopping Cart
            </div>
          </div>
        </div>
      </div>


      {dataOfProduct?.price==null&&<Loader/>}
        <div className= {`conten ${style.pageOfProduct} row gx-5 bg-white rounded-1  p-3 text-black`}>
        <div className="box col-md-6 ">
          <div className="boxOfImgs ">
            <img className='w-100' src={dataOfProduct.thumbnail} alt="" />
            <div className="smallImg row mt-4">
              <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className='col-md-3 carousel-item active'><img className=' d-block w-100'  src={dataOfProduct.thumbnail} alt="" /></div>
                  {dataOfProduct.images?.map((img , index)=> <div key={index} className='col-md-3 carousel-item'><img className=' d-block w-100'  src={img} alt="" /></div>)}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="box col-md-6 ">
        <div className="info ">
          <h2 className= {`${style.title} m-0 py-2`}>{dataOfProduct.title}</h2>
          <div className={`${style.description}`}>
            <p className=''>{dataOfProduct.description}</p>
            <div className={`${style.details}`}>
              <span>Rating: <span>{dataOfProduct.rating}</span></span>
              <span>Brand: <span>{dataOfProduct.brand}</span> </span>
              <span>Category: <span>{dataOfProduct.category}</span> </span>
            </div>
            <div className={`${style.descount}`}>
              <span className='oldPrice'><span>${dataOfProduct.price}.00</span> Inclusive of all taxes</span>
              <div className= {`${style.newPrice} my-2`}>
                <span>{ JSON.stringify(dataOfProduct?.price - (dataOfProduct?.price * (12.96/100))?.toFixed(2))}</span>
                <span>{dataOfProduct.discountPercentage}% off</span>
              </div>
            </div>
            <div className={`${style.btns} `}>
            
              <div className={`${style.decAndInc} my-5`} >
              Quantity:
                <button onClick={()=>decreaseNumOfItem()} className='Decrease'>-</button>
                  {contOfItem}
                <button onClick={()=>increaseNumOfItem()} className=' increase '>+</button>
              </div>
                <div className={`${style.cartAndBuy}`}>
                  
                    <button  onClick={()=>(setDataToLoclaStorige(dataOfProduct),dispatch(clacTootlePrice()))}  className="add me-4" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"><i className="fa-solid fa-cart-shopping"></i> Add To Cart</button>
                  
                <button  className='buy'>Buy Now</button>
                </div>
              
            </div>
          </div>
        </div>
        </div>
      </div>
      </>
    
  )
}
