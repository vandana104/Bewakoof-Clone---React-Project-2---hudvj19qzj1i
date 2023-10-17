// import { ShoppingBagOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useStateProvider } from "../../utils/StateProvider";
import Product from "../Product";

function Wishlist() {
  const [{ products }] = useStateProvider();
  const [ownProduct, setOwnProduct] = useState([]);
  useEffect(() => {

    const productCards = JSON.parse(localStorage.getItem("products")) || [];
    const changedProduct = productCards.filter((obj) => obj.wishList === true);
    // const videocard = JSON.parse(localStorage.getItem("products")) || [];
    // const changedProduct = videocard.filter((obj) => obj.wishList === true);

    console.log("success", changedProduct);
    setOwnProduct(changedProduct);
  }, []);
  //   const changedVideo = videocard.filter((obj) => obj.wishList === true);
  //   console.log("absh", changedVideo);
  //   setOwnProduct(changedVideo);
  // }, []);



  // useEffect(() => {
  //   console.log("djhfdjf", ownProduct);
  // }, [ownProduct]);

  
  return (
    <Box>
      <Typography variant="h4" fontWeight="600" mt="10px" textAlign="center">
        Wish List
      </Typography>
      <Box
        width="100%"
        mt="20px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        gap="10px">
        {ownProduct?.map((obj) => {
          return <Product obj={obj} key={obj?._id} />;
        })}
      </Box>
    </Box>
  );
}

export default Wishlist;