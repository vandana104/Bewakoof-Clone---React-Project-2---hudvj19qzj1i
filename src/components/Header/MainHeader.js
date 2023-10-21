import React, { useEffect, useState } from "react";
import "./MainHeader.css";
import SearchIcon from "@mui/icons-material/Search";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useNavigate } from "react-router-dom";
import { useStateProvider } from "../../utils/StateProvider";
import FavoriteIcon from "@mui/icons-material/Favorite";

function MainHeader() {
  const [{ products, token, wishlistProducts }, dispatch] = useStateProvider();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [avatarMenuAnchorEl, setAvatarMenuAnchorEl] = useState(null);
  const userName = localStorage.getItem("userName") || "";
  const [cartCount, setCartCount] = useState(0);
  const [wish, setWishlist] = useState([]);
  const [logout, setLogout] = useState(false);

  const handleAvatarClick = (event) => {
    setAvatarMenuAnchorEl(event.currentTarget);
  };
  useEffect(() => {
    var productCart = JSON.parse(localStorage.getItem("products")) || [];
    var filteredItem = productCart.filter((obj) => obj.cart === true);
    setCartCount(filteredItem?.length);
  }, [JSON.parse(localStorage.getItem("products"))]);

  const handleAvatarClose = () => {
    setAvatarMenuAnchorEl(null);
  };

  const handleLogOut = () => {
    localStorage.clear();
    setAvatarMenuAnchorEl(null);
    alert("SuccessFully Logged out");
    setLogout(true);
    navigate("/");
  };

  useEffect(() => {
    let wished = JSON.parse(localStorage.getItem("products"))?.filter(
      (obj) => obj.wishList === true,
    );
    console.log(wished);
    if (wished !== undefined) {
      setWishlist(wished);
    }
  }, []);

  useEffect(() => {
    console.log("wish", wish);
  }, [wish]);

  useEffect(() => {
    const updatedWishlist = JSON.parse(
      localStorage.getItem("products"),
    )?.filter((obj) => obj.wishList === true);
    if (updatedWishlist) {
      setWishlist(updatedWishlist);
    }
  }, [localStorage.getItem("products")]);

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
      height="70px"
      width="100%">
      <Box>
        <img
          onClick={() => navigate("/")}
          src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
          alt="Bewkoof"
          style={{ width: "80%", cursor: "pointer" }}
        />
      </Box>
      <Box display="flex">
        <TextField
          sx={{
            height: "56px",
            paddingLeft: "0px !important",
            marginRight: "10px",
            background: "#eaeaea",
          }}
          onChange={handleChangeKey}
          placeholder="Search..."
          variant="outlined"
          InputProps={{
            startAdornment: (
              <IconButton sx={{ color: "#555" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        <Divider orientation="vertical" className="vertical-divider" />
        <Box display="flex" alignItems="center" gap="12px">
          {token ? (
            <>
              {wish?.length === 0 ? (
                <FavoriteBorderIcon
                  sx={{ cursor: "pointer" }}
                  onClick={() => navigate("/wishlist")}
                />
              ) : (
                <FavoriteIcon
                  sx={{
                    cursor: "pointer",
                    color: "red",
                    ":hover": { transform: "scale(1.6)" },
                    transition: "transform 0.5s",
                  }}
                  onClick={() => navigate("/wishlist")}
                />
              )}
              {cartCount !== 0 ? (
                <Badge badgeContent={cartCount} color="primary">
                  <ShoppingBagOutlinedIcon
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate("/cart")}
                  />
                </Badge>
              ) : (
                <ShoppingBagOutlinedIcon
                  sx={{ cursor: "pointer" }}
                  onClick={() => navigate("/cart")}
                />
              )}
            </>
          ) : null}
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
                  <MenuItem
                    onClick={() => {
                      handleAvatarClose();
                      navigate("/");
                    }}>
                    Hello.. {userName}
                  </MenuItem>
                  <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleAvatarClose();
                      navigate("/account");
                    }}>
                    My Account
                  </MenuItem>
                </div>
              ) : (
                <div>
                  <MenuItem
                    onClick={() => {
                      handleAvatarClose();
                      navigate("/login");
                    }}>
                    Login
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleAvatarClose();
                      navigate("/signup");
                    }}>
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
