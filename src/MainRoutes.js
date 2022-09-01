import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import AddProduct from "./components/product/AddProduct";
import EditProduct from "./components/product/EditProduct";
import ProductDetails from "./components/product/ProductDetails";
import ProductList from "./components/product/ProductList";
import Register from "./components/Register";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/posts/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default MainRoutes;
