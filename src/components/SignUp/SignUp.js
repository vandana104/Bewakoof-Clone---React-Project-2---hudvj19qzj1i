import React from 'react'
import "./SignUp.css"
import { Button, Checkbox, FormControl, FormControlLabel, IconButton, Input, InputAdornment, InputLabel, Link, TextField, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function SignUp() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  return (
    <div className='signUp-container'>
        <div className='left-signUpSection'>

        </div>
        <div className='right-signUpSection'>
          <form className='signUp-form'>
            <h2 className='signUp-h2'>Sign Up</h2>
            <h3 className='signUp-h3'>Hi new buddy, let's get you started <br/>with the bewakoofi!</h3>
            {/* can't we apply classname for mui elememts */}
            <TextField fullWidth className='signUp-name' sx={{marginTop:"30px"}} label="Name" variant="standard" />
            <TextField fullWidth className='signUp-phone' sx={{marginTop:"30px"}} label="Mobile" variant="standard" />
            <TextField fullWidth className='signUp-email' sx={{marginTop:"30px"}} label="Email Id" variant="standard" />
            <FormControl sx={{marginTop:"30px"}} className='signUp-password' variant="standard" >
              <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
              {/* i need exact opposite of current visibility  , but it seems correct*/}
              <Input
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
              <FormControlLabel sx={{marginTop:"30px"}} control={<Checkbox defaultChecked />} label="I want to receive order updates on Whatsapp" />
              
              <Button variant="contained" className='signUp-button' 
                sx={{marginTop:"40px", width:"100%",height: "50px",
                backgroundColor: "#989898",
                boxShadow: "none",
            }}>PROCEED</Button>
          </form>
      </div>


    </div>
  )
}

export default SignUp