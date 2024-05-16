import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./page/home/Home";
import Footer from "./layout/Footer";
import Product from "./page/shop/Product";
import ProductDetails from "./page/shop/ProductDetails";
import Login from "./page/user/Login";
import SignUp from "./page/user/Register";
import Dashboard from "./page/Dashboard";
import ProtectUser from "./utils/ProtectUser";
import Index from "./components/dashboard/Index";
import Orders from "./components/dashboard/Orders";
import Wishlist from "./components/dashboard/Wishlist";
import Order from "./components/dashboard/Order";
import ChangePassword from "./components/dashboard/ChangePassword";
import { Chat } from "@mui/icons-material";
import Contact from "./components/Contact";
import Blog from "./page/blogs/Blog";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Product />} />
        <Route path="/shop-details" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route path="/contact-us" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/dashboard" element={<ProtectUser />}>
          <Route path="" element={<Dashboard />}>
            <Route path="" element={<Index />} />
            <Route path="my-orders" element={<Orders />} />
            <Route path="my-wishlist" element={<Wishlist />} />
            <Route path="order/details/:orderId" element={<Order />} />
            <Route path="chage-password" element={<ChangePassword />} />
            <Route path="chat" element={<Chat />} />
            <Route path="chat/:sellerId" element={<Chat />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
