import React, { useEffect } from 'react';
import ItemDetails from '../../ItemDetails/ItemDetails';

import { useParams } from 'react-router-dom';
import { getDataOfCatigory } from '../../Redux/CatigorySlice';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../Loader/Loader';

export default function CatigoryProduct() {
 let {dataOfCatigory} = useSelector((state)=>state.catigoryPage)
 let productName = useParams().name;
 let dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDataOfCatigory(productName));
  }, [productName])
  return (
    <>
      {dataOfCatigory.length===0&&<Loader/>}
      <ItemDetails dataOfCatigory ={dataOfCatigory}/>
    </>
  
  )
}
