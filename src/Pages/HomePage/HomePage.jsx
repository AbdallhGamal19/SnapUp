import axios from 'axios'
import React, { useEffect, useState } from 'react'   
import ItemDetails from '../../ItemDetails/ItemDetails';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Loader from '../../Loader/Loader';

export default function HomePage() {
  localStorage.setItem('dataOfProducts',"[]");
  localStorage.setItem('totalItems',"[]");
  let productsName =['Skincare','Groceries','Smartphones','Laptops','Home-Decoration'];
  const [dataOfCatigories, setDataOfCatigories] = useState([]);
  const [dataOfHome, setDataOfHome] = useState([]);
  useEffect(() => {
    getDataOfOur();
    getDataOfProducts()
  }, [])
  
  
    async function getDataOfOur() {
      let dataOfCatigories=[];
      for (let i = 0; i < productsName?.length; i++) {
        let {data} = await axios.get(`https://dummyjson.com/products/category/${productsName[i]}`);
        dataOfCatigories.push(data);
      } 
      setDataOfCatigories(dataOfCatigories)
    } 

  
  async function getDataOfProducts() {
    let {data} = await axios.get('https://dummyjson.com/products');
    await setDataOfHome(data);
  }
 
  
  return (
    <>
    
    {dataOfHome.length===0&&<Loader/>}
    <OwlCarousel className=" owl-theme mb-5" autoplay={true} autoplayTimeout={2000} autoplayHoverPause={true} margin={10} dots={false} items={1} loop={true}>
    <div className="image">
      <img className='h-100' src={require('./images/slider_img_1.b52758991907ca139bed.jpg')} alt="" />
    </div>
    <div className="image">
      <img className='h-100' src={require('./images/slider_img_2.d2b62640a3fd93694d28.jpg')} alt="" />
    </div>
    
    </OwlCarousel>

      <div className="sectionName">SEE OUR PRODUCTS</div>
      <ItemDetails dataOfCatigory={dataOfHome}/>
      
      
      {dataOfCatigories?.map((data,index)=><div className='section' key={index}> 
        <div  className="sectionName">{productsName[index]}</div>
        <ItemDetails    dataOfCatigory={data}/>
      </div>
      
      )}
    </>
    
  )
}
