import { Box, Button, Input, Link, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useStateProvider } from "../../utils/StateProvider";
import axios from "axios";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useNavigate } from "react-router-dom";

function ProductDetail() {
  const [{ products, productId, token }, dispatch] = useStateProvider();
  const [ownProduct, setOwnProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://academics.newtonschool.co/api/v1/ecommerce/product/${productId}`,
        {
          headers: {
            projectId: "f104bi07c490",
          },
        },
      )
      .then((response) => {
        console.log(response.data.data);
        const productCard = JSON.parse(localStorage.getItem("products")) || [];
        // const changedVideo = productCard.find(
        const changedProduct = productCard.find(
          (obj) => obj._id === response.data.data._id,
        );
        if (changedProduct) {
          setOwnProduct(changedProduct);
        } else {
          setOwnProduct(response.data.data);
        }
      })
      //   if (changedVideo) {
      //     setOwnProduct(changedVideo);
      //   } else {
      //     setOwnProduct(response.data.data);
      //   }
      // })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleWishList = () => {
    if (token === null) {
      console.log(token);
      alert("Please LogIn");
    } else {
      if (ownProduct?.wishList) {
        ownProduct.wishList = false;
      } else {
        ownProduct.wishList = true;
      }
      setDispatch();
    }
  };

  const setDispatch = () => {
    const productcard = JSON.parse(localStorage.getItem("products")) || [];
    const index = productcard.findIndex((obj) => obj._id === ownProduct._id);
    productcard[index] = ownProduct;
    localStorage.setItem("products", JSON.stringify(productcard));
    setOwnProduct(ownProduct);
    navigate("/");
    navigate("/product");
    console.log("ownjfbksbf", ownProduct);
  };

  return (
    <>
      <Box
        display="flex"
        mt="10px"
        justifyContent="center"
        sx={{ "@media(max-width:645px)": { flexDirection: "column" } }}>
        <Box
          display="flex"
          height="650px"
          width="50%"
          sx={{ "@media(max-width:645px)": { width: "95%" } }}>
          <Box
            display="flex"
            flexDirection="column"
            padding="15px"
            margin="auto"
            gap="10px">
            {ownProduct?.images?.map((obj, index) => (
              <img
                key={index}
                style={{
                  width: "60px",
                  height: "80px",
                  objectFit: "cover",
                }}
                src={obj}
                alt={Image `${index + 1}`}
              />
            ))}
          </Box>
          <Box height="650px" width="450px" display="flex" alignItems="center">
            <img
              style={{
                height: "570px",
                width: "98%",
                objectFit: "cover",
              }}
              src={ownProduct?.displayImage}
            />
          </Box>
        </Box>

        <Box
          height="auto"
          mt="40px"
          ml="10px"
          lineHeight="70px"
          width="46%"
          sx={{ "@media(max-width:645px)": { width: "90%", ml: "30px" } }}>
          <Typography fontWeight="600">{ownProduct?.brand}</Typography>
          <Typography>&#8377;{ownProduct?.price}</Typography>
          <Typography>inclusive of all taxes</Typography>
          <Typography>{ownProduct?.subCategory}</Typography>
          <Typography>
            TriBe members get an extra discount of ₹30 and FREE shipping.
          </Typography>
          <Link>Learn more</Link>
          <hr />
          <Box display="flex" justifyContent="space-between" mt="30px">
            <Typography>SELECT SIZE</Typography>
            <Typography color="blue">Size Guide</Typography>
          </Box>
          <Box display="flex" gap="10px" margin="10px">
            <Typography
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="50px"
              width="50px"
              border="0.5px solid lightgrey"
              borderRadius="5px"
              sx={{ cursor: "pointer" }}>
              S
            </Typography>
            <Typography
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="50px"
              width="50px"
              border="0.5px solid lightgrey"
              borderRadius="5px"
              sx={{ cursor: "pointer" }}>
              M
            </Typography>
            <Typography
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="50px"
              width="50px"
              border="0.5px solid lightgrey"
              borderRadius="5px"
              sx={{ cursor: "pointer" }}>
              L
            </Typography>
            <Typography
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="50px"
              width="50px"
              border="0.5px solid lightgrey"
              borderRadius="5px"
              sx={{ cursor: "pointer" }}>
              XL
            </Typography>
            <Typography
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="50px"
              width="50px"
              border="0.5px solid lightgrey"
              borderRadius="5px"
              sx={{ cursor: "pointer" }}>
              2XL
            </Typography>
            <Typography
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="50px"
              width="50px"
              border="0.5px solid lightgrey"
              borderRadius="5px"
              sx={{ cursor: "pointer" }}>
              3XL
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            height="auto"
            mt="10px"
            mb="30px">
            <Button
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              variant="contained"
              sx={{ backgroundColor: "#ffd84d", color: "black" }}>
              <ShoppingBagOutlinedIcon sx={{ pr: "7.5px" }} /> ADD TO BAG
            </Button>
            <Button
              onClick={handleWishList}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              variant="outlined"
              sx={{
                border: "0.5px solid lightgrey",
                color: "inherit",
                background: ownProduct?.wishList ? "rgba(0,255,255)" : "white",
              }}>
              <FavoriteBorderOutlinedIcon
                sx={{ pr: "7.5px", color: "lightgray" }}
              />
              {ownProduct?.wishList ? "UNFAVOURITE" : "FAVOURITE"}
            </Button>
          </Box>
          <hr />
          <Typography mt="30px">
            <LocationOnOutlinedIcon sx={{ pr: "7.5px" }} /> CHECK FOR DELIVERY
            DETAILS
          </Typography>
          <Typography mt="10px">
            Delivery in <a>country</a>
          </Typography>

          {/* button inside textfield */}
          <Box
            width="100%"
            display="flex"
            height="55px"
            alignItems="center"
            border="0.5px solid lightgrey"
            borderRadius="5px">
            {/* <TextField
              label="Text Field"
              variant="outlined"
              sx={{ border: "none" }} 
            />{" "}
            <Typography>CHECK</Typography> */}
            {/* <Input label="Text Field" */}
            {/* // variant="standard" */}
            {/* sx={{ borderBottom: "none" }} />  */}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ProductDetail;