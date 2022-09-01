import { Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
// import "../../styles/ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  // console.log(id);

  const { getProductsDetails, oneProduct } = useProducts();
  const [product, setProduct] = useState(oneProduct);
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    getProductsDetails(id);
  }, []);

  useEffect(() => {
    setProduct(oneProduct);
  }, [oneProduct]);

  console.log(product);

  return (
    <Paper sx={{ m: 5 }} elevation={6}>
      <Grid container spacing={2}>
        <Grid className="productDetails_img" item xs={6}>
          <img
            src={product.image}
            alt=""
            style={{ maxWidth: "100%", maxHeight: "70vh" }}
          />
        </Grid>
        <Grid sx={{ marginTop: 3 }} className="productDetails_info" item xs={6}>
          <Typography className="productDetails_name" variant="h4">
            {product.title}
          </Typography>
          <Typography className="productDetails_type" variant="subtitle1">
            {product.category}
          </Typography>
          <Typography className="productDetails_price" variant="caption">
            ${product.price}
          </Typography>
          <Typography
            sx={{ paddingRight: "20px" }}
            className="productDetails_descr"
          >
            {product.description}
          </Typography>
        </Grid>
      </Grid>
      {/* ----------- */}
      <BottomNavigation
        className="bottom_nav"
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          onClick={() => navigate(`/products/`)}
          icon={<ArrowBackIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default ProductDetails;
