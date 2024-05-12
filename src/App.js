import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './layout/Navbar';
import Home from './page/home/Home';
import Footer from './layout/Footer';
import Product from './page/shop/Product';
import ProductDetails from './page/shop/ProductDetails';
import Login from './page/user/Login';
import SignUp from './page/user/Register';

function App() {
  return (
    < >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Product />} />
        <Route path='/shop-details' element={<ProductDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
            </Routes>
      <Footer />
    </>
  );
}

export default App;
