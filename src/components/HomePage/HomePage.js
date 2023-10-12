import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useStateProvider } from "../../utils/StateProvider";
import { useNavigate } from "react-router-dom";

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
        // // console.log(filter);
        const map = response.data.data.map((obj)=> obj.sellerTag  )
        console.log(map);

        const uniqueSellerTags = {};
        const filteredArray = [];
      
        for (const obj of response.data.data) {
          if (!uniqueSellerTags.hasOwnProperty(obj.sellerTag)) {
            uniqueSellerTags[obj.sellerTag] = true;
            filteredArray.push(obj);
          }
        }
        setTag(filteredArray)
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    console.log(products);
    if (products) {
      setSlideImage(products.slice(2, 7));
    }
  }, [products]);

  useEffect(()=>{
    if(flag){

      dispatch({type:"SET_FILTEREDPRODUCTS",payload:flag.charAt(0).toUpperCase() + flag.slice(1)})
    }
  },[flag])

  return (
    <div>
      <Box
        display="flex"
        sx={{
          width: "100%",

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
      <Box
        display="flex"
        width="80%"
        height="250px"
        margin="auto"
        gap="7.5px"
        sx={{
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
              setTimeout(()=>{
                navigate("/filter");
              },1000)
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
            <Typography
              alignSelf="center"
              color="rgba(1,1,1,0.7)"
             >
              {obj.sellerTag}
            </Typography>
          </Box>
        ))}
      </Box>
    </div>
  );
}

export default HomePage;
