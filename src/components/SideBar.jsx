import SearchIcon from "@mui/icons-material/Search";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../contexts/ProductContextProvider";

const SideBar = () => {
  const { getProducts, fetchByParams } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Paper
      sx={{
        m: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        p: 5,
        maxHeight: "50vh",
      }}
    >
      <Box>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label" sx={{ mb: 2 }}>
            Categories
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="all"
            name="radio-buttons-group"
            onChange={(e) => fetchByParams("type", e.target.value)}
          >
            <FormControlLabel value="all" control={<Radio />} label="All" />
            <FormControlLabel
              value="electronics"
              control={<Radio />}
              label="Electronics"
            />
            <FormControlLabel value="sport" control={<Radio />} label="Sport" />

            <FormControlLabel
              value="clothes"
              control={<Radio />}
              label="Clothes"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <TextField
        sx={{ mt: 3 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        id="input-with-icon-textfield"
        // label="TexxtField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
    </Paper>
  );
};

export default SideBar;
