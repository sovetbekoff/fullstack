import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import AddProduct from "./components/product/AddProduct";
import EditProduct from "./components/product/EditProduct";
import ProductDetails from "./components/product/ProductDetails";
import ProductList from "./components/product/ProductList";
// import NotFoundPage from "./components/product/NotFoundPage";
import Register from "./components/Register";
import AboutUsPage from "./pages/AboutUsPage";
import AdminPage from "./pages/AdminPage";
// import CartPage from "./pages/CartPage";
// import EditProductPage from "./pages/EditProductPage";
import HomePage from "./pages/HomePage";

import NotFoundPage from "./pages/NotFoundPage";
import ProductsPage from "./pages/ProductsPage";
// import RegistrationPage from "./pages/RegistrationPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/about",
      element: <AboutUsPage />,
      id: 2,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 3,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 5,
    },
    {
      link: "/posts/:id",
      element: <ProductDetails />,
      id: 6,
    },
    {
      link: "/products",
      element: <ProductsPage />,
      id: 7,
    },
    // {
    //   link: "/loginn",
    //   element: <LoginPagee />,
    //   id: 8,
    // },
    // {
    //   link: "/register",
    //   element: <RegistrationPage />,
    //   id: 9,
    // },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 10,
    },
  ];

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/registerr" element={<Register />} />

        <Route path="register" element={<Register />} />

        <Route path="/add" element={<AddProduct />} />
        <Route path="/product" element={<ProductList />} />
        {/* <Route path="/page" element={<NotFoundPage />} /> */}
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
