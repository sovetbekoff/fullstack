import { Pagination } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { getProducts, products, pages } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getProducts();
  }, []);

  // console.log(products);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);

  return (
    <div>
      <Box>
        ProductList
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Box>

      <Box>
        <Pagination
          count={pages}
          variant="outlined"
          color="primary"
          onChange={(e, page) => setCurrentPage(page)}
          page={currentPage}
        />
      </Box>
    </div>
  );
};

export default ProductList;
