// import { Box, Button, Typography } from '@mui/material'
// import React, { useEffect } from 'react'
// import { useStateProvider } from '../../utils/StateProvider';

// function Wishlist(obj) {

//     const [{ wishlistProducts}, dispatch] = useStateProvider();

//     useEffect(() => {
//       console.log(wishlistProducts);
//     }, []);
//   return (
//     <Box display="flex" flexDirection="column" margin="auto">
//         <Button sx={{width:"200px"}} >All</Button>
// {/* <Box>
//     <Box>

//     </Box><img style={{width:"300px", height:"300px", gap:"10px"}}  src={obj.displayImage}/>
//     <Typography>{obj.brand}</Typography>
//     <Typography>{obj.brand}</Typography>
//     <Typography>{obj.brand}</Typography>
// </Box>  */}

// <Box
//       display="flex"
//       flexDirection="column"
//       border="1px solid rgba(1,1,1,0.3)"
//       width="300px"
//       height="406px"
//       onClick={() => {
//         console.log(obj._id);
//         dispatch({ type: "SET_WISHLISTPRODUCTS", payload: obj._id });
//         setTimeout(() => {
//           navigate("/product");
//         }, 1000);
//       }}
//       sx={{ cursor: "pointer" }}>
//       <img
//         src={obj.displayImage}
//         style={{ width: "100%", height: "75%", objectFit: "cover"  }}
//         alt='Wishlist Image'
//       />
//     <Typography>{obj.brand}</Typography>
//     <Typography>{obj.brand}</Typography>
//     <Typography>{obj.brand}</Typography>
// </Box>
//     </Box>
//     )
// }

// export default Wishlist

import { ShoppingBagOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

function Wishlist() {
  return (
    <Box>
      <Button>All</Button>
      <Box width="70%" margin="auto" display="flex"  alignItems="center" flexWrap="wrap" gap="10px" >
        <Box
          margin="auto"
          width="240px"
          height="400px"
          justifyContent="center"
          border="0.5px solid lightgrey">
          <img
            src="https://picsum.photos/id/237/200/300"
            alt="wishlist Image"
            style={{ width: "100%", height: "290px", objectFit: "cover" }}
          />
          <Box marginLeft="7.5px">
            <Typography>brandName</Typography>
            <Typography
              noWrap
              variant="body1"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}>
              Item name{" "}
            </Typography>
            <Typography>price</Typography>
          </Box>
          <Typography
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="14px"
            borderTop="1px solid grey "
            sx={{ cursor: "pointer", color: "#207bb4" }}>
            <ShoppingBagOutlined fontSize="12px" sx={{ padding: "7.5px" }} />
            ADD TO BAG
          </Typography>
        </Box>
        <Box
          margin="auto"
          width="240px"
          height="400px"
          justifyContent="center"
          border="0.5px solid lightgrey">
          <img
            src="https://picsum.photos/id/237/200/300"
            alt="wishlist Image"
            style={{ width: "100%", height: "290px", objectFit: "cover" }}
          />
          <Box marginLeft="7.5px">
            <Typography>brandName</Typography>
            <Typography
              noWrap
              variant="body1"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}>
              Item name{" "}
            </Typography>
            <Typography>price</Typography>
          </Box>
          <Typography
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="14px"
            borderTop="1px solid grey "
            sx={{ cursor: "pointer", color: "#207bb4" }}>
            <ShoppingBagOutlined fontSize="12px" sx={{ padding: "7.5px" }} />
            ADD TO BAG
          </Typography>
        </Box>
        <Box
          margin="auto"
          width="240px"
          height="400px"
          justifyContent="center"
          border="0.5px solid lightgrey">
          <img
            src="https://picsum.photos/id/237/200/300"
            alt="wishlist Image"
            style={{ width: "100%", height: "290px", objectFit: "cover" }}
          />
          <Box marginLeft="7.5px">
            <Typography>brandName</Typography>
            <Typography
              noWrap
              variant="body1"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}>
              Item name{" "}
            </Typography>
            <Typography>price</Typography>
          </Box>
          <Typography
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="14px"
            borderTop="1px solid grey "
            sx={{ cursor: "pointer", color: "#207bb4" }}>
            <ShoppingBagOutlined fontSize="12px" sx={{ padding: "7.5px" }} />
            ADD TO BAG
          </Typography>
        </Box>
        <Box
          margin="auto"
          width="240px"
          height="400px"
          justifyContent="center"
          border="0.5px solid lightgrey">
          <img
            src="https://picsum.photos/id/237/200/300"
            alt="wishlist Image"
            style={{ width: "100%", height: "290px", objectFit: "cover" }}
          />
          <Box marginLeft="7.5px">
            <Typography>brandName</Typography>
            <Typography
              noWrap
              variant="body1"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}>
              Item name{" "}
            </Typography>
            <Typography>price</Typography>
          </Box>
          <Typography
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="14px"
            borderTop="1px solid grey "
            sx={{ cursor: "pointer", color: "#207bb4" }}>
            <ShoppingBagOutlined fontSize="12px" sx={{ padding: "7.5px" }} />
            ADD TO BAG
          </Typography>
        </Box>
        <Box
          margin="auto"
          width="240px"
          height="400px"
          justifyContent="center"
          border="0.5px solid lightgrey">
          <img
            src="https://picsum.photos/id/237/200/300"
            alt="wishlist Image"
            style={{ width: "100%", height: "290px", objectFit: "cover" }}
          />
          <Box marginLeft="7.5px">
            <Typography>brandName</Typography>
            <Typography
              noWrap
              variant="body1"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}>
              Item name{" "}
            </Typography>
            <Typography>price</Typography>
          </Box>
          <Typography
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="14px"
            borderTop="1px solid grey "
            sx={{ cursor: "pointer", color: "#207bb4" }}>
            <ShoppingBagOutlined fontSize="12px" sx={{ padding: "7.5px" }} />
            ADD TO BAG
          </Typography>
        </Box>
        <Box
          margin="auto"
          width="240px"
          height="400px"
          justifyContent="center"
          border="0.5px solid lightgrey">
          <img
            src="https://picsum.photos/id/237/200/300"
            alt="wishlist Image"
            style={{ width: "100%", height: "290px", objectFit: "cover" }}
          />
          <Box marginLeft="7.5px">
            <Typography>brandName</Typography>
            <Typography
              noWrap
              variant="body1"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}>
              Item name{" "}
            </Typography>
            <Typography>price</Typography>
          </Box>
          <Typography
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="14px"
            borderTop="1px solid grey "
            sx={{ cursor: "pointer", color: "#207bb4" }}>
            <ShoppingBagOutlined fontSize="12px" sx={{ padding: "7.5px" }} />
            ADD TO BAG
          </Typography>
        </Box>
        <Box
          margin="auto"
          width="240px"
          height="400px"
          justifyContent="center"
          border="0.5px solid lightgrey">
          <img
            src="https://picsum.photos/id/237/200/300"
            alt="wishlist Image"
            style={{ width: "100%", height: "290px", objectFit: "cover" }}
          />
          <Box marginLeft="7.5px">
            <Typography>brandName</Typography>
            <Typography
              noWrap
              variant="body1"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}>
              Item name{" "}
            </Typography>
            <Typography>price</Typography>
          </Box>
          <Typography
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="14px"
            borderTop="1px solid grey "
            sx={{ cursor: "pointer", color: "#207bb4" }}>
            <ShoppingBagOutlined fontSize="12px" sx={{ padding: "7.5px" }} />
            ADD TO BAG
          </Typography>
        </Box>
        <Box
          margin="auto"
          width="240px"
          height="400px"
          justifyContent="center"
          border="0.5px solid lightgrey">
          <img
            src="https://picsum.photos/id/237/200/300"
            alt="wishlist Image"
            style={{ width: "100%", height: "290px", objectFit: "cover" }}
          />
          <Box marginLeft="7.5px">
            <Typography>brandName</Typography>
            <Typography
              noWrap
              variant="body1"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}>
              Item name{" "}
            </Typography>
            <Typography>price</Typography>
          </Box>
          <Typography
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="14px"
            borderTop="1px solid grey "
            sx={{ cursor: "pointer", color: "#207bb4" }}>
            <ShoppingBagOutlined fontSize="12px" sx={{ padding: "7.5px" }} />
            ADD TO BAG
          </Typography>
        </Box>
        <Box
          margin="auto"
          width="240px"
          height="400px"
          justifyContent="center"
          border="0.5px solid lightgrey">
          <img
            src="https://picsum.photos/id/237/200/300"
            alt="wishlist Image"
            style={{ width: "100%", height: "290px", objectFit: "cover" }}
          />
          <Box marginLeft="7.5px">
            <Typography>brandName</Typography>
            <Typography
              noWrap
              variant="body1"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}>
              Item name{" "}
            </Typography>
            <Typography>price</Typography>
          </Box>
          <Typography
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="14px"
            borderTop="1px solid grey "
            sx={{ cursor: "pointer", color: "#207bb4" }}>
            <ShoppingBagOutlined fontSize="12px" sx={{ padding: "7.5px" }} />
            ADD TO BAG
          </Typography>
        </Box>
        <Box
          margin="auto"
          width="240px"
          height="400px"
          justifyContent="center"
          border="0.5px solid lightgrey">
          <img
            src="https://picsum.photos/id/237/200/300"
            alt="wishlist Image"
            style={{ width: "100%", height: "290px", objectFit: "cover" }}
          />
          <Box marginLeft="7.5px">
            <Typography>brandName</Typography>
            <Typography
              noWrap
              variant="body1"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}>
              Item name{" "}
            </Typography>
            <Typography>price</Typography>
          </Box>
          <Typography
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="14px"
            borderTop="1px solid grey "
            sx={{ cursor: "pointer", color: "#207bb4" }}>
            <ShoppingBagOutlined fontSize="12px" sx={{ padding: "7.5px" }} />
            ADD TO BAG
          </Typography>
        </Box>
        <Box
          margin="auto"
          width="240px"
          height="400px"
          justifyContent="center"
          border="0.5px solid lightgrey">
          <img
            src="https://picsum.photos/id/237/200/300"
            alt="wishlist Image"
            style={{ width: "100%", height: "290px", objectFit: "cover" }}
          />
          <Box marginLeft="7.5px">
            <Typography>brandName</Typography>
            <Typography
              noWrap
              variant="body1"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}>
              Item name{" "}
            </Typography>
            <Typography>price</Typography>
          </Box>
          <Typography
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="14px"
            borderTop="1px solid grey "
            sx={{ cursor: "pointer", color: "#207bb4" }}>
            <ShoppingBagOutlined fontSize="12px" sx={{ padding: "7.5px" }} />
            ADD TO BAG
          </Typography>
        </Box>
        <Box
          margin="auto"
          width="240px"
          height="400px"
          justifyContent="center"
          border="0.5px solid lightgrey">
          <img
            src="https://picsum.photos/id/237/200/300"
            alt="wishlist Image"
            style={{ width: "100%", height: "290px", objectFit: "cover" }}
          />
          <Box marginLeft="7.5px">
            <Typography>brandName</Typography>
            <Typography
              noWrap
              variant="body1"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}>
              Item name{" "}
            </Typography>
            <Typography>price</Typography>
          </Box>
          <Typography
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="14px"
            borderTop="1px solid grey "
            sx={{ cursor: "pointer", color: "#207bb4" }}>
            <ShoppingBagOutlined fontSize="12px" sx={{ padding: "7.5px" }} />
            ADD TO BAG
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Wishlist;
