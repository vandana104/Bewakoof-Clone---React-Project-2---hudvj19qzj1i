import './HomePage.css';
import React, { useState, useEffect } from 'react';

import { Grid, Link, Paper, Typography } from '@mui/material';
import Footer from '../Header/Footer';

function HomePage() {
  const images = [
    'https://images.bewakoof.com/uploads/grid/app/1x1-HatkeSale-common-1695713833.jpg',
    'https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-UltimateJoggers-common-1695633812.jpg',
    'https://images.bewakoof.com/uploads/grid/app/1x1-HatkeSale-common-1695713833.jpg',
    'https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-UltimateJoggers-common-1695633812.jpg',
    'https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-UltimateJoggers-common-1695633812.jpg',
  ];

  const secondarySectionData = [
    {
      src: 'https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-UltimateJoggers-common-1695633812.jpg',
      text: 'New Arrivals',
    },
    {
      src: 'https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w',
      text: 'Official Collaborations',
    },
    {
      src: 'https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY',
      text: 'Customization',
    },
    {
      src: 'https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ',
      text: 'Combos',
    },
    {
      src: 'https://fastly.picsum.photos/id/19/2500/1667.jpg?hmac=7epGozH4QjToGaBf_xb2HbFTXoV5o8n_cYzB7I4lt6g',
      text: 'Vote for Designs',
    },
    {
      src: 'https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w',
      text: 'Last Sizes Left',
    },
    {
      src: 'https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s',
      text: 'Plus Size',
    },
  ];

  const eighthSectionImages = [
    'https://images.bewakoof.com/uploads/grid/app/1x1-HatkeSale-common-1695713833.jpg',
    'https://images.bewakoof.com/uploads/grid/app/1x1-HatkeSale-common-1695713833.jpg',
    'https://images.bewakoof.com/uploads/grid/app/1x1-HatkeSale-common-1695713833.jpg',
    // Add more images as needed
  ];
  const [visibleEighthSectionImages, setVisibleEighthSectionImages] = useState([0, 1]);

  const renderEighthSection = () => (
    <div className='eighthSection-home'>
      {visibleEighthSectionImages.map((index) => (
        <Link key={index}>
          <img
            src={eighthSectionImages[index]}
            alt={`Eighth Section Image ${index + 1}`}
            className='primarySection-image'
          />
        </Link>
      ))}
    </div>
  );

  const [visibleImages, setVisibleImages] = useState([0, 1]);

  const renderSecondarySection = () => (
    <div className='secondarySection-imageContainer'>
      {secondarySectionData.map((item, index) => (
        <Link key={index}>
          <img
            src={item.src}
            alt={`secondarySectionImage${index}`}
            className='secondarySection-images'
          />
          <Typography>{item.text}</Typography>
        </Link>
      ))}
    </div>
  );

  return (
    <div className='home-container'>
      <div className='primarySection-home'>
        {visibleImages.map((index) => (
          <Link key={index}>
            <img
              src={images[index]}
              alt={`Image ${index + 1}`}
              className='primarySection-image'
            />
          </Link>
        ))}
      </div>
      <div className='secondarySection-home'>
        {renderSecondarySection()}
      </div>
      <div className='thirdSection-home'>
        <Typography variant='h6' sx={{
          fontFamily: 'montserrat, sans-serif',
          letterSpacing: '2px',
          color: 'black',
          textAlign: 'center',
          margin: '10px'
        }}>Designs of the Week</Typography>
        <Link>
          <img className='thirdSectionHome-image' src='https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Men-1695705737.jpg' />
          <img className='thirdSectionHome-image' src='https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women-1695705738.jpg' />
        </Link>
      </div>
      <div className='fourthSection-home'>
        <Typography variant='h6' sx={{
          fontFamily: 'montserrat, sans-serif',
          letterSpacing: '2px',
          color: 'black',
          textAlign: 'center',
          margin: '10px',
        }}>Blockbuster deals</Typography>
        <Link>
          <img className='fourthSectionHome-image' src='https://images.bewakoof.com/uploads/grid/app/daily-deal-desktop-flat-60---1--1695833878.jpg' />
        </Link>
      </div>
      <div className='fifthSection-home'>
        <Typography variant='h6' sx={{
          fontFamily: 'montserrat, sans-serif',
          letterSpacing: '2px',
          color: 'black',
          textAlign: 'center',
          margin: '10px 10px 0px 10px',
        }}>TRENDING CATEGORIES</Typography>
        <Link>
          <Grid container display="flex" justifyContent="center">
            {/* First Row */}
            <Grid item xs={2}>
              <div className='fifthSectionHome-image-container'>
                <img src="https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-UltimateJoggers-common-1695633812.jpg" alt="Image 5" className='fifthSectionHome-image' />
              </div>
              <Typography sx={{
                fontFamily: 'montserrat, sans-serif',
                letterSpacing: '2px',
                color: 'black',
                textAlign: 'center',
                margin: '10px',
                // textDecorationLine:'none'// not woking , ineed to remove the line from the text
              }}>Printed T-shirts</Typography>
            </Grid>
            <Grid item xs={2}>
              <div className='fifthSectionHome-image-container'>
                <img src="https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-UltimateJoggers-common-1695633812.jpg" alt="Image 6" className='fifthSectionHome-image' />
              </div>
              <Typography sx={{
                fontFamily: 'montserrat, sans-serif',
                letterSpacing: '2px',
                color: 'black',
                textAlign: 'center',
                margin: '10px'
              }}>Oversized T-shirts</Typography>
            </Grid>
            {/* Second Row */}
            <Grid item xs={2}>
              <div className='fifthSectionHome-image-container'>
                <img src="https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-UltimateJoggers-common-1695633812.jpg" alt="Image 7" className='fifthSectionHome-image' />
              </div>
              <Typography sx={{
                fontFamily: 'montserrat, sans-serif',
                letterSpacing: '2px',
                color: 'black',
                textAlign: 'center',
                margin: '10px'
              }}>Shorts</Typography>
            </Grid>
            <Grid item xs={2}>
              <div className='fifthSectionHome-image-container'>
                <img src="https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-UltimateJoggers-common-1695633812.jpg" alt="Image 8" className='fifthSectionHome-image' />
              </div>
              <Typography sx={{
                fontFamily: 'montserrat, sans-serif',
                letterSpacing: '2px',
                color: 'black',
                textAlign: 'center',
                margin: '10px'
              }}>Joggers</Typography>
            </Grid>
            <Grid item xs={2}>
              <div className='fifthSectionHome-image-container'>
                <img src="https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-UltimateJoggers-common-1695633812.jpg" alt="Image 9" className='fifthSectionHome-image' />
              </div>
              <Typography sx={{
                fontFamily: 'montserrat, sans-serif',
                letterSpacing: '2px',
                color: 'black',
                textAlign: 'center',
                margin: '10px'
              }}>Vests</Typography>
            </Grid>
            <Grid item xs={2}>
              <div className='fifthSectionHome-image-container'>
                <img src="https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-UltimateJoggers-common-1695633812.jpg" alt="Image 10" className='fifthSectionHome-image' />
              </div>
              <Typography sx={{
                fontFamily: 'montserrat, sans-serif',
                letterSpacing: '2px',
                color: 'black',
                textAlign: 'center',
                margin: '10px'
              }}>Full Sleeve T-shirts</Typography>
            </Grid>
            <Grid item xs={2}>
              <div className='fifthSectionHome-image-container'>
                <img src="https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-UltimateJoggers-common-1695633812.jpg" alt="Image 11" className='fifthSectionHome-image' />
              </div>
              <Typography sx={{
                fontFamily: 'montserrat, sans-serif',
                letterSpacing: '2px',
                color: 'black',
                textAlign: 'center',
                margin: '10px'
              }}>Printed T-shirts</Typography>
            </Grid>
            <Grid item xs={2}>
              <div className='fifthSectionHome-image-container'>
                <img src="https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-UltimateJoggers-common-1695633812.jpg" alt="Image 12" className='fifthSectionHome-image' />
              </div>
              <Typography sx={{
                fontFamily: 'montserrat, sans-serif',
                letterSpacing: '2px',
                color: 'black',
                textAlign: 'center',
                margin: '10px'
              }}>Oversized T-shirts</Typography>
            </Grid>
            <Grid item xs={2}>
              <div className='fifthSectionHome-image-container'>
                <img src="https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-UltimateJoggers-common-1695633812.jpg" alt="Image 1" className='fifthSectionHome-image' />
              </div>
              <Typography sx={{
                fontFamily: 'montserrat, sans-serif',
                letterSpacing: '2px',
                color: 'black',
                textAlign: 'center',
                margin: '10px'
              }}>Fashion Tops</Typography>
            </Grid>
            <Grid item xs={2}>
              <div className='fifthSectionHome-image-container'>
                <img src="https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-UltimateJoggers-common-1695633812.jpg" alt="Image 2" className='fifthSectionHome-image' />
              </div>
              <Typography sx={{
                fontFamily: 'montserrat, sans-serif',
                letterSpacing: '2px',
                color: 'black',
                textAlign: 'center',
                margin: '10px'
              }}>Joggers</Typography>
            </Grid>
            <Grid item xs={2}>
              <div className='fifthSectionHome-image-container'>
                <img src="https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-UltimateJoggers-common-1695633812.jpg" alt="Image 3" className='fifthSectionHome-image' />
              </div>
              <Typography sx={{
                fontFamily: 'montserrat, sans-serif',
                letterSpacing: '2px',
                color: 'black',
                textAlign: 'center',
                margin: '10px'
              }}>Dresses</Typography>
            </Grid>
            <Grid item xs={2}>
              <div className='fifthSectionHome-image-container'>
                <img src="https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-UltimateJoggers-common-1695633812.jpg" alt="Image 4" className='fifthSectionHome-image' />
              </div>
              <Typography sx={{
                fontFamily: 'montserrat, sans-serif',
                letterSpacing: '2px',
                color: 'black',
                textAlign: 'center',
                margin: '10px'
              }}>Boyfriend T-shirts</Typography>
            </Grid>
          </Grid>
        </Link>
      </div>
      <div className='sixthSection-home'>
        <Typography variant='h6' sx={{
          fontFamily: 'montserrat, sans-serif',
          letterSpacing: '2px',
          color: 'black',
          textAlign: 'center',
          margin: '10px',
        }}>TOO HOT TO BE MISSED</Typography>
          <Link>
            <Grid container display="flex" justifyContent="center">
              {/* First Row */}
              <Grid item xs={6}> {/* Each item occupies 6 columns on small screens */}
                <div className='sixthSectionHome-image-container'>
                  <img src="https://images.bewakoof.com/uploads/grid/app/desktop-mid-size-hygiene-revamp-PoloTees-1695965957.jpg" alt="Image 1" className='sixthSectionHome-image' />
                </div> 
              </Grid>
              <Grid item xs={6}> {/* Each item occupies 6 columns on small screens */}
                <div className='sixthSectionHome-image-container'>
                  <img src="https://images.bewakoof.com/uploads/grid/app/desktop-mid-size-hygiene-revamp-PoloTees-1695965957.jpg" alt="Image 2" className='sixthSectionHome-image' />
                </div>
              </Grid>
              <Grid item xs={6}> {/* Each item occupies 6 columns on small screens */}
                <div className='sixthSectionHome-image-container'>
                  <img src="	https://images.bewakoof.com/uploads/grid/app/desktop-mid-size-hygiene-revamp-PoloTees-1695965957.jpg" alt="Image 3" className='sixthSectionHome-image' />
                </div>
              </Grid>
              <Grid item xs={6}> {/* Each item occupies 6 columns on small screens */}
                <div className='sixthSectionHome-image-container'>
                  <img src="https://images.bewakoof.com/uploads/grid/app/desktop-mid-size-hygiene-revamp-PoloTees-1695965957.jpg" alt="Image 4" className='sixthSectionHome-image' />
                </div>
              </Grid>
            </Grid>
          </Link>
      </div>
      <div className='seventhSection-home'>
        <Typography variant='h6' sx={{
          fontFamily: 'montserrat, sans-serif',
          letterSpacing: '2px',
          color: 'black',
          textAlign: 'center',
          margin: '10px 10px 0px 10px',
        }}>TRENDING CATEGORIES</Typography>
        <Link>
          <Grid container display="flex" justifyContent="center">
            {/* First Row */}
            <Grid item xs={2}>
              <div className='seventhSectionHome-image-container'>
                <img src="https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-UltimateJoggers-common-1695633812.jpg" alt="Image 5" className='fifthSectionHome-image' />
              </div>
              <Typography sx={{
                fontFamily: 'montserrat, sans-serif',
                letterSpacing: '2px',
                color: 'black',
                textAlign: 'center',
                margin: '10px',
                // textDecorationLine:'none'// not woking , ineed to remove the line from the text
              }}>Printed T-shirts</Typography>
            </Grid>
            <Grid item xs={2}>
              <div className='seventhSectionHome-image-container'>
                <img src="https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-UltimateJoggers-common-1695633812.jpg" alt="Image 6" className='fifthSectionHome-image' />
              </div>
              <Typography sx={{
                fontFamily: 'montserrat, sans-serif',
                letterSpacing: '2px',
                color: 'black',
                textAlign: 'center',
                margin: '10px'
              }}>Oversized T-shirts</Typography>
            </Grid>
            {/* Second Row */}
            <Grid item xs={2}>
              <div className='seventhSectionHome-image-container'>
                <img src="https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-UltimateJoggers-common-1695633812.jpg" alt="Image 7" className='fifthSectionHome-image' />
              </div>
              <Typography sx={{
                fontFamily: 'montserrat, sans-serif',
                letterSpacing: '2px',
                color: 'black',
                textAlign: 'center',
                margin: '10px'
              }}>Shorts</Typography>
            </Grid>
            <Grid item xs={2}>
              <div className='seventhSectionHome-image-container'>
                <img src="https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-UltimateJoggers-common-1695633812.jpg" alt="Image 8" className='fifthSectionHome-image' />
              </div>
              <Typography sx={{
                fontFamily: 'montserrat, sans-serif',
                letterSpacing: '2px',
                color: 'black',
                textAlign: 'center',
                margin: '10px'
              }}>Joggers</Typography>
            </Grid>
            <Grid item xs={2}>
              <div className='seventhSectionHome-image-container'>
                <img src="https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-UltimateJoggers-common-1695633812.jpg" alt="Image 9" className='fifthSectionHome-image' />
              </div>
              <Typography sx={{
                fontFamily: 'montserrat, sans-serif',
                letterSpacing: '2px',
                color: 'black',
                textAlign: 'center',
                margin: '10px'
              }}>Vests</Typography>
            </Grid>
            <Grid item xs={2}>
              <div className='seventhSectionHome-image-container'>
                <img src="https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-UltimateJoggers-common-1695633812.jpg" alt="Image 10" className='fifthSectionHome-image' />
              </div>
              <Typography sx={{
                fontFamily: 'montserrat, sans-serif',
                letterSpacing: '2px',
                color: 'black',
                textAlign: 'center',
                margin: '10px'
              }}>Full Sleeve T-shirts</Typography>
            </Grid>
            </Grid>
            </Link>
            </div>
            <div className='eighthSection-home'>
              <div className='primarySection-home'>
               {renderEighthSection()}
               </div>
            </div>
            <div className='ninethSection-home'>
              <Typography variant='h6' sx={{
              fontFamily: 'montserrat, sans-serif',
              letterSpacing: '2px',
              color: 'black',
              textAlign: 'center',
              margin: '10px',
            }}>TOP ACCESSORIES</Typography>
            <div className='ninethSectionHomeImage'>
            <Link>
              <div className='ninethSectionHomeImage-container'>           
                <Grid>
              <Grid item xs={2}>
              <div className='ninethSectionHomeImage-container'>
                <img src="https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-UltimateJoggers-common-1695633812.jpg" alt="Image 1" className='fifthSectionHome-image'/>
              </div>
              <Typography sx={{
                fontFamily: 'montserrat, sans-serif',
                letterSpacing: '2px',
                color: 'black',
                textAlign: 'center',
                margin: '10px'
              }}>Full Sleeve T-shirts</Typography>
            </Grid>
            </Grid>
                <Grid>
              <Grid item xs={2}>
              <div className='ninethSectionHomeImage-container'>
                <img src="https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-UltimateJoggers-common-1695633812.jpg" alt="Image 2" className='fifthSectionHome-image' />
              </div>
              <Typography sx={{
                fontFamily: 'montserrat, sans-serif',
                letterSpacing: '2px',
                color: 'black',
                textAlign: 'center',
                margin: '10px'
              }}>Full Sleeve T-shirts</Typography>
            </Grid>
            </Grid>
                <Grid>
              <Grid item xs={2}>
              <div className='ninethSectionHomeImage-container'>
                <img src="https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-UltimateJoggers-common-1695633812.jpg" alt="Image 3" className='fifthSectionHome-image'  />
              </div>
              <Typography sx={{
                fontFamily: 'montserrat, sans-serif',
                letterSpacing: '2px',
                color: 'black',
                textAlign: 'center',
                margin: '10px'
              }}>Full Sleeve T-shirts</Typography>
            </Grid>
            </Grid>
                <Grid>
              <Grid item xs={2}>
              <div className='ninethSectionHomeImage-container'>
                <img src="https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-UltimateJoggers-common-1695633812.jpg" alt="Image 14"  className='fifthSectionHome-image' />
              </div>
              <Typography sx={{
                fontFamily: 'montserrat, sans-serif',
                letterSpacing: '2px',
                color: 'black',
                textAlign: 'center',
                margin: '10px'
              }}>Full Sleeve T-shirts</Typography>
            </Grid>
            </Grid>
            
              </div>
              </Link>
            </div>
            </div>
            <div className='tenthSection-home'>
              <Typography>BEST SELLERS</Typography>
              <Link>
              <div className='tenthSectionHomeImage-container'>
                <Paper sx={{
                  width:"250px",
                  height:"500px"
                }}>    
                  <img src='https://images.bewakoof.com/t320/men-s-white-world-peace-t-shirt-231465-1655747902-1.jpg' alt='image 1' className='tenthSectionHome-image'/>
                </Paper>
              </div>
              Explore All
            </Link>
            </div>
      <div className='eleventhSection-home'>
        <Typography variant='h6' sx={{
          fontFamily: 'montserrat, sans-serif',
          letterSpacing: '2px',
          color: 'black',
          textAlign: 'center',
          margin: '10px',
        }}>OUR BEST PICKS</Typography>
          <Link>
            <Grid container display="flex" justifyContent="center">
              {/* First Row */}
              <Grid item xs={6}> {/* Each item occupies 6 columns on small screens */}
                <div className='sixthSectionHome-image-container'>
                  <img src="https://images.bewakoof.com/uploads/grid/app/desktop-mid-size-hygiene-revamp-PoloTees-1695965957.jpg" alt="Image 1" className='sixthSectionHome-image' />
                </div> 
              </Grid>
              <Grid item xs={6}> {/* Each item occupies 6 columns on small screens */}
                <div className='sixthSectionHome-image-container'>
                  <img src="https://images.bewakoof.com/uploads/grid/app/desktop-mid-size-hygiene-revamp-PoloTees-1695965957.jpg" alt="Image 2" className='sixthSectionHome-image' />
                </div>
              </Grid>
              <Grid item xs={6}> {/* Each item occupies 6 columns on small screens */}
                <div className='sixthSectionHome-image-container'>
                  <img src="	https://images.bewakoof.com/uploads/grid/app/desktop-mid-size-hygiene-revamp-PoloTees-1695965957.jpg" alt="Image 3" className='sixthSectionHome-image' />
                </div>
              </Grid>
              <Grid item xs={6}> {/* Each item occupies 6 columns on small screens */}
                <div className='sixthSectionHome-image-container'>
                  <img src="https://images.bewakoof.com/uploads/grid/app/desktop-mid-size-hygiene-revamp-PoloTees-1695965957.jpg" alt="Image 4" className='sixthSectionHome-image' />
                </div>
              </Grid>
            </Grid>
          </Link>
      </div>
      <div className='twelvethSection-home'>
        <Link>
        <img className='twelvethSectionHome-image' src='https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1672040129.jpg' alt='image'/>
        </Link>
      </div>
     
      <div className='thirteenthSection-home'>
        <Link>
        <img className='twelvethSectionHome-image' src='https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg' alt='image'/>
        </Link>
      </div>
<Footer/>
    </div>
  );
}

export default HomePage;
