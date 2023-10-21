import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useStateProvider } from "../../utils/StateProvider";
import { useNavigate } from "react-router-dom";
import Product from "../Product";
import dummy from "../images/dummy.webp";
import dummy2 from "../images/dummy2.jpg";

function HomePage() {
  const projectId = "f104bi07c490";
  const [{ products }, dispatch] = useStateProvider();
  const [slideImage, setSlideImage] = useState([]);
  const [flag, setFlag] = useState();
  const [tag, setTag] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=100",
        {
          headers: {
            projectId: projectId,
          },
        },
      )
      .then((response) => {
        dispatch({ type: "SET_PRODUCTS", payload: response.data.data });
        // const filter = response.data.data.filter((obj)=> obj.sellerTag != null )
        // console.log(filter);
        const map = response.data.data.map((obj) => obj.subCategory);
        console.log(map);

        const uniqueSellerTags = {};
        const filteredArray = [];

        for (const obj of response.data.data) {
          if (!uniqueSellerTags.hasOwnProperty(obj.sellerTag)) {
            uniqueSellerTags[obj.sellerTag] = true;
            filteredArray.push(obj);
          }
        }
        setTag(filteredArray);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    console.log(products);
    if (products) {
      setSlideImage(products.slice(20, 25));
    }
  }, [products]);

  useEffect(() => {
    if (flag) {
      dispatch({
        type: "SET_FILTEREDPRODUCTS",
        payload: flag.charAt(0).toUpperCase() + flag.slice(1),
      });
    }
  }, [flag]);

  return (
    <div>
      <Box
        display="flex"
        sx={{
          width: "100%",
          mt: "15px",
          height: "auto",
          overflowX: "auto",
          whiteSpace: "nowrap",
          WebkitFlexWrap: "none",
          "&::-webkit-scrollbar": {
            width: "0.5rem", // Adjust the width of the scrollbar if needed
          },
          "&::-webkit-scrollbar-thumb": {
            background: "transparent", // Hide scrollbar thumb
          },
        }}>
        {slideImage?.map((obj, index) => (
          <img
            key={index}
            src={obj.displayImage}
            alt={`image ${index + 1}`}
            style={{ cursor: "pointer" }}
            className="first-section-image"
          />
        ))}
      </Box>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "23px",
          fontWeight: 600,
          my: "20px",
        }}>
        TRENDING CATEGORIES
      </Typography>
      <Box
        display="flex"
        height="250px"
        margin="auto"
        gap="7.5px"
        sx={{
          maxWidth: "680px", // Set a max-width to prevent infinite expansion
          "& .fit-content-width": {
            width: "fit-content",
          },
          overflowX: "scroll",
          overflowY: "hidden",
          "&::-webkit-scrollbar": {
            width: "0.5rem",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "transparent",
          },
        }}>
        {tag?.map((obj, index) => (
          <Box
            onClick={() => {
              console.log("clickedddd");
              setFlag(obj.sellerTag);
              setTimeout(() => {
                navigate("/filter");
              }, 1000);
            }}
            display="flex"
            flexDirection="column"
            width="150px"
            height="240px"
            sx={{
              cursor: "pointer",
              "&:hover": { background: "rgba(1,1,1,0.1)" },
              padding: "10px",
            }}>
            <img src={obj.displayImage} />
            <Typography alignSelf="center" color="rgba(1,1,1,0.7)">
              {obj.sellerTag}
            </Typography>
          </Box>
        ))}
      </Box>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "23px",
          fontWeight: 600,
          my: "20px",
        }}>
        Hot Deals
      </Typography>
      <Box
        display="flex"
        gap="8px"
        mx="10px"
        height="396px"
        pt="22px"
        sx={{
          "& .fit-content-width": {
            width: "fit-content",
          },
          overflowX: "scroll",
          overflowY: "hidden",
          "&::-webkit-scrollbar": {
            width: "0.5rem",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "transparent",
          },
        }}>
        {products?.slice(10, 30).map((obj) => (
          <Product
            key={obj._id}
            obj={obj}
            size={{ width: "200px", height: "350px" }}
          />
        ))}
      </Box>
      <img src={dummy} style={{ width: "100%", objectFit: "contain" }} />
      <img src={dummy2} style={{ width: "100%", objectFit: "contain" }} />
    </div>
  );
}

export default HomePage;