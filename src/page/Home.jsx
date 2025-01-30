import React, { useState } from 'react'
import { Box, Button, Container, Divider, Grid2, Link, Paper, Typography } from '@mui/material';
import HeroVideo from '../video/HeroVideo2.mp4';
import Slider1 from '../Componet/Slider';
import '../App.css';
import styled from '@emotion/styled';
import { FaHandSparkles } from "react-icons/fa";
import { HiColorSwatch } from "react-icons/hi";
import { MdLocalOffer } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoCarSport } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { Scale } from '@mui/icons-material';
import Card1 from '../Componet/Card1';
import Data from '../Componet/Data';
import { FaChevronCircleRight } from "react-icons/fa";
import Banner1 from '../Bannerpage/Banner1.jsx'
import bmw from '../video/Bmw.mp4';
import Data2 from '../Componet/Data2.js';
import Gallary from '../Componet/Gallary.jsx';
import Loder from '../Componet/Loder.jsx';
import List from '../Componet/List.jsx'




const Btn1 = {
  padding: { xs: '3px', sm: '4px', md: '8px' },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '5px',
  border: '1px solid #fff',
  borderRadius: '5px',
  color: '#f2e9e4',
  transition: '0.4s',
  '&:hover': { backgroundColor: '#f2e9e4', color: '#22223b' },
}







const Home = () => {

  return (
    <div>

      {/* Section 1 */}
      <Box width='100%' sx={{ marginTop: { xs: '45px', sm: '0' }, position: 'relative' }}>
        <Box sx={{ width: '100%' }}>
          <video src={HeroVideo} autoPlay loop muted className='videoCss'  >
          </video>
        </Box>
        <Container maxWidth="xl">
          <Box width="100%" >
            <Box sx={{ width: { sm: 'calc(300px - 40px)', md: 'calc(375px - 40px)' }, position: 'absolute', top: '20%', color: "#fff" }} >
              <Box sx={{ mb: '20px', width: '100%', height: 'auto', padding: { sm: '5px', md: '15px' }, backgroundColor: '#ffffff2c', backdropFilter: 'blur(10px)', borderRadius: '15px', display: { xs: 'none', sm: 'flex' }, flexDirection: 'column' }}>
                <Box>
                  <Typography sx={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: { sm: '30px', md: '38px' }, position: 'relative' }}>Drive Your Dreams Today!</Typography>
                  <Typography sx={{ fontSize: '12px', position: 'absolute', top: { xs: '19%', md: '25%' } }}>Performance, Power, and Precision – All in One</Typography><br />
                  <hr />
                </Box>
                <Box>
                  <Box sx={{ flexGrow: 1, pt: '10px' }}>
                    <Grid2 container spacing={1}>
                      <Grid2 size={{ xs: 12, md: 6 }}>
                        <Button variant="none" sx={{ textTransform: 'capitalize', p: { sm: '0 0 0 5px', md: '7.5px' } }} startIcon={<FaHandSparkles />}>
                          Luxury Interior
                        </Button>
                      </Grid2>
                      <Grid2 size={{ xs: 12, md: 6 }}>
                        <Button variant="none" sx={{ textTransform: 'capitalize', p: { sm: '0 0 0 5px', md: '7.5px' } }} startIcon={<HiColorSwatch />}>
                          bright colors
                        </Button>
                      </Grid2>
                      <Grid2 size={{ xs: 12, md: 6 }}>
                        <Button variant="none" sx={{ textTransform: 'capitalize', p: { sm: '0 0 0 5px', md: '7.5px' } }} startIcon={<MdLocalOffer />}>
                          Discounts or Financing
                        </Button>
                      </Grid2>
                      <Grid2 size={{ xs: 12, md: 6 }}>
                        <Button variant="none" sx={{ textTransform: 'capitalize', p: { sm: '0 0 0 5px', md: '7.5px' } }} startIcon={<BiSolidPhoneCall />}>
                          Call-to-Action
                        </Button>
                      </Grid2>
                    </Grid2>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ width: { xs: '30px', sm: '100%' }, height: 'Auto', p: { xs: '5px', sm: '5px', md: '15px' }, backgroundColor: '#ffffff2c', backdropFilter: 'blur(10px)', borderRadius: { xs: '5px', sm: '10px' }, position: 'absolute', top: { xs: '-30px', sm: '95%', md: '100%' }, left: { xs: '-10px', sm: '0' } }}>
                <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center', alignItems: 'center', gap: { xs: '10px', sm: '10px', md: '20px' } }}>
                  <Box sx={Btn1}>
                    <FaFacebookF />
                  </Box>
                  <Box sx={Btn1}>
                    <AiFillInstagram />
                  </Box>
                  <Box sx={Btn1}>
                    <IoCarSport />
                  </Box>
                  <Box sx={Btn1}>
                    <FaAddressCard />
                  </Box>
                  <Box sx={Btn1}>
                    <IoMdContacts /> <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>Connect</Typography>
                  </Box>
                </Box>

              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Section 2 */}
      <Box width='100%' sx={{ backgroundColor: '#f2e9e4' }}>
        <Container maxWidth="xl">
          <Slider1 />
        </Container>
      </Box>

      {/* Section 3 */}
      <Box width='100%' >
        <Container maxWidth='xl'>
          <Box width='100%' sx={{ m: '20px 0 20px 0', borderRadius: '10px', boxShadow: 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em ' }}>
            <Typography variant='h5' sx={{ p: '20px', fontWeight: 'bold' }}>The most searched cars</Typography>
            <Divider />
            <Box width='calc(100% - 40px)' p='20px'>
              <Grid2 container spacing={2}>
                {
                  Data.map((el, i) => {
                    return (
                      <Grid2 key={i} size={{ xs: 12, sm: 6, md: 3 }}>
                        <Card1 photos={el.photos} name={el.name} Prise={el.prise} link={el.link} />
                      </Grid2>
                    )
                  })
                }
              </Grid2>
            </Box>
            <Box>
              <Link sx={{ textDecoration: 'none' }} >
                <Typography color='orange' variant='body1' p='0px 20px 10px 20px' sx={{ display: 'flex', alignItems: 'center', gap: '10px' }} >
                  View All Suv Car <FaChevronCircleRight />
                </Typography>
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>


      {/* Section 4 */}
      <Box width='100%'>
        <Banner1 BigName='BMW M4'
          VideoSrc={bmw}
          Engine='2993 cc'
          Name='BMW M4 '
          Description='BMW M4 price for the base model starts at Rs. 1.53 Crore and the top model price goes upto Rs. 1.89 Crore (Avg. ex-showroom). M4 price for 2 variants is listed below.'
          Fuel='Petrol'
          Power='523 to 543 bhp & 650 Nm'
          DriveTrain='AWD'
          Acceleration='3.4 to 3.5 seconds'
          Speed='250 kmph'
        />
      </Box>


      {/* Section 5 */}
      <Box width='100%'>
        <Container maxWidth='xl'>

        </Container>
      </Box>



      {/* Section 6 */}
      <Box width='100%' >
        <Container maxWidth='xl'>
          <Box width='100%' sx={{ m: '20px 0 20px 0', borderRadius: '10px', boxShadow: 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em ' }}>
            <Typography variant='h5' sx={{ p: '20px', fontWeight: 'bold' }}>New Latest Car And Uncoming </Typography>
            <Divider />
            <Box width='calc(100% - 40px)' p='20px'>
              <Grid2 container spacing={2}>
                {
                  Data2.map((el, i) => {
                    return (
                      <Grid2 key={i} size={{ xs: 12, sm: 6, md: 3 }}>
                        <Card1 photos={el.photos} name={el.name} Prise={el.prise} link={el.link} />
                      </Grid2>
                    )
                  })
                }
              </Grid2>
            </Box>
            <Box>
              <Link sx={{ textDecoration: 'none' }} >
                <Typography color='orange' variant='body1' p='0px 20px 10px 20px' sx={{ display: 'flex', alignItems: 'center', gap: '10px' }} >
                  View All Suv Car <FaChevronCircleRight />
                </Typography>
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>


      {/* section 7 */}
      <Box width='100%' m='75px 0'>
        <Gallary />
      </Box>



      {/* section 8 */}
      <Box width='100%' >
        <Container maxWidth='xl'>
          <List />
        </Container>
      </Box>
    </div>
  )
}

export default Home