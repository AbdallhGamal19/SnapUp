
import React, { useEffect } from 'react'
import ItemDetails from '../../ItemDetails/ItemDetails';
import { useParams } from 'react-router-dom';
import { getDataOfSearch } from '../../Redux/SearchSlice';
import { useDispatch, useSelector,  } from 'react-redux';

export default function SearchPage() {

let {nameOfProduct} = useParams()

let dispatch = useDispatch();
let {dataOfSearch} = useSelector((state)=> state.searchPage);
useEffect(() => {
  dispatch( getDataOfSearch(nameOfProduct))
  
}, [nameOfProduct])

  return (
    <>
    {dataOfSearch.products?.length === 0 ? <div className='fw-bold text-danger fs-1 p-2'>No Products Found.</div>
    :<>
    <div className="sectionName">SEARCH RESULTS:</div>
      {<ItemDetails dataOfCatigory={dataOfSearch}/>}
    </>}
      
    </>
   
  )
}
