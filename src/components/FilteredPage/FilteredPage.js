import React, { useEffect, useState } from "react";
import { useStateProvider } from "../../utils/StateProvider";
import { Box, Typography } from "@mui/material";
import Product from "../Product";

function FilteredPage() {
    const [{filteredProducts,products}] = useStateProvider();
    const [filteredProduct,setFilteredProduct] = useState(null);
    useEffect(()=>{
       const filtered = products?.filter((obj)=>obj.sellerTag.charAt(0).toUpperCase() + obj.sellerTag.slice(1) === filteredProducts)
       setFilteredProduct(filtered)
    },[])
    useEffect(()=>{
        console.log(filteredProduct);
    },[filteredProduct])
  return (
    <div>
      <Typography>{filteredProducts}</Typography>
      <Typography>{`( ${filteredProduct?.length} )`}</Typography>

      <Box display="flex" flexWrap="wrap">
      {
        filteredProduct?.map((obj)=>{
            return(
                <Product obj={obj}/>
            )
        })
      }
      </Box>
    </div>
  );
}

export default FilteredPage;
