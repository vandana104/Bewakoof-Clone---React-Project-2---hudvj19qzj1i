import { Box, Button, Input, Link, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useStateProvider } from "../../utils/StateProvider";
import axios from "axios";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

function ProductDetail() {
  const [{ products, productId }] = useStateProvider();
  const [ownProduct, setOwnProduct] = useState(null);

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
        setOwnProduct(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Box display="flex" mt="10px" justifyContent="center">
        <Box display="flex" height="650px" width="510px">
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
                alt={`Image ${index + 1}`}
              />
            ))}
          </Box>
          <Box height="650px" width="450px" display="flex" alignItems="center">
            <img
              style={{
                height: "570px",
                width: "380px",
                objectFit: "cover",
              }}
              src={ownProduct?.displayImage}
            />
          </Box>
        </Box>

        <Box height="auto" mt="40px" lineHeight="70px">
          <Typography fontWeight="600">{ownProduct?.brand}</Typography>
          <Typography>{ownProduct?.price}</Typography>
          <Typography>inclusive of all taxes</Typography>
          <Button>{ownProduct?.subCategory}</Button>
          <Typography>
            TriBe members get an extra discount of ₹30 and FREE shipping.
          </Typography>
          <Link>Learn more</Link>
          <hr />
          <Box display="flex" justifyContent="space-between" mt="30px">
            <Typography>SELECT SIZE</Typography>
            <Typography color="blue">Size Guide</Typography>
          </Box>
          <Box display="flex"  gap="10px" margin="10px">
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
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              variant="outlined"
              sx={{ border: "0.5px solid lightgrey", color: "inherit" }}>
              <FavoriteBorderOutlinedIcon
                sx={{ pr: "7.5px", color: "lightgray" }}
              />
              WISHLIST
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
          <Box width="100%" display="flex" height="55px" alignItems="center" border="0.5px solid lightgrey" borderRadius="5px">
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
