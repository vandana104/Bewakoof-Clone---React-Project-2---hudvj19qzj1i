import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useStateProvider } from "../../utils/StateProvider";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();
  const [{ products, productId, token }, dispatch] = useStateProvider();
  useEffect(() => {
    var productCart = JSON.parse(localStorage.getItem("products")) || [];
    var filteredItem = productCart.filter((obj) => obj.cart === true);
    let localPrice = 0;
    filteredItem.forEach((obj) => {
      localPrice += obj.price;
    });
    setPrice(localPrice);
    setCart(filteredItem);
    dispatch({ type: "SET_PRICE", payload: localPrice });
  }, []);

  useEffect(() => {
    console.log(cart);
  }, []);

  const textStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    fontSize: "13px",
    border: "0.1px solid lightgrey",
    borderRadius: "5px",
    padding: "10px",
  };

  const handleRemoveCart = (obj) => {
    console.log(obj);
    var productCart = JSON.parse(localStorage.getItem("products")) || [];
    const index = productCart.findIndex((item) => item._id === obj._id);
    productCart[index].cart = false;
    localStorage.setItem("products", JSON.stringify(productCart));

    var filteredItem = productCart.filter((obj) => obj.cart === true);
    let localPrice = 0;
    filteredItem.forEach((obj) => {
      localPrice += obj.price;
    });
    setPrice(localPrice);
    setCart(filteredItem);
  };

  return (
    <Box width="100%">
      {cart.length === 0 ? (
        <Box
          height="100vh"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center">
          <Typography fontSize="22px">No Items in cart</Typography>
          <Link
            to="/"
            fontSize="18px"
            textDecoration="none"
            style={{
              cursor: "pointer",
            }}>
            Back to Shop?
          </Link>
        </Box>
      ) : (
        <Box
          margin="auto"
          mt="30px"
          display="flex"
          flexDirection="row"
          width="80%"
          height="auto"
          justifyContent="space-between"
          sx={{
            "@media (max-width: 670px)": {
              flexDirection: "column",
            },
          }}>
          <Box display="flex" flexDirection="column" width="100%">
            <Typography fontWeight="600">
              My Bag {cart?.length} item(s)
            </Typography>
            <Typography
              display="flex"
              alignItems="center"
              margin=" 7.5px 7.5px 7.5px 0px"
              pl="15px"
              height="50px"
              width="87%"
              sx={{ backgroundColor: "#FCFFEE" }}>
              Yay! You get FREE delivery on this order
            </Typography>
            <Box display="flex" flexDirection="column" gap="10px">
              {cart?.map((obj) => {
                return (
                  <Box
                    key={obj._id}
                    width="90%"
                    height="auto"
                    display="flex"
                    flexDirection="column"
                    border="0.1px solid lightgrey"
                    borderRadius="5px">
                    <Box
                      display="flex"
                      justifyContent="space-around"
                      mt="15px"
                      sx={{
                        "@media (max-width: 670px)": {
                          flexDirection: "column-reverse",
                          justifyContent: "center",
                          alignItems: "center",
                        },
                      }}>
                      <Box
                        width="45%"
                        height="auto"
                        gap="5px"
                        color="rgba(1,1,1,0.7)"
                        mt="8px"
                        sx={{
                          "@media (max-width: 670px)": {
                            width: "85%",
                          },
                        }}>
                        <Typography
                          whiteSpace="nowrap"
                          overflow="hidden"
                          textOverflow="ellipsis"
                          sx={{ cursor: "pointer" }}>
                          {obj.name}
                        </Typography>
                        <Typography>
                          <span
                            style={{
                              fontWeight: "500",
                              color: "black !important",
                            }}>
                            &#8377;{obj.price}
                          </span>{" "}
                          <span style={{ textDecoration: "line-through" }}>
                            &#8377;{obj.price + 500}
                          </span>
                        </Typography>
                        <Typography>Yay you saved &#8377;500</Typography>
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          gap="3px"
                          width="80%">
                          <Typography
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            width="85px"
                            height="40px"
                            border="0.1px solid lightgrey"
                            borderRadius="5px"
                            sx={{ cursor: "pointer" }}>
                            Size:
                            <select style={{ border: "none" }}>
                              <option>S</option>
                              <option>M</option>
                              <option>L</option>
                              <option>XL</option>
                              <option>2XL</option>
                              <option>3XL</option>
                            </select>
                          </Typography>
                          <Typography
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            width="85px"
                            height="40px"
                            border="0.1px solid lightgrey"
                            borderRadius="5px"
                            sx={{ cursor: "pointer" }}>
                            Qty:
                            <select style={{ border: "none" }}>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                            </select>
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        width="100px"
                        height="130px"
                        sx={{
                          "@media (max-width: 670px)": {
                            width: "60%",
                          },
                        }}>
                        <img
                          onClick={() => {
                            dispatch({
                              type: "SET_PRODUCTID",
                              payload: obj._id,
                            });
                            navigate("/product");
                          }}
                          width="100%"
                          height="130px"
                          style={{
                            objectFit: "contain",
                            border: "1px solid transparent",
                            borderRadius: "5px",
                            cursor: "pointer",
                          }}
                          src={obj.displayImage}
                          alt="image"
                        />
                      </Box>
                    </Box>
                    <Box
                      onClick={() => handleRemoveCart(obj)}
                      display="flex"
                      mt="27px"
                      borderTop="0.1px solid lightgrey">
                      <Typography
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        width="100%"
                        height="50px"
                        sx={{
                          cursor: "pointer",
                          "&:hover": { background: "lightgray" },
                        }}>
                        Remove
                      </Typography>
                      {/* <Typography
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        width="60%"
                        height="50px"
                        sx={{ cursor: "pointer" }}>
                        Move to Wishlist
                      </Typography> */}
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box
            height="600px"
            width="100%"
            // width="550px"
            mt="32px"
            // border="0.1px solid lightgrey"
          >
            <Box marginBottom="10px" sx={textStyle}>
              Whistles! Get extra 15% cashback on prepaid orders above Rs.699.
              Coupon code - OOF15
            </Box>
            <Box marginBottom="10px" sx={textStyle}>
              Get Rs.200 instant discount on your First Purchase above Rs.999.
              Coupon code -NEW200
            </Box>
            <Box marginBottom="10px" sx={textStyle}>
              Whistles! Get extra 20% Cashback on prepaid orders above Rs.499.
              Coupon code - NEW20.
            </Box>
            <Box
              width="100%"
              height="auto"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              border="0.1px solid lightgrey">
              <Box sx={{ background: "rgba(66,162,161,.1)", pl: "15px" }}>
                <Typography
                  display="flex"
                  alignItems="center"
                  width="100%"
                  height="40px"
                  fontSize="12px"
                  color="blue">
                  Apply Coupon / Gift Card / Referral
                </Typography>
              </Box>
              <Table>
                <TableHead sx={{ width: "100%" }}>
                  <TableRow>
                    <TableCell
                      //  display="flex"
                      width="100%"
                      // height="50px"
                      // alignItems="center"
                      // paddingLeft="20px"
                      // mt="15px"
                      color="black"
                      colSpan={2}
                      sx={{ backgroundColor: "lightgrey", cursor: "pointer" }}>
                      PRICE SUMMARY
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Total MRP (Incl. of taxes)</TableCell>
                    <TableCell>&#8377;{price + cart?.length * 500}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Shipping Charges</TableCell>
                    <TableCell color="green">FREE</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Bag Discount</TableCell>
                    <TableCell>- &#8377;{cart?.length * 500}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell fontWeight="600">Subtotal</TableCell>
                    <TableCell>&#8377;{price}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center">
                <Typography ml="20px"> Total &#8377;{price}</Typography>
                <Button
                  onClick={() => navigate("/buy")}
                  sx={{ width: "60%", backgroundColor: "rgb(66, 162, 162)" }}
                  variant="contained">
                  Buy Now
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Cart;