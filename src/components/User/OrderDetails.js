import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useStateProvider } from "../../utils/StateProvider";
import { useNavigate } from "react-router-dom";

function OrderDetails() {
  const [, dispatch] = useStateProvider();
  const [bought, setBought] = useState([]);
  useEffect(() => {
    const boughts = JSON.parse(localStorage.getItem("bought"));
    setBought(boughts);
  }, []);
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt="30px"
      mb="20px"
      gap="10px">
      <Typography textAlign="center" fontSize="23px">
        My Orders
      </Typography>
      {bought?.map((obj) => (
        <Box
          key={obj._id}
          width="75%"
          height="auto"
          display="flex"
          flexDirection="column"
          border="0.1px solid lightgrey"
          borderRadius="5px">
          <Box
            display="flex"
            justifyContent="space-around"
            sx={{
              "@media (max-width: 670px)": {
                flexDirection: "column-reverse",
                justifyContent: "center",
                alignItems: "center",
              },
            }}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              width="45%"
              height="auto"
              gap="5px"
              color="rgba(1,1,1,0.7)"
              alignSelf="center"
              sx={{
                "@media (max-width: 670px)": {
                  width: "85%",
                },
              }}>
              <Typography
                width="100%"
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
                sx={{ cursor: "pointer" }}>
                {obj.name}
              </Typography>
            </Box>
            <Box
              width="100px"
              height="130px"
              sx={{
                "@media (max-width: 670px)": {
                  width: "60%",
                },
              }}>
              <img
                onClick={() => {
                  dispatch({
                    type: "SET_PRODUCTID",
                    payload: obj._id,
                  });
                  navigate("/product");
                }}
                width="100%"
                height="130px"
                style={{
                  objectFit: "contain",
                  border: "1px solid transparent",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                src={obj.displayImage}
                alt="image"
              />
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default OrderDetails;
