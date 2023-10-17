import React, { useState } from "react";
import "./MainHeader.css";
import SearchIcon from "@mui/icons-material/Search";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useNavigate } from "react-router-dom";
import { useStateProvider } from "../../utils/StateProvider";

function MainHeader() {
  const [, dispatch] = useStateProvider();
  const navigate = useNavigate();
  const [avatarMenuAnchorEl, setAvatarMenuAnchorEl] = useState(null);
  const userName = localStorage.getItem("userName") || "";

  const handleAvatarClick = (event) => {
    setAvatarMenuAnchorEl(event.currentTarget);
  };

  const handleAvatarClose = () => {
    setAvatarMenuAnchorEl(null);
  };

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      borderBottom="1px solid grey"
      height="50px"
      width="100%">
      <Box>
        <img
          onClick={() => navigate("/")}
          src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
          alt="Bewkoof"
          style={{ width: "70%", cursor: "pointer" }}
        />
      </Box>
      <Box display="flex">
        <TextField
          placeholder="Search..."
          variant="outlined"
          InputProps={{
            startAdornment: (
              <IconButton
                sx={{ color: "#555" }}
                type="submit"
                aria-label="search">
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        <Divider orientation="vertical" className="vertical-divider" />
        <Box display="flex" alignItems="center" gap="12px">
          <PersonIcon sx={{ cursor: "pointer" }} />
          <FavoriteBorderIcon
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/wishlist")}
          />
          <ShoppingBagOutlinedIcon sx={{ cursor: "pointer" }} />
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Avatar
              alt="User Avatar"
              sx={{
                width: 30,
                height: 30,
                cursor: "pointer",
              }}
              onClick={handleAvatarClick}
            />
            <Menu
              anchorEl={avatarMenuAnchorEl}
              open={Boolean(avatarMenuAnchorEl)}
              onClose={handleAvatarClose}>
              {userName ? (
                <div>
                  <MenuItem onClick={() => navigate("/")}>
                    Hello.. {userName}
                  </MenuItem>
                  <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                </div>
              ) : (
                <div>
                  <MenuItem onClick={() => navigate("/login")}>Login</MenuItem>
                  <MenuItem onClick={() => navigate("/signup")}>
                    Signup
                  </MenuItem>
                </div>
              )}
            </Menu>
          </div>
        </Box>
      </Box>
    </Box>
  );
}

export default MainHeader;