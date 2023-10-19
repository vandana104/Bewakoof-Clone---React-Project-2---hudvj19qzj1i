import { Box, Button, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from "react-router-dom";

function UserAccount() {
  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "45px",
    width: "220px",
    // height: "120px",
    border: "0.5px solid lightgrey",
    borderRadius: "5px",
    cursor:"pointer"
  };

  const navigate = useNavigate();

  const handleProfile=()=>{
    navigate("/profile")
  }
  const headingStyle={ color:"gray",fontWeight:"600" , display:"flex"}
  const iconStyle = {color:"grey" , padding:"5px"}
  return (
    <Box width="100%" height="auto" display="flex" justifyContent="center">
      <Box width="75%" height="auto" display="flex" flexDirection="column" >
        <Box width="100%" height="100px" display="flex" alignItems="center">
          <Typography variant="h4" fontWeight="600" color="black" ml="2rem">
            My Account
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          width="inherit"
          height="inherit"
          gap="60px"
          mt="30px"
          // margin="auto"
          // justifyContent="center"
          alignSelf="center"
          // alignItems="center"
          // justifyContent="space-around"
          >
          <Box display="flex" justifyContent="center" width="100%" height="auto" gap="40px">
            <Box sx={boxStyle} > 
            
              <Typography  variant="h6" sx={headingStyle} >My Orders <KeyboardArrowRightIcon sx={iconStyle} /></Typography>
              <Typography>View, modify and track orders</Typography>
            </Box>
            <Box sx={boxStyle}>
              <Typography variant="h6" sx={headingStyle} >My Payments <KeyboardArrowRightIcon sx={iconStyle}/></Typography>
              <Typography>View, modify and payment methods</Typography>
            </Box>
            <Box sx={boxStyle}>
              <Typography variant="h6" sx={headingStyle} >My Wallet Rs.0 <KeyboardArrowRightIcon sx={iconStyle}/></Typography>
              <Typography>
                Bewakoof Wallet History and redeemed gift cards
              </Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center" width="100%" height="auto" gap="40px">
            <Box sx={boxStyle}>
              <Typography variant="h6" sx={headingStyle} >My Addresses <KeyboardArrowRightIcon sx={iconStyle}/></Typography>
              <Typography>Edit, add or remove addresses</Typography>
            </Box>
            <Box sx={boxStyle}>
              <Typography variant="h6" sx={headingStyle} onClick={handleProfile}>My Profile <KeyboardArrowRightIcon sx={iconStyle}/></Typography>
              <Typography>Edit personal info, change password</Typography>
            </Box>
            <Box sx={boxStyle}>
              <Typography variant="h6" sx={headingStyle} >Refer and Earn <KeyboardArrowRightIcon sx={iconStyle}/></Typography>
              <Typography>Invite your friends and earn rewards</Typography>
            </Box>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" gap="20px" mt="50px" mb="50px">
          <Typography variant="h5" fontWeight="600">
            Buy something to get <br/>personalised recomendations.
          </Typography>
          <Button onClick={()=>{
            navigate("/")
          }} variant="outlined"  sx={{width:"350px"}}>Continue Shopping</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default UserAccount;
