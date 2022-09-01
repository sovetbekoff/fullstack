import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";

const EditProduct = () => {
  const { getProductsDetails, SaveEditProduct, oneProduct } = useProducts();

  const [product, setProduct] = useState(oneProduct);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    setProduct(oneProduct);
  }, [oneProduct]);

  useEffect(() => {
    getProductsDetails(id);
  }, []);

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  const handleSave = (obj) => {
    let res = {
      id: obj.id,
      title: obj.title,
      description: obj.description,
      price: obj.price,
      category: obj.category,
    };
    SaveEditProduct(res);
  };

  console.log(product);

  return (
    <Box
      sx={{
        width: "40vw",
        margin: "10vh auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" sx={{ m: 2 }}>
        Edit product
      </Typography>
      <TextField
        sx={{ m: 1 }}
        id="standard-basic"
        label="Title"
        variant="outlined"
        color="secondary"
        fullWidth
        name="title"
        onChange={handleInp}
        value={product?.title || ""}
        focused
      />
      <TextField
        sx={{ m: 1 }}
        id="standard-basic"
        label="Description"
        variant="outlined"
        color="secondary"
        fullWidth
        name="description"
        onChange={handleInp}
        value={product?.description || ""}
        focused
      />
      <TextField
        sx={{ m: 1 }}
        id="standard-basic"
        label="Price"
        variant="outlined"
        color="secondary"
        fullWidth
        name="price"
        onChange={handleInp}
        value={product?.price || ""}
        focused
      />
      <TextField
        sx={{ m: 1 }}
        id="standard-basic"
        label="Type"
        variant="outlined"
        color="secondary"
        fullWidth
        name="category"
        onChange={handleInp}
        value={product?.category || ""}
        focused
      />
      <Button
        sx={{
          m: 1,
          bgcolor: "#8C2CEF",
          color: "#fff",
          "&:hover": { bgcolor: "#8125DC" },
        }}
        variant="outlined"
        fullWidth
        size="large"
        onClick={() => {
          handleSave(product);
          navigate("/products");
        }}
      >
        SAVE PRODUCT
      </Button>
    </Box>
  );
};

export default EditProduct;
