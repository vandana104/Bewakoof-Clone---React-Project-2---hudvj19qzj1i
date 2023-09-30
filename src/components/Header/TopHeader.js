import React from 'react'
import { Typography } from '@mui/material'
import "./TopHeader.css"

function TopHeader() {
  return (
    <div className='top-header'>
        <div className='th-left'>
            <Typography fontSize="11px" fontFamily="montserrat-bold,sans-serif">Offers</Typography>
            <Typography fontSize="11px" fontFamily="montserrat-bold,sans-serif">Fanbook</Typography>
            <Typography fontSize="11px" fontFamily="montserrat-bold,sans-serif">Download App</Typography>
            <Typography fontSize="11px" fontFamily="montserrat-bold,sans-serif">TriBe Membership</Typography>
        </div>
        <div className='th-right'>
            <Typography fontSize="11px" fontFamily="montserrat-bold,sans-serif">Contact Us </Typography>
            <Typography fontSize="11px" fontFamily="montserrat-bold,sans-serif">Track Order</Typography>
        </div>
    </div>
  )
}

export default TopHeader