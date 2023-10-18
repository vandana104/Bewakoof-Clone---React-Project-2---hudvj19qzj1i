import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useStateProvider } from "../utils/StateProvider";
import Product from "./Product";

function SearchResults() {
  const [{ searchProducts, products }] = useStateProvider();
  const [filteredProduct, setFilteredProduct] = useState(null);
  const [duplicateFilter, setduplicateFilter] = useState(null);

  useEffect(() => {
    console.log("sdfs", searchProducts);
    setFilteredProduct(searchProducts);
    setduplicateFilter(searchProducts);
  }, [searchProducts]);

  useEffect(() => {
    console.log(filteredProduct);
  }, [filteredProduct]);

  const handleFilter = (value, key) => {
    if (key === "gender") {
      const newFiltered = duplicateFilter.filter((obj) => obj.gender === value);
      console.log(newFiltered);
      setFilteredProduct(newFiltered);
    } else if (key === "price") {
      const newFiltered = duplicateFilter.filter((obj) => obj.price <= value);
      console.log(newFiltered);
      setFilteredProduct(newFiltered);
    } else {
      const newFiltered = duplicateFilter.filter((obj) => obj.color === value);
      console.log(newFiltered);
      setFilteredProduct(newFiltered);
    }
  };

  const listItemStyle = {
    listStyleType: "none",
    color: "rgba(1,1,1,0.5)",
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      width="100%">
      <Box display="flex" padding="15px" marginLeft="20px">
        <Typography variant="h5" fontWeight="600" color="black">
          Search results
        </Typography>
        <Typography variant="h5" marginLeft="15px">
          {`(${filteredProduct?.length})`}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Box
          width="28%"
          sx={{ "@media(max-width:500px)": { display: "none" } }}>
          {/* its wrking but not visible on the screen  */}
          <Typography padding="20px">Filters</Typography>

          <Accordion
            sx={{
              width: "100%",
              background: "white",
              borderStyle: "none",
              cursor: "pointer",
            }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              // id="panel1a-header"
              sx={{
                color: "black",
              }}>
              Gender
            </AccordionSummary>
            <AccordionDetails
              sx={{
                width: "100%",
                color: "black",
              }}>
              <ul style={listItemStyle}>
                <li value="men" onClick={() => handleFilter("Men", "gender")}>
                  Men
                </li>
                <li
                  value="women"
                  onClick={() => handleFilter("Women", "gender")}>
                  Women
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              width: "100%",
              background: "white",
              borderStyle: "none",
              cursor: "pointer",
            }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              // id="panel1a-header"
              sx={{
                color: "black",
              }}>
              price
            </AccordionSummary>
            <AccordionDetails
              sx={{
                width: "100%",
                color: "black",
              }}>
              <ul style={listItemStyle}>
                <li onClick={() => handleFilter("100", "price")}>Below 100</li>
                <li onClick={() => handleFilter("500", "price")}>Below 500</li>
                <li onClick={() => handleFilter("700", "price")}>Below 750</li>
                <li onClick={() => handleFilter("1000", "price")}>
                  Below 1000
                </li>
                <li onClick={() => handleFilter("1500", "price")}>
                  Below 1500
                </li>
                <li onClick={() => handleFilter("2000", "price")}>
                  Below 2000
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              width: "100%",
              background: "white",
              borderStyle: "none",
              cursor: "pointer",
            }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              // id="panel1a-header"
              sx={{
                color: "black",
              }}>
              Color
            </AccordionSummary>
            <AccordionDetails
              sx={{
                width: "100%",
                color: "black",
              }}>
              <ul style={listItemStyle}>
                <li onClick={() => handleFilter("BLACK", "color")}>Black</li>
                <li onClick={() => handleFilter("WHITE", "color")}>White</li>
                <li onClick={() => handleFilter("BROWN", "color")}>Brown</li>
                <li onClick={() => handleFilter("BLUE", "color")}>Blue</li>
                <li onClick={() => handleFilter("GREEN", "color")}>Green</li>
                <li onClick={() => handleFilter("RED", "color")}>Red</li>
                <li onClick={() => handleFilter("PINK", "color")}>Pink</li>
                <li onClick={() => handleFilter("LAVENDER", "color")}>
                  Lavender
                </li>
                <li onClick={() => handleFilter("YELLOW", "color")}>Yellow</li>
                <li onClick={() => handleFilter("GREY", "color")}>Grey</li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              width: "100%",
              background: "white",
              borderStyle: "none",
              cursor: "pointer",
            }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              // id="panel1a-header"
              sx={{
                color: "black",
              }}>
              Brand
            </AccordionSummary>
            <AccordionDetails
              sx={{
                width: "100%",
                color: "black",
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
              width: "100%",
              background: "white",
              borderStyle: "none",
              cursor: "pointer",
            }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              // id="panel1a-header"
              sx={{
                color: "black",
              }}>
              Design
            </AccordionSummary>
            <AccordionDetails
              sx={{
                width: "100%",
                color: "black",
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
              width: "100%",
              background: "white",
              borderStyle: "none",
              cursor: "pointer",
            }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              // id="panel1a-header"
              sx={{
                color: "black",
              }}>
              Sleeve
            </AccordionSummary>
            <AccordionDetails
              sx={{
                width: "100%",
                color: "black",
              }}>
              <ul style={listItemStyle}>
                <li>Half Sleeve</li>
                <li>Full Sleeve</li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              width: "100%",
              background: "white",
              borderStyle: "none",
              cursor: "pointer",
            }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              // id="panel1a-header"
              sx={{
                color: "black",
              }}>
              Offers
            </AccordionSummary>
            <AccordionDetails
              sx={{
                width: "100%",
                color: "black",
              }}>
              <ui>
                <li>Buy 3 for 119</li>
              </ui>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              width: "100%",
              background: "white",
              borderStyle: "none",
              cursor: "pointer",
            }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              // id="panel1a-header"
              sx={{
                color: "black",
              }}>
              Discount
            </AccordionSummary>
            <AccordionDetails
              sx={{
                width: "100%",
                color: "black",
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
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          flexWrap="wrap"
          gap="40px"
          width="68%">
          {filteredProduct?.length === 0 ? (
            <Typography alignSelf="baseline">
              Please Choose Another Category
            </Typography>
          ) : (
            filteredProduct?.map((obj, index) => (
              <Product key={index} obj={obj} size={{width:"200px", height:"350px"}} />
            ))
          )}
        </Box>
      </Box>
    </Box>
    // <></>
  );
}

export default SearchResults;