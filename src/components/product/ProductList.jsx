import { Pagination } from "antd";
// import React from "react";
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

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);

  return (
    <>
      <div>
        ProductList
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>

      <Pagination size="small" total={20} />
      <Pagination size="small" total={20} showSizeChanger showQuickJumper />
      <Pagination size="small" total={20} />
      <Pagination
        size="small"
        total={20}
        disabled
        showSizeChanger
        showQuickJumper
      />
    </>
  );
};

export default ProductList;
