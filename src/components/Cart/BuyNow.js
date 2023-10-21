import { Box, TextField, Typography } from "@mui/material";
import React from "react";

function BuyNow() {
  return (
    <Box width="100%" display="flex" justifyContent="space-evenly" my="70px">
      <Box
        width="30%"
        height="230px"
        display="flex"
        border="0.5px solid grey"
        justifyContent="space-evenly"
        sx={{ borderRadius: "5px" }}>
        <img
          style={{ width: "150px", height: "200px" }}
          src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
          alt="Product Image"
        />
        <Box display="flex" flexDirection="column">
          <Typography>PRODUCT NAME</Typography>
          <Box display="flex">
            <select>
              <option>Size : </option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
            <select>
              <option>Quantity : </option>
              <option value="1">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
              <option value="1">5</option>
            </select>
          </Box>
        </Box>
      </Box>
      <Box width="50%" display="flex" flexDirection="column">
        <Box display="flex">
          <Typography>Total MRP </Typography>
          <Typography>RUPEE ICON PRICE</Typography>
        </Box>
        <select>
            <option >ADDRESS TYPE</option>
            <option value="home">HOME</option>
            <option value="office">OFFICE</option>
            
        </select>
        <form>
            <Typography>Your Address: </Typography>
        <TextField
          required
          fullWidth
          sx={{ marginTop: "30px" }}
          label="Address"
          variant="outlined"
        />
        </form>
      </Box>
    </Box>
  );
}

export default BuyNow;
