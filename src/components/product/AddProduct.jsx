import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";

const AddProduct = () => {
  const { getCategories, categories, addProducts } = useProducts();

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "image") {
      setProduct({
        ...product,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setProduct({
        ...product,
        [e.target.name]: e.target.value,
      });
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  console.log(categories);

  function handleSave() {
    let newProduct = new FormData();
    newProduct.append("title", product.title);
    newProduct.append("description", product.description);
    newProduct.append("price", product.price);
    newProduct.append("category", product.category);
    newProduct.append("image", product.image);
    addProducts(newProduct);
  }

  return (
    <Box
      sx={{
        width: "40vw",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" sx={{ m: 2 }}>
        Add new product
      </Typography>
      <TextField
        sx={{ m: 1 }}
        id="standard-basic"
        label="Title"
        variant="outlined"
        fullWidth
        name="title"
        onChange={handleInp}
        value={product.title}
      />
      <TextField
        sx={{ m: 1 }}
        id="standard-basic"
        label="Description"
        variant="outlined"
        fullWidth
        name="description"
        onChange={handleInp}
        value={product.description}
      />
      <TextField
        sx={{ m: 1 }}
        id="standard-basic"
        label="Price"
        variant="outlined"
        fullWidth
        name="price"
        onChange={handleInp}
        value={product.price}
      />

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Image</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="сфеупщкн"
          onChange={handleInp}
          value={product.category}
          name="category"
        >
          {categories?.map((item) => (
            <MenuItem value={item.id} key={item.id}>
              {item.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <input type="file" name="image" onChange={handleInp} />

      <Button
        sx={{
          m: 1,
        }}
        variant="outlined"
        fullWidth
        size="large"
        onClick={handleSave}
      >
        ADD PRODUCT
      </Button>
    </Box>
  );
};

export default AddProduct;
