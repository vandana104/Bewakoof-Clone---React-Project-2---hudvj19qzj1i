import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const projectId = "f104bi07c490";

  let headersList = {
    projectId: projectId,
    "Content-Type": "application/json",
  };

  let reqOptions = {
    url: "https://academics.newtonschool.co/api/v1/user/signup",
    method: "POST",
    headers: headersList,
  };

  const login = async () => {
    try {
      let response = await axios.request(reqOptions);
      console.log(response);
      if (response.status === 201) {
        console.log(response);
        alert("SuccessFully SignedUp");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      const errMsg = error?.response?.data?.message;
      console.error(error, errMsg);
      if (errMsg === "User already exists") {
        alert("User already exist");
        navigate("/login");
      } else if (errMsg === "Invalid input data. A user must have a name") {
        alert("Invalid input data. A user must have a name");
      } else if (
        errMsg === "Invalid input data. Please provide a valid email"
      ) {
        alert("Invalid input data. Please provide a valid email");
      } else if (errMsg === "Invalid input data. A user must have a name") {
        alert("Invalid input data. A user must have a name");
      } else {
        console.log("error");
      }
    }
  };
  const handleSignUp = () => {
    const bodyContent = JSON.stringify({
      name: username,
      email: email,
      password: password,
      appType: "ecommerce",
    });

    reqOptions.data = bodyContent;

    if (password.length < 8) {
      alert("Password should contain more than 8 characters.");
    } else {
      login();
    }
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{
        backgroundImage: "linear-gradient(0deg, #fff4c4, #fff)",
      }}>
      <Box
        display="flex"
        width="70%"
        fontFamily="montserrat, sans-serif"
        backgroundColor="white"
        height="100vh"
        justifyContent="center">
        <form style={{ width: "80%", marginTop: "80px" }}>
          <h2>Sign Up</h2>
          <h3 style={{ marginTop: "20px" }}>
            Hi new buddy, let's get you started <br />
            with the bewakoofi!
          </h3>
          <TextField
            required
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            sx={{ marginTop: "30px" }}
            label="Name"
            variant="standard"
          />
          <TextField
            required
            fullWidth
            sx={{ marginTop: "30px" }}
            label="Mobile"
            variant="standard"
          />
          <TextField
            required
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            sx={{ marginTop: "30px" }}
            label="Email Id"
            variant="standard"
          />
          <FormControl
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            sx={{ marginTop: "30px" }}
            variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              required
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
          <FormControlLabel
            sx={{ marginTop: "30px" }}
            control={<Checkbox defaultChecked />}
            label="I want to receive order updates on Whatsapp"
          />

          <Button
            onClick={handleSignUp}
            variant="contained"
            sx={{
              marginTop: "40px",
              width: "100%",
              height: "50px",
              backgroundColor: "#989898",
              boxShadow: "none",
            }}>
            PROCEED
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default SignUp;
