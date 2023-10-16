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
import React from "react";

function Cart() {
  return (
    <>
      <Box
        margin="auto"
        mt="30px"
        display="flex"
        width="80%"
        height="auto"
        justifyContent="space-between">
        <Box display="flex" flexDirection="column">
          <Typography>My Bag "count" item(s)</Typography>
          <Typography
            display="flex"
            alignItems="center"
            margin="7.5px"
            height="50px"
            width="100%"
            sx={{ backgroundColor: "#FCFFEE" }}>
            Yay! You get FREE delivery on this order
          </Typography>
          <Box
            width="600px"
            height="300px"
            display="flex"
            flexDirection="column"
            border="0.1px solid lightgrey"
            borderRadius="5px">
            <Box
              height="60px"
              mt="15px"
              mb="15px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              border="0px none"
              borderRadius="5px"
              pl="15px"
              pr="15px"
              sx={{ backgroundColor: "#EA80001A" }}>
              <Typography>
                Buy 3 For 1199 offer applicable
                <br />
                Add 2 more item to avail this offer
              </Typography>
              <Typography color="#EA8000">Add items</Typography>
            </Box>
            <Box display="flex" justifyContent="space-around">
              <Box width="350px" height="auto">
                <Typography sx={{ cursor: "pointer" }}>object name</Typography>
                <Typography>
                  <span
                    style={{ fontWeight: "500", color: "black !important" }}>
                    &#8377;Price
                  </span>{" "}
                  <span style={{ textDecoration: "line-through" }}>
                    &#8377;price
                  </span>
                </Typography>
                <Typography>Saved &#8377; random num in 100's!</Typography>
                <Typography>
                  Buy "COUNT" For "RUPEES" offer applicable
                </Typography>
                <Box display="flex" justifyContent="start">
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
                      {/* size of the item which we had selected */}
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
                      {/* size of the item which we had selected */}
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
              <Box width="100px" height="130px">
                <img
                  width="100px"
                  height="130px"
                  style={{
                    objectFit: "cover",
                    border: "1px solid transparent",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  src="https://picsum.photos/id/237/200/300"
                  alt="image"
                />
              </Box>
            </Box>
            <Box display="flex" mt="27px" borderTop="0.1px solid lightgrey">
              <Typography
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="40%"
                height="50px"
                borderRight="0.1px solid lightgrey"
                sx={{ cursor: "pointer" }}>
                Remove
              </Typography>
              <Typography
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="60%"
                height="50px"
                sx={{ cursor: "pointer" }}>
                Move to Wishlist
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          height="600px"
          width="550px"
          mt="90px"
          // border="0.1px solid lightgrey"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="inherit"
            height="60px"
            fontSize="13px"
            border="0.1px solid lightgrey"
            borderRadius="5px">
            Whistles! Get extra 15% cashback on prepaid orders above Rs.699.
            Coupon code - OOF15
            {/* <Typography> </Typography> */}
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="inherit"
            height="60px"
            fontSize="13px"
            border="0.1px solid lightgrey"
            borderRadius="5px">
            Get Rs.200 instant discount on your First Purchase above Rs.999.
            Coupon code -NEW200
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="530px"
            height="60px"
            fontSize="13px"
            border="0.1px solid lightgrey"
            borderRadius="5px"
            paddingLeft="10px"
            paddingRight="10px">
            {/* centering */}
            Whistles! Get extra 20% Cashback on prepaid orders above Rs.499.
            Coupon code - NEW20. Applicable for new customers only!
          </Box>
          <Box
            width="100%"
            height="auto"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            border="0.1px solid lightgrey">
            <Typography
              display="flex"
              alignItems="center"
              width="95%"
              height="40px"
              fontSize="12px"
              paddingLeft="10px"
              color="blue"
              borderRadius="5px"
              sx={{ background: "rgba(66,162,161,.1)" }}>
              Apply Coupon / Gift Card / Referral
            </Typography>
            {/* <Typography
              >
              PRICE SUMMARY
            </Typography> */}
            <Table>
              <TableHead sx={{width:"100%"}}>
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
              sx={{ backgroundColor: "lightgrey", cursor: "pointer" }}>PRICE SUMMARY</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow >
                  <TableCell>Total MRP (Incl. of taxes)</TableCell>
                  <TableCell>&#8377;Rupee</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Shipping Charges</TableCell>
                  <TableCell color="green">FREE</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Bag Discount</TableCell>
                  <TableCell>- &#8377;Rupee</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell fontWeight="600">Subtotal</TableCell>
                  <TableCell>&#8377;Rupee</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Box display="flex" justifyContent="space-between" alignItems="center"> 
              <Typography ml="20px"> Total &#8377;Rupees</Typography>
              <Button  sx={{width:"60%", backgroundColor:"rgb(66, 162, 162)"}} variant="contained">ADD ADDRESS</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Cart;
