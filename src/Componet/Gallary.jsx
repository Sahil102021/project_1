import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Box, Grid2, Typography } from '@mui/material';
import img1 from '../img/Gallary/071119-CC-Choosing-the-right-vehicle-for-a-new-driver_IMAGE-3.png'
import img2 from '../img/Gallary/5-scaled.png'
import img3 from '../img/Gallary/6427ee82aa0f6fe166c53898e279b25e.jpg'
import img4 from '../img/Gallary/Vicky-kaushal-range-rover-suv.png'
import img5 from '../img/Gallary/car-buying-process-ec.png'
import img6 from '../img/Gallary/iStock-1671361935-1.jpg'
import img7 from '../img/Gallary/kellyn-dixon.jpg'
import img8 from '../img/Gallary/saleswoman_customer.png'

const itemData = [
    {
      img: img1,
      title: 'Breakfast',
      author: '@Sahil',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: img2,
      title: 'Burger',
      author: '@Meet',
    },
    {
      img: img3,
      title: 'Camera',
      author: '@Rahul',
    },
    {
      img: img4,
      title: 'Coffee',
      author: '@Dhruv',
      cols: 2,
    },
    {
      img: img5,
      title: 'Hats',
      author: '@Meet',
      cols: 2,
    },
    {
      img: img6,
      title: 'Honey',
      author: '@Rutvic',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: img7,
      title: 'Basketball',
      author: '@Mahesh',
    },
    {
      img: img8,
      title: 'Fern',
      author: '@Radhika',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      author: '@Tisha',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      author: '@Shrey',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      author: '@Vayshnavi',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      author: '@Mohani',
      cols: 2,
    },
  ];

const Gallary = () => {
  return (
    <div>
      <Box width='100%' textAlign='center' m='75px 0'>
          <Typography variant='h5' sx={{fontWeight:'bold' , color:'#22223b' }}>
            Welcome to the car Gallarye 
          </Typography> <br />
          <Typography variant='body2' color='textSecondary'>
            Welcome to the NextCar car Gallary , this picture is purcheshing the nextcar buy the best selling car  
          </Typography>
      </Box>
  <Box sx={{ width: '100%', height: 450, overflowY: 'scroll' }}>
  <Grid2 container spacing={1}>
    {itemData.map((item) =>{
      return (
        <Grid2 item size={{xs:6 , sm:4 , md:3}} key={item.img}> {/* Each grid item is defined here */}
        <Box width='100%'>
        <ImageListItem >
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            style={{ width: '100%' , height:'300px'}} // Ensuring responsive image scaling
            />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            sx={{backdropFilter:'blur(5px)'}}
            actionIcon={
              <IconButton
              sx={{ color: 'rgba(255, 255, 255, 0.54)'  }}
              aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
              
            }
            />
        </ImageListItem>
        </Box>
      </Grid2>
      )  } )}
  </Grid2>
</Box>

    </div>
  )
}

export default Gallary
