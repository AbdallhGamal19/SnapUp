import React, { Children } from 'react';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import './App.scss'
//pages
import CartPage from '../src/Pages/CartPage/CartPage';
import CatigoryProduct from '../src/Pages/CatigoryProduct/CatigoryProduct';
import HomePage from '../src/Pages/HomePage/HomePage';
import ProductSinglePage from '../src/Pages/ProductSinglePage/ProductSinglePage';
import SearchPage from '../src/Pages/SearchPage/SearchPage';

//components
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import Sidebar from '../src/components/Sidebar/Sidebar';
import LayOut from './components/LayOut/LayOut';



function App() {
  let routs=createHashRouter([
    {path:'/' , element: <LayOut/>, children:[
      {index : true , element : <HomePage/>},
      {path:'catigory/:name', element :<CatigoryProduct/>},
      {path:'cart', element : <CartPage/>},
      {path:'product/:id', element : <ProductSinglePage/>},
      {path:'search/:nameOfProduct', element : <SearchPage/>},
  ]
}])
  return (
    <RouterProvider router={routs}/>
    
  );
}

export default App;
