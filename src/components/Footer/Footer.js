import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import AppleIcon from "@mui/icons-material/Apple";

function Footer() {
  const typoStyle = {
    pb: "15px",
    fontSize: "14px",
    color: "rgb(255, 255, 95)",
    fontFamily: "sans-serif",
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{ backgroundColor: "black" }}>
      <Box
        width="80%"
        height="auto"
        display="flex"
        flexDirection="column"
        padding="40px"
        sx={{ color: "white" }}>
        <Box>
          <Typography
            variant="h5"
            fontWeight="600"
            fontFamily="sans-serif"
            color="rgb(255, 255, 95)">
            Bewakoof
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" pt="30px" pb="30px">
          <Box display="flex" width="50%" justifyContent="space-around">
            <Box>
              <Typography sx={typoStyle}>CUSTOMER SERVICE</Typography>
              <ul style={{ listStyle: "none" }}>
                <li>Contact Us</li>
                <li>Track Order</li>
                <li>Return Order</li>
                <li>Cancel Order</li>
              </ul>
            </Box>
            <Box>
              <Typography sx={typoStyle}>COMPANY</Typography>
              <ul style={{ listStyle: "none" }}>
                <li>About Us</li>
                <li>We're Hiring</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Blog</li>
              </ul>
            </Box>
          </Box>
          <Box display="flex" width="50%" justifyContent="space-around">
            <Box>
              <Typography sx={typoStyle}>CONNECT WITH US</Typography>
              <Typography>
                <FacebookIcon />
                4.7M People Like this
              </Typography>
              <Typography>
                <InstagramIcon />
                1M Followers
              </Typography>
              <Box display="flex">
                <Typography>
                  <TwitterIcon />
                </Typography>
                <Typography>
                  <PinterestIcon />
                </Typography>
                <Typography>
                  <AppleIcon />
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography sx={typoStyle}>KEEP UP TO DATE</Typography>

              <TextField
                placeholder="Enter Email Id"
                variant="standard"
                color="warning"
                focused
                sx={{
                  "& .MuiInputBase-input, & .MuiInputBase-input::placeholder": {
                    color: "rgb(255, 255, 95)",
                    fontSize: "12px",
                    height: "27px",
                    borderBottom: "2px solid rgb(255, 255, 95)", // Change the border color
                  },
                  width: "50%",
                }}
              />
              <Box >
                {" "}
                <Typography
                  height="40px"
                  width="200px"
                  display="inline"
                  color="black"
                  sx={{ backgroundColor: "rgb(255, 255, 80)" }}>
                  SUBSCRIBE
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
}

export default Footer;
