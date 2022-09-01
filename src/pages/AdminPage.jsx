import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AddProduct from "../components/product/AddProduct";

const AdminPage = () => {
  return (
    <div>
      <Box sx={{ margin: "2%" }}>
        <Typography variant="h3" sx={{ fontWeight: "700" }}>
          Admin panel
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          if you are not an admin, please leave
        </Typography>
      </Box>
      <AddProduct />
    </div>
  );
};

export default AdminPage;
