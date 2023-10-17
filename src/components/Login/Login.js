import React, { useState } from "react";
import "./Login.css";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button, Link, Typography } from "@mui/material";
import TopHeader from "../Header/TopHeader";
import MainHeader from "../Header/MainHeader";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useStateProvider } from "../../utils/StateProvider";

function Login() {
  const [, dispatch] = useStateProvider();
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    url: "https://academics.newtonschool.co/api/v1/user/login",
    method: "POST",
    headers: headersList,
  };

  const login = async () => {
    try {
      let response = await axios.request(reqOptions);
      console.log(response);
      if (response.status === 200) {
        console.log(response);
        alert("SuccessFully Logged In");
        setTimeout(() => {
          dispatch({
            type: "SET_NAME",
            payload: response?.data?.data?.name,
          });
          dispatch({ type: "SET_TOKEN", payload: response.data.token });
          dispatch({ type: "SET_NAME", payload: response.data.token });
          localStorage.setItem("jwtToken", response.data.token);
          localStorage.setItem("userName", response?.data?.data?.name);
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      const errMsg = error?.response?.data?.message;
      console.error(error, errMsg);
      if (errMsg === "Incorrect EmailId or Password") {
        alert("Incorrect EmailId or Password");
      } else if (errMsg === "please provide email and password") {
        alert("please provide email and password");
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
  const handleLogin = () => {
    const bodyContent = JSON.stringify({
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
    <>
      <TopHeader />
      <MainHeader />
      <div className="login-container">
        <div className="login-body">
          <form className="login-form">
            <h2 className="login-h2">Log into your account</h2>
            <TextField
              fullWidth
              className="login-email"
              sx={{ marginTop: "60px" }}
              label="Email"
              variant="standard"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormControl
              className="login-password"
              variant="standard"
              sx={{ marginTop: "60px" }}>
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
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
            <Link
              to="/forgot"
              sx={{
                marginTop: "80px",
                textDecoration: "none",
                fontFamily: "montserrat,sans-serif",
              }}>
              Forgot Password ?
            </Link>
            <Button
              onClick={handleLogin}
              variant="contained"
              className="login-button"
              sx={{
                marginTop: "40px",
                width: "100%",
                height: "50px",
                backgroundColor: "#989898",
                boxShadow: "none",
              }}>
              Login
            </Button>
            <Typography>Create new</Typography>
            <Link href="/signup">Signup</Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;