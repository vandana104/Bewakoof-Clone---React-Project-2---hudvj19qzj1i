import React from "react";
import "./MainHeader.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Box, Divider, IconButton, TextField } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useNavigate } from "react-router-dom";

function MainHeader() {
  const navigate = useNavigate();
  return (
    <div className="mainHeader">
      <Box>
        <img
          onClick={() => navigate("/")}
          src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
          alt="Bewkoof"
          style={{ width: "70%", cursor: "pointer" }}
        />
      </Box>
      <div className="mh-right">
        <TextField
          placeholder="Search..."
          variant="outlined"
          InputProps={{
            startAdornment: (
              <IconButton
                className="search-button"
                type="submit"
                aria-label="search">
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        <Divider orientation="vertical" className="vertical-divider" />
        <Box display="flex" alignItems="center" gap="12px">
          <PersonIcon />
          <FavoriteBorderIcon />
          <ShoppingBagOutlinedIcon />
          <Avatar
            alt="User Avatar"
            sx={{
              width: 30,
              height: 30,
              cursor: "pointer",
            }}
          />
        </Box>
      </div>
    </div>
  );
}

export default MainHeader;
