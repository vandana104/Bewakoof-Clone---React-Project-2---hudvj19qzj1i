import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateProvider } from "../utils/StateProvider";

function Product({ obj, key, size }) {
  const [{ productId }, dispatch] = useStateProvider();

  const navigate = useNavigate();

  const handleWishList = (obj) => {
    var productcard = JSON.parse(localStorage.getItem("products")) || [];

    const flag = productcard.some((card) => card._id === obj._id);
    console.log(flag);

    if (!flag) {
      const UpdatedVideo = [...productcard, obj];
      localStorage.setItem("products", JSON.stringify(UpdatedVideo));
      console.log(productcard);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      border="1px solid rgba(1,1,1,0.3)"
      width={size.width}
      height={size.height}
      onClick={() => {
        console.log(obj._id);
        dispatch({ type: "SET_PRODUCTID", payload: obj._id });
        setTimeout(() => {
          handleWishList(obj);
          navigate("/product");
        }, 1000);
      }}
      sx={{
        cursor: "pointer",
        "@media(max-width:500px)": { width: "200px" },
        ":hover": { transform: "scale(1.1)" },
        transition: "transform 0.5s",
      }}>
      <img
        src={obj.displayImage}
        style={{ width: "100%", height: "75%", objectFit: "cover" }}
      />
      <Box padding="10px">
        <Typography
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          fontWeight="600"
          color="rgba(1,1,1,0.8)">
          {obj.brand}
        </Typography>
        <Typography
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis">
          {obj.description}
        </Typography>
        <Typography>&#8377;{obj.price} </Typography>
      </Box>
    </Box>
  );
}

export default Product;