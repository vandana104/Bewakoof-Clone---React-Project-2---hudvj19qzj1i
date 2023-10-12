import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateProvider } from "../utils/StateProvider";

function Product({ obj }) {
    const [{productId},dispatch] = useStateProvider()

  const navigate = useNavigate();

  useEffect(() => {
    console.log(productId);
  }, [productId]);
  return (
    <Box
      display="flex"
      flexDirection="column"
      border="1px solid rgba(1,1,1,0.3)"
      width="300px"
      height="406px"
      onClick={() => {
        console.log(obj._id);
        dispatch({ type: "SET_PRODUCTID", payload: obj._id });
        setTimeout(() => {
          navigate("/product");
        }, 1000);
      }}
      sx={{ cursor: "pointer" }}>
      <img src={obj.displayImage} style={{ width: "100%", height: "75%" }} />
      <Typography>{obj.brand}</Typography>
      <Typography whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
        {obj.description}
      </Typography>
      <Typography>{obj.price + " $"}</Typography>
    </Box>
  );
}

export default Product;
