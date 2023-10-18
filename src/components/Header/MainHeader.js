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
  const [{ products, token }, dispatch] = useStateProvider();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
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

  const handleChangeKey = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);
    const updatedPost1 = products.filter((post) =>
      post.brand.toLowerCase().includes(searchValue),
    );
    const updatedPost2 = products.filter((post) => post.price === searchValue);
    const updatedPost3 = products.filter((post) =>
      post.subCategory.toLowerCase().includes(searchValue),
    );
    const updatedPost4 = products.filter((post) =>
      post.sellerTag.toLowerCase().includes(searchValue),
    );
    const updatedPost5 = products.filter((post) =>
      post.gender.toLowerCase().includes(searchValue),
    );
    const result = [
      ...updatedPost1,
      ...updatedPost2,
      ...updatedPost3,
      ...updatedPost4,
      ...updatedPost5,
    ];
    // Remove duplicate objects based on the _id property
    const uniqueResult = result.reduce((unique, item) => {
      if (!unique.some((uniqueItem) => uniqueItem._id === item._id)) {
        unique.push(item);
      }
      return unique;
    }, []);

    console.log(result);
    dispatch({ type: "SET_SEARCHRESULT", payload: result });
    navigate("/");
    navigate("/search");
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
          onChange={handleChangeKey}
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
          {token && (
            <>
              <FavoriteBorderIcon
                sx={{ cursor: "pointer" }}
                onClick={() => navigate("/wishlist")}
              />
              <ShoppingBagOutlinedIcon
                sx={{ cursor: "pointer" }}
                onClick={() => navigate("/cart")}
              />
            </>
          )}
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