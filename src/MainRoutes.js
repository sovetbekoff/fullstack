import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import AddProduct from "./components/product/AddProduct";
import ProductList from "./components/product/ProductList";
import Register from "./components/Register";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
