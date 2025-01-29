import { Box, Container, Grid2, Typography } from '@mui/material';
import React from 'react';
import {
    Link
  } from "react-router-dom";
  import { FaCcMastercard } from "react-icons/fa";
  import { RiBankCardFill } from "react-icons/ri";
  import { FaPaypal } from "react-icons/fa";
  import { SiAmericanexpress } from "react-icons/si";





const Footer = () => {
  return (
    <div>
        <Box width="100%" sx={{backgroundColor:'#415a77' , borderRadius:'20px 20px 0 0'}}>
            <Container maxWidth='xl'>
                <Box sx={{p:'50px 0 ',width:'100%'}}>
                    <Box width='100%'>
                        <Grid2 container spacing={1} sx={{color:'#e0e1dd' }}>
                            <Grid2 size={{xs:12 , md:3}}>
                                <Typography sx={{fontSize:{xs:'20px' , md:'28px' , lg:'32px'}}}>
                                    NextCar
                                </Typography> <br />
                                <Typography sx={{fontSize:{xs:'14px' , md:'15px' , lg:'16px'}}}>
                                    One Off the best Car Selling platfrom in india . <br /> fast car selling company collobration 
                                </Typography>
                            </Grid2>
                            <Grid2 size={{xs:6 , md:3}} sx={{textAlign:'center', borderLeft:'1px solid '}}>
                                <Typography sx={{fontSize:{xs:'20px' , md:'26px' }}}>
                                    About NextCar
                                </Typography> <br />
                                <ul className='t3'>
                                <Link to="/Home"><li>Home</li></Link>
                                <Link to="/Explore"><li>Explore</li></Link>
                                <Link to="/Blog"><li>Blog</li></Link>
                                <Link to="/About"><li>Abour</li></Link>
                                </ul>
                            </Grid2>
                            <Grid2 size={{xs:6 , md:3}} sx={{textAlign:'center',borderLeft:'1px solid '}}>
                            <Typography sx={{fontSize:{xs:'20px' , md:'26px' }}}>
                                    About NextCar
                                </Typography> <br />
                                <ul className='t3'>
                                    <Link  to="/Home" ><li>Home</li></Link>
                                    <li>Home</li>
                                    <li>Home</li>
                                    <li>Home</li>
                                    <li>Home</li>
                                </ul>
                            </Grid2>
                            <Grid2 size={{xs:6 , md:3}} sx={{textAlign:'center',borderLeft:'1px solid '}}>
                            <Typography sx={{fontSize:{xs:'20px' , md:'26px' }}}>
                                    About NextCar
                                </Typography> <br />
                                <ul className='t3'>
                                    <Link  to="/Home" ><li>Home</li></Link>
                                    <li>Home</li>
                                    <li>Home</li>
                                    <li>Home</li>
                                    <li>Home</li>
                                </ul>
                            </Grid2>
                        </Grid2>
                    </Box>
                </Box>
            </Container>
        </Box>



        <Box width="100%" sx={{backgroundColor:'#415a77',borderTop:'1px solid #e0e1dd'}}>
            <Container maxWidth='xl'>
                <Box sx={{display:'flex' , justifyContent:'space-between',alignItems:'center'}}>
                <Box sx={{p:'25px 0 ',width:'100%',color:'#e0e1dd',fontFamily:'revert'}}>
                © 2024 Girnar Software Pvt. Ltd. 
                </Box>
                <Box sx={{display:'flex' , gap:'10px' , color:'#e0e1dd'}}>
                <FaCcMastercard />
                <RiBankCardFill />
                <FaPaypal />
                <SiAmericanexpress />
                </Box>
                </Box>
            </Container>
        </Box>

    </div>
  )
}

export default Footer