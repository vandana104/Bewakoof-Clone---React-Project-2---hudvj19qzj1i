import React, { useEffect, useState } from "react";
import { useStateProvider } from "../../utils/StateProvider";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import Product from "../Product";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FilteredPage() {
  const [{ filteredProducts, products }] = useStateProvider();
  const [filteredProduct, setFilteredProduct] = useState(null);

  useEffect(() => {
    const filtered = products?.filter(
      (obj) =>
        obj.sellerTag.charAt(0).toUpperCase() + obj.sellerTag.slice(1) ===
        filteredProducts,
    );
    setFilteredProduct(filtered);
  }, []);

  useEffect(() => {
    console.log(filteredProduct);
  }, [filteredProduct]);

  const listItemStyle = {
    listStyleType: "none",
    color: "rgba(1,1,1,0.5)",
    
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%">
      <Box
        display="flex"
        marginX="100px"
        padding="15px"
        // alignItems="center"
      >
        <Typography variant="h4" fontWeight="500" color="black">
          {filteredProducts}
        </Typography>
        <Typography variant="h4" marginLeft="15px">
          {`(${filteredProduct?.length})`}
        </Typography>
      </Box>
      <Box
        display="flex"
        // marginX="auto"
        // padding="30px"
        justifyContent="center">
        <Box width="600px">
          {/* its wrking but not visible on the screen  */}
          <Typography padding="20px">Filters</Typography>

          <Accordion
            sx={{
              width: "300px", 
              background: "white",
              borderStyle: "none",
              cursor:"pointer"
              
            }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              // id="panel1a-header"
              sx={{
                color: "black"
              }}>
              Gender
            </AccordionSummary>
            <AccordionDetails
              sx={{
                width: "100%", 
                color: "black"
              }}>
              <ul style={listItemStyle}>
                <li>Women</li>
                <li>Unisex</li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              width: "300px", 
              background: "white",
              borderStyle: "none",
              cursor:"pointer"
            }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              // id="panel1a-header"
              sx={{
                color: "black"
              }}>
              Sizes
            </AccordionSummary>
            <AccordionDetails
              sx={{
                width: "100%", 
                color: "black"
              }}>
              <ul style={listItemStyle}>
                <li>XS</li>
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>2XL</li>
                <li>3XL</li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              width: "300px", 
              background: "white",
              borderStyle: "none",
              cursor:"pointer"
            }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              // id="panel1a-header"
              sx={{
                color: "black"
              }}>
              Brand
            </AccordionSummary>
            <AccordionDetails
              sx={{
                width: "100%", 
                color: "black"
              }}>
              <ul style={listItemStyle}>
                <li>Bewakoof</li>
                <li>Dillinger</li>
                <li>Olavi</li>
                <li>Botnia</li>
                <li>Difference Of Opinion</li>
                <li>Teeshut</li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              width: "300px", 
              background: "white",
              borderStyle: "none",
              cursor:"pointer"
            }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              // id="panel1a-header"
              sx={{
                color: "black"
              }}>
              Color
            </AccordionSummary>
            <AccordionDetails
              sx={{
                width: "100%", 
                color: "black"
              }}>
              <ul style={listItemStyle}>
                <li>Black</li>
                <li>White</li>
                <li>Purple</li>
                <li>Blue</li>
                <li>Green</li>
                <li>Red</li>
                <li>Pink</li>
                <li>Brown</li>
                <li>Yellow</li>
                <li>Orange</li>
                <li>Grey</li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              width: "300px", 
              background: "white",
              borderStyle: "none",
              cursor:"pointer"
            }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              // id="panel1a-header"
              sx={{
                color: "black"
              }}>
              Design
            </AccordionSummary>
            <AccordionDetails
              sx={{
                width: "100%", 
                color: "black"
              }}>
              <ul style={listItemStyle}>
                <li>Graphic Print</li>
                <li>Typography</li>
                <li>Solid</li>
                <li>Aop</li>
                <li>Tie & Dye</li>
                <li>Striped</li>
                <li>Color Block</li>
                <li>Printed</li>
                <li>Floral Print</li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              width: "300px", 
              background: "white",
              borderStyle: "none",
              cursor:"pointer"
            }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              // id="panel1a-header"
              sx={{
                color: "black"
              }}>
              Sleeve
            </AccordionSummary>
            <AccordionDetails
              sx={{
                width: "100%", 
                color: "black"
              }}>
              <ul style={listItemStyle}>
                <li>Half Sleeve</li>
                <li>Full Sleeve</li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              width: "300px", 
              background: "white",
              borderStyle: "none",
              cursor:"pointer"
            }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              // id="panel1a-header"
              sx={{
                color: "black"
              }}>
              Neck
            </AccordionSummary>
            <AccordionDetails
              sx={{
                width: "100%", 
                color: "black"
              }}>
              <ul style={listItemStyle}>
                <li>Round Neck</li>
                <li>Polo</li>
                <li>V-Neck</li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              width: "300px", 
              background: "white",
              borderStyle: "none",
              cursor:"pointer"
            }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              // id="panel1a-header"
              sx={{
                color: "black"
              }}>
              Type
            </AccordionSummary>
            <AccordionDetails
              sx={{
                width: "100%", 
                color: "black"
              }}>
              <ul style={listItemStyle}>
                <li>T-Shirt</li>
                <li>Polo</li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              width: "300px", 
              background: "white",
              borderStyle: "none",
              cursor:"pointer"
            }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              // id="panel1a-header"
              sx={{
                color: "black"
              }}>
              Ratings
            </AccordionSummary>
            <AccordionDetails
              sx={{
                width: "100%", 
                color: "black"
              }}>
              <ul style={listItemStyle}>
                <li>4.5 and above</li>
                <li>4 and above</li>
                <li>3.5 and above</li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              width: "300px", 
              background: "white",
              borderStyle: "none",
              cursor:"pointer"
            }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              // id="panel1a-header"
              sx={{
                color: "black"
              }}>
              Offers
            </AccordionSummary>
            <AccordionDetails
              sx={{
                width: "100%", 
                color: "black"
              }}>
              <ui>
                <li>Buy 3 for 119</li>
              </ui>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              width: "300px", 
              background: "white",
              borderStyle: "none",
              cursor:"pointer"
            }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              // id="panel1a-header"
              sx={{
                color: "black"
              }}>
              Discount
            </AccordionSummary>
            <AccordionDetails
              sx={{
                width: "100%", 
                color: "black"
              }}>
              <ul style={listItemStyle}>
                <li>10% Or More</li>
                <li>20% Or More</li>
                <li>30% Or More</li>
                <li>40% Or More</li>
                <li>50% Or More</li>
                <li>60% Or More</li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              width: "300px", 
              background: "white",
              borderStyle: "none",
              cursor:"pointer"
            }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              // id="panel1a-header"
              sx={{
                color: "black"
              }}>
              Sort By
            </AccordionSummary>
            <AccordionDetails
              sx={{
                width: "100%", 
                color: "black"
              }}>
              <ul style={listItemStyle}>
                <li>Popular</li>
                <li>New</li>
                <li>Price:High to Low</li>
                <li>Price:Low to High</li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box display="flex" alignItems="center" flexWrap="wrap" gap="10px">
          {filteredProduct?.map((obj) => {
            return <Product obj={obj} />;
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default FilteredPage;
