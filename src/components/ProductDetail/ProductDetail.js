import {
  Box,
  Button,
  Input,
  Link,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useStateProvider } from "../../utils/StateProvider";
import axios from "axios";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useNavigate } from "react-router-dom";

function ProductDetail() {
  const [{ products, productId, token, wishlistProducts }, dispatch] =
    useStateProvider();
  const [ownProduct, setOwnProduct] = useState(null);
  const [value, setValue] = useState(0);
  const [cart, setCart] = useState(null);

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
        const changedProduct = productCard.find(
          (obj) => obj._id === response.data.data._id,
        );
        const index = productCard.findIndex(
          (obj) => obj._id === response.data.data._id,
        );
        if (
          changedProduct?.wishList === true ||
          changedProduct?.wishList === false ||
          changedProduct?.cart === true ||
          changedProduct?.cart === false
        ) {
          console.log("yess");
          setOwnProduct(changedProduct);
        } else {
          console.log("first");
          productCard[index] = response.data.data;
          productCard[index].__v = value;
          localStorage.setItem("products", JSON.stringify(productCard));
          setOwnProduct(productCard[index]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleWishList = () => {
    if (token === null) {
      // console.log(token); just for error handling
      alert("Please LogIn");
    } else {
      if (ownProduct?.wishList) {
        ownProduct.wishList = false;
      } else {
        ownProduct.wishList = true;
      }
      handleStorage();
    }
  };
  const handleCart = () => {
    if (token === null) {
      alert("Login before you are adding item to cart!");
    } else {
      if (ownProduct?.cart) {
        ownProduct.cart = false;
      } else {
        ownProduct.cart = true;
      }
      handleStorage();
    }
  };

  const handleStorage = () => {
    const productcard = JSON.parse(localStorage.getItem("products")) || [];
    const index = productcard.findIndex((obj) => obj._id === ownProduct._id);
    productcard[index] = ownProduct;
    localStorage.setItem("products", JSON.stringify(productcard));
    setOwnProduct(ownProduct);
    navigate("/");
    navigate("/product");
    console.log("ownjfbksbf", ownProduct);
  };
  const handleRating = () => {
    if (token === null) {
      alert("Login before you are rating this product");
    } else {
      console.log(ownProduct.__v);
      if (!ownProduct.__v) {
        console.log(value);
        ownProduct.__v = value;
      }
      handleStorage();
    }
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
          width="35%"
          sx={{
            "@media(max-width:1000px)": { width: "45%" },
            "@media(max-width:645px)": { width: "95%" },
          }}>
          <Box
            display="flex"
            flexDirection="column"
            padding="15px"
            justifyContent="center"
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
                alt={`Image ${index + 1}`}
              />
            ))}
          </Box>
          <Box height="650px" width="100%" display="flex" alignItems="center">
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
          width="35%"
          sx={{
            "@media(max-width:645px)": {
              width: "90% !important",
              ml: "30px",
              mb: "30px",
            },
            "@media(max-width:1000px)": { width: "45%" },
          }}>
          <Typography fontWeight="600">{ownProduct?.brand}</Typography>
          <Box display="flex" gap="7px">
            <Typography color="black">&#8377;{ownProduct?.price}</Typography>
            <Typography fontSize="15px" sx={{ textDecoration: "line-through" }}>
              &#8377;{ownProduct?.price + 500}
            </Typography>
            <Typography fontSize="15px" color="lightgreen">
              50% off
            </Typography>
          </Box>
          <Typography>inclusive of all taxes</Typography>
          <Typography>{ownProduct?.name}</Typography>
          <Typography>{ownProduct?.subCategory}</Typography>
          <div
            dangerouslySetInnerHTML={{ __html: ownProduct?.description }}
            style={{ fontWeight: "600" }}
          />
          <Link style={{ cursor: "pointer" }}>Learn more</Link>
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
            width="100%"
            height="auto"
            mt="10px"
            mb="30px"
            gap="5px">
            <Button
              sx={{ backgroundColor: "#ffd84d", color: "black", width: "50%" }}
              onClick={handleCart}>
              <ShoppingBagOutlinedIcon sx={{ pr: "7.5px" }} />{" "}
              {ownProduct?.cart ? "ADDED" : "ADD TO CART"}
            </Button>
            <Button
              onClick={handleWishList}
              sx={{
                border: "0.5px solid lightgrey",
                width: "50%",
                color: "inherit",
                background: ownProduct?.wishList ? "#beadff" : "white",
              }}>
              <FavoriteBorderOutlinedIcon
                sx={{ pr: "7.5px", color: "lightgray" }}
              />
              {ownProduct?.wishList ? "UNFAVOURITE" : "FAVOURITE"}
            </Button>
          </Box>
          <hr />
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mb="15px">
            <Typography fontSize="21px" alignSelf="baseline">
              Ratings
            </Typography>
            <Rating
              onClick={handleRating}
              sx={{ width: "50%", alignSelf: "center", fontSize: "30px" }}
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
          <Typography mt="30px" display="flex" mb="30px">
            <LocationOnOutlinedIcon sx={{ pr: "7.5px" }} /> CHECK FOR DELIVERY
            DETAILS
          </Typography>
          <TextField sx={{ height: "40px", ml: "10px", width: "100%" }} />
        </Box>
      </Box>
    </>
  );
}

export default ProductDetail;