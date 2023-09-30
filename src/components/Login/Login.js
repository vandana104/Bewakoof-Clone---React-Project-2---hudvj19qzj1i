import React from 'react'
import "./Login.css"
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, Link } from '@mui/material';

function Login() {
    const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    // add header
    <div className='login-container'>
      <div className='login-body'>
        <form className='login-form'>
          <h2 className='login-h2'>Log into your account</h2>
          {/* can't we apply classname for mui elememts */}
          <TextField  fullWidth className='login-email' sx={{marginTop:"60px"}} label="Email" variant="standard" />
            <FormControl className='login-password' variant="standard" sx={{marginTop:"60px"}}>
              <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
              {/* i need exact opposite of current visibility  , but it seems correct*/}
              <Input
                id="standard-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Link className='login-forgetPassword' sx={{marginTop:"80px", textDecoration:"none",fontFamily:"montserrat,sans-serif"}}>Forgot Password</Link>
            <Button variant="contained" className='login-button' 
              sx={{marginTop:"40px", width:"100%",height: "50px",
              backgroundColor: "#989898",
              boxShadow: "none",
          }}>Login</Button>
        </form>
      </div>
    </div>
  )
}

export default Login