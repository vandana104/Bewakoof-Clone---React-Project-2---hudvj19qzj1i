import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useStateProvider } from "../../utils/StateProvider";
import axios from "axios";

function ProductDetail() {
  const [{ products,productId }] = useStateProvider();
  const [ownProduct,setOwnProduct] = useState(null)
  
  useEffect(()=>{
    axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/product/${productId}`, {
      headers : {
        projectId : "f104bi07c490"
      }
    } ).then((response)=>{
      console.log(response.data.data);
      setOwnProduct(response.data.data)
    }).catch((err)=>{
      console.log(err);
    })
  },[])

  return (
    <>
      <Box display="flex" mt="10px" justifyContent="center">
        <Box display="flex" height="650px" width="510px">
          <Box display="flex" flexDirection="column">
            {ownProduct?.images?.map((obj, index) => (
              <img
                key={index}
                style={{
                  width: "60px",
                  height: "80px",
                  objectFit: "cover",
                }}
                src={obj}
                alt={`Image ${index + 1}`}
              />
            ))}
          </Box>
          <Box height="650px" width="450px">
            <img
              style={{
                height: "inherit",
                width: "inherit",
                objectFit: "cover",
              }}
              src={ownProduct?.displayImage}
            />
          </Box>
        </Box>

        <Box>
         
         <Typography>{ownProduct.brand}</Typography>


        </Box>
      </Box>
    </>
  );
}

export default ProductDetail;
