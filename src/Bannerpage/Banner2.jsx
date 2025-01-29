import React from "react";
import {
  Box,
  Button,
  Typography,
  Container,
  Grid2,
} from "@mui/material";
import BannerImg1 from '../img/BannerImg/Banner1.png'
 // Correct import for Grid2

function CarSellingBanner() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${BannerImg1})`, // Placeholder image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Grid2 container justifyContent="left" alignItems="center">
          <Grid2 xs={12} md={6}>
            <Typography sx={{fontFamily:'"Bebas Neue", sans-serif' , fontSize:{xs:'24px' , sm:'30px',md:'38px' , color:'#e0e1dd'}}} gutterBottom>
              Drive Your Dream Car Today
            </Typography>
            
            <Button variant="contained" color="secondary" size='medium'>
              Browse Cars
            </Button>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}

export default CarSellingBanner;
