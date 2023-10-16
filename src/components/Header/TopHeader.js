import React from "react";
import { Box, Typography } from "@mui/material";

function TopHeader() {
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      height="25px"
      width="100%"
      sx={{
        backgroundColor: "rgb(227, 219, 219)",
      }}>
      <Box display="flex" alignItems="center" gap="13px">
        <Typography
          fontSize="11px"
          fontFamily="montserrat-bold,sans-serif"
          sx={{ cursor: "pointer" }}>
          Offers
        </Typography>
        <Typography
          fontSize="11px"
          fontFamily="montserrat-bold,sans-serif"
          sx={{ cursor: "pointer" }}>
          Fanbook
        </Typography>
        <Typography
          fontSize="11px"
          fontFamily="montserrat-bold,sans-serif"
          sx={{ cursor: "pointer" }}>
          Download App
        </Typography>
        <Typography
          fontSize="11px"
          fontFamily="montserrat-bold,sans-serif"
          sx={{ cursor: "pointer" }}>
          TriBe Membership
        </Typography>
      </Box>
      <Box
        display="flex"
        /* width= 50% */
        alignItems="center"
        gap="13px">
        <Typography
          fontSize="11px"
          fontFamily="montserrat-bold,sans-serif"
          sx={{ cursor: "pointer" }}>
          Contact Us{" "}
        </Typography>
        <Typography
          fontSize="11px"
          fontFamily="montserrat-bold,sans-serif"
          sx={{ cursor: "pointer" }}>
          Track Order
        </Typography>
      </Box>
    </Box>
  );
}

export default TopHeader;
