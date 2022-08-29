import { Box } from "@mui/material";
import React from "react";
import ProductList from "../components/product/ProductList";
// import SideBar from "../components/SideBar";

const ProductsPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* ProductsPage
      <SideBar /> */}
      <ProductList />
    </Box>
  );
};

export default ProductsPage;
