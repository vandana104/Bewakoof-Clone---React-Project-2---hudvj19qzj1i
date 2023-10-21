import { Label } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import axios from "axios";
import React, { useState } from "react";
import { useStateProvider } from "../../utils/StateProvider";
import { useNavigate } from "react-router-dom";

function Order() {
  const [{ productId, totalPrice, token, buyProducts }, dispatch] =
    useStateProvider();
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [states, setStates] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");

  const handleOrder = (e) => {
    e.preventDefault();

    const body = JSON.stringify({
      productId: productId,
      quantity: 2,
      addressType: "HOME",
      address: {
        street: street,
        city: city,
        state: states,
        country: country,
        zipCode: zip,
      },
    });
    axios
      .get(
        "https://academics.newtonschool.co/api/v1/ecommerce/order",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            projectId: "f104bi07c490",
          },
        },
        body,
      )
      .then((response) => console.log(response))
      .catch((err) => {
        console.log(err);
        if (err.message === "Network Error") {
          alert("Please check your connection");
        }
      });
    const bought = JSON.parse(localStorage.getItem("bought")) || [];
    const filteredItem = [...bought, ...buyProducts];
    localStorage.setItem("bought", JSON.stringify(filteredItem));
    alert(
      `This is you total amount ${totalPrice} Cash on delivery is only available`,
    );
    navigate("/orders");
  };

  return (
    <>
      <Box>
        <Typography
          textAlign="center"
          fontSize="26px"
          fontWeight="600"
          color="rgba(1,1,1,0.8)">
          Buy Now
        </Typography>
        <marquee direction="right" scrollamount="10" style={{ margin: "10px" }}>
          <Typography color="lightgreen">Total Price : {totalPrice}</Typography>
        </marquee>
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            margin: "auto",
            marginBottom: "40px",
            gap: "10px",
          }}>
          <label>Enter Your Address</label>
          <TextField
            sx={{}}
            required
            id="address"
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Email"
          />
          <label>Enter Your Street</label>
          <TextField
            sx={{}}
            required
            id="street"
            onChange={(e) => setStreet(e.target.value)}
            placeholder="Street"
          />
          <label>Enter Your City</label>
          <TextField
            sx={{}}
            required
            id="city"
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
          />
          <label>Enter Your State</label>
          <TextField
            sx={{}}
            required
            id="state"
            onChange={(e) => setStates(e.target.value)}
            placeholder="State"
          />
          <label>Enter Your Country</label>
          <TextField
            sx={{}}
            required
            id="country"
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Country"
          />
          <label>Enter Your Zip code</label>
          <TextField
            sx={{}}
            required
            id="zip"
            onChange={(e) => setZip(e.target.value)}
            placeholder="zip"
          />
          <Button
            onClick={handleOrder}
            variant="contained"
            type="submit"
            sx={{
              mt: "10px",
              width: "70%",
              alignSelf: "center",
              padding: "10px",
            }}>
            Buy Now
          </Button>
        </form>
      </Box>
    </>
  );
}

export default Order;
