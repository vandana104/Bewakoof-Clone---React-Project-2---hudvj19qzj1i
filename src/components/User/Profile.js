import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function Profile() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const linkStyle={textDecoration:"none"
    
  }
  const rightIconStyle = {color:"grey" , padding:"5px"}
  const fullWidthStyle = { width: "100%" }; 

  return (
    <Box width="100%">
      <Box
        width="50%"
        display="flex"
        flexDirection="column"
        padding="50px"
        ml="200px">
        
        <Box display="flex" ><Link sx={linkStyle}>
          {" "}
          <ChevronLeftIcon  sx={rightIconStyle}/>
          Back to My Account
        </Link></Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "50ch" },
          }}
          noValidate
          autoComplete="off">
          <Typography>My Profile</Typography>
          <Box display="flex" gap="40px">
            <TextField label="First Name" variant="standard" />
            <TextField label="Last Name" variant="standard" />
          </Box>
          <TextField width="fullwidth" label="Email Id" variant="standard" />
          <Box display="flex" flexDirection="column">
          <FormControl  variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Link sx={linkStyle}>Change Password</Link>
          </Box>
          <Box display="flex" flexDirection="column">
          <TextField
            width="fullwidth"
            label="Phone Number"
            variant="standard"
          />
          <Link sx={linkStyle}>Change Mobile Number</Link>
          </Box>
          <Box>
          <TextField sx={fullWidthStyle}  label="DD/MM/YYYY" variant="standard" />
          <Typography fontSize="11px" >
            Share your DOB to get special gifts on the 1st day of your birthday
            month
          </Typography>
          </Box>
          <Box display="flex" flexDirection="column">
          <Typography>Gender</Typography>
          <Box display="flex" gap="20px">
            <Button variant="outlined">Male</Button>
            <Button variant="outlined">Female</Button>
           
          </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;
