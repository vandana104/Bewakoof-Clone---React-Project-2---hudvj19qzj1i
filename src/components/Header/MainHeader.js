import React from 'react'
import "./MainHeader.css"
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Divider, IconButton, TextField } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

function MainHeader() {
  return (
    <div className='mainHeader' 
    // style={{background:"grey",height:"50px",width:"100%"}}
    >
      <div className='mh-left'>
        <img src='https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg'
              alt='Bewkoof'
              className='bewkoof-img'
         />
      </div>
      <div className='mh-right'>
        <div className='mh-searchBar'>
     
        <TextField
        className="search-input"
        placeholder="Search..."
        variant="outlined"
        InputProps={{
          endAdornment: (
            <IconButton className="search-button" type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
        </div>
        <Divider orientation="vertical" className="vertical-divider" />
        <div className='mh-icons'>
          <PersonIcon/>
          <FavoriteBorderIcon/>
          <ShoppingBagOutlinedIcon/> 
          <Avatar alt="User Avatar"
              sx={{
                width: 30,
                height: 30,
                cursor: "pointer",
              }}/>
        </div>
      </div>
    </div>
  )
}

export default MainHeader