import "./EmptyCart.css"
import { Button, Link, Table, Typography } from '@mui/material'
import React from 'react'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function EmptyCart() {
    
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Men',<Link to="/topwear">Topwear</Link>,<Link to="/topwear">Bottomwear</Link>),
    createData( '', <Link to="/topwear">Footwear</Link>,<Link to="/topwear">Bestsellers</Link>,),
    createData('Women', <Link to="/topwear">Topwear</Link>, <Link to="/topwear">Bottomwear</Link>,),
    createData('', <Link to="/topwear">Bestsellers</Link>,),
    createData('Mobile Covers', <Link to="/topwear">All Mobile Covers</Link>,),
  ];
  
  return (
    <div className='emptyCart-container'>
        <div className="empty-cart">
            <img className='emptyCart-image' src='https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png' alt='image'/>
            <Typography >Nothing in the bag</Typography>
            <Button>Continue Shopping</Button>

            {/* <Typography>You could try one of these categories:</Typography> */}




         


    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow  >
          You could try one of these categories:
            {/* <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell> */}
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>



<div>
    <img src="https://images.bewakoof.com/web/secure-payments-image.png" alt="image"/>
</div>



        </div>
    </div>
  )
}

export default EmptyCart