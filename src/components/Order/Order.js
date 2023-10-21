import { Label } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import axios from "axios";
import React, { useState } from "react";
import { useStateProvider } from "../../utils/StateProvider";

function Order() {
  const [{ productId, totalPrice }, dispatch] = useStateProvider();
  const [address, setAddress] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [states, setStates] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOrder = (e) => {
    e.preventDefault();
    const Headers = {
      projectID: "f104bi07c490",
    };
    const Body = {
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
    };
    axios
      .post(
        "https://academics.newtonschool.co/api/v1/ecommerce/order",
        Headers,
        Body,
      )
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Box>
      <Typography
        textAlign="center"
        fontSize="26px"
        fontWeight="600"
        color="rgba(1,1,1,0.8)">
        Buy Now
      </Typography>
      <Typography color="lightgreen">Total Price : {totalPrice}</Typography>
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
        <label for="address">Enter Your Address</label>
        <TextField
          sx={{}}
          required
          id="address"
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Email"
        />
        <label for="street">Enter Your Street</label>
        <TextField
          sx={{}}
          required
          id="street"
          onChange={(e) => setStreet(e.target.value)}
          placeholder="Street"
        />
        <label for="city">Enter Your City</label>
        <TextField
          sx={{}}
          required
          id="city"
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
        />
        <label for="state">Enter Your State</label>
        <TextField
          sx={{}}
          required
          id="state"
          onChange={(e) => setStates(e.target.value)}
          placeholder="State"
        />
        <label for="country">Enter Your Country</label>
        <TextField
          sx={{}}
          required
          id="country"
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Country"
        />
        <label for="zip">Enter Your Zip code</label>
        <TextField
          sx={{}}
          required
          id="zip"
          onChange={(e) => setZip(e.target.value)}
          placeholder="zip"
        />
        <Button
          onClick={handleOpen}
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

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Total Price : {totalPrice}
          </Typography>
        </Box>
        <Button onClick={handleOrder}>Confirm Order</Button>
      </Modal>
    </Box>
  );
}

export default Order;