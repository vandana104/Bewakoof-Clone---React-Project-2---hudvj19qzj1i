import React from "react";
import "./BottomHeader.css";
import { Typography } from "@mui/material";

function BottomHeader() {
  return (
    <div className="bottom-headerMain">
      <div className="bottom-header">
        <Typography fontSize="14px">LIVE NOW</Typography>
        <Typography fontSize="14px">MEN</Typography>
        <Typography fontSize="14px">WOMEN</Typography>
        <Typography fontSize="14px">ACCESSORIES</Typography>
        <Typography fontSize="14px">BWKF X MINIONS</Typography>
        <Typography fontSize="14px">BEWAKOOF AIR</Typography>
        <Typography fontSize="14px">OFFICIAL MERCH</Typography>
        <Typography fontSize="14px">PLUS SIZE</Typography>
      </div>
    </div>
  );
}

export default BottomHeader;