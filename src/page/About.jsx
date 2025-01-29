// src/pages/About.js
import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Grid2
} from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import img1 from '../img/testimoniyal.jpg';

function AboutPage() {
  return (
    <div>
  <Box width='100%' mt={10}>
    <Container maxWidth="xl">
        <Typography sx={{fontFamily:'"Bebas Neue", sans-serif' , fontSize:{xs:'24px' , sm:'30px',md:'38px' , color:'#1b263b'}}} align="center" gutterBottom>
          About Us - Revolutionizing Car Sales
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Discover a seamless car buying experience with our dedicated team and advanced platform.
          From the best deals to certified vehicles, we're here to make car ownership hassle-free.
        </Typography>

        {/* Feature Highlights */}
        <Box mt={5} width="100%">
      <Typography sx={{fontFamily:'"Bebas Neue", sans-serif' ,fontSize:{xs:'24px' , sm:'30px',md:'38px' , color:'#1b263b'}}} align="center" gutterBottom>
        Why Choose Us?
      </Typography>

      <Grid2 container spacing={3} justifyContent={{xs:'left' , sm:'center'}} mt={2}>
        {[
          "Certified Quality Cars",
          "Affordable Financing Options",
          "Comprehensive After-Sales Support",
        ].map((feature) => (
          <Grid2 xs={12} sm={6} md={4} key={feature} display="flex" justifyContent="center">
            <Box display="flex" alignItems="center">
              <CheckCircleIcon color="primary" fontSize="large" />
              <Typography variant="h6" color="textSecondary" ml={1}>
                {feature}
              </Typography>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
      </Container>
  </Box>    


    <Box width="100%" mt={5}>
      <Container maxWidth="xl">
        <Typography sx={{fontFamily:'"Bebas Neue", sans-serif' , fontSize:{xs:'24px' , sm:'30px',md:'38px' , color:'#1b263b'}}} align="center" gutterBottom>
          Our Vision and Mission
        </Typography>
        
        {/* Vision and Mission Cards */}
        <Grid2 container spacing={1} justifyContent="center" mt={2}>
          {/* Our Vision */}
          <Grid2 size={{xs:12 , sm:6 , md:4}}>
            <Card sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                alt="Our Vision"
                height="140"
                image={img1}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Our Vision
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  To redefine car sales by bringing transparency and value to every transaction.
                </Typography>
              </CardContent>
            </Card>
          </Grid2>

          {/* Our Mission */}
          <Grid2 size={{xs:12 , sm:6 , md:4}}>
            <Card sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                alt="Our Mission"
                height="140"
                image={img1}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Our Mission
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  We strive to deliver top-quality service and certified vehicles, prioritizing
                  customer satisfaction and peace of mind.
                </Typography>
              </CardContent>
            </Card>
          </Grid2>

          {/* Customer Testimonials */}
          <Grid2 size={{xs:12 , sm:6 , md:4}}>
            <Card sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                alt="Customer Testimonials"
                height="140"
                image={img1}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Customer First
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Our focus is on providing an experience that exceeds customer expectations.
                  Join thousands of happy customers.
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
      </Container>
    </Box>




    <Box width='100%' mt={5}>
      <Container maxWidth='xl'>
        {/* Meet the Team */}
        <Box mt={5} width="100%">
          <Typography sx={{fontFamily:'"Bebas Neue", sans-serif' , fontSize:{xs:'24px' , sm:'30px',md:'38px' , color:'#1b263b'}}} align="center" gutterBottom>
            Meet Our Team
          </Typography>
          <Grid2 container spacing={4} justifyContent="center" mt={2}>
            {[
              { name: "Sarah Johnson", role: "CEO", img:img1 },
              { name: "Mike Thompson", role: "Sales Head", img:img1 },
              { name: "Emily Clark", role: "Customer Support", img:img1 },
            ].map((member) => (
              <Grid2 xs={12} sm={4} md={3} key={member.name}>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Avatar src={member.img} sx={{ width:{xs:'100px'}, height:{xs:'100px'}, mb: 2 }} />
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {member.role}
                  </Typography>
                </Box>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Container>
  </Box>


  <Box width='100%' mt={5}>
      <Container maxWidth='xl'>
        {/* Frequently Asked Questions */}
        <Box mt={5} width="100%">
          <Typography sx={{fontFamily:'"Bebas Neue", sans-serif' , fontSize:{xs:'24px' , sm:'30px',md:'38px' , color:'#1b263b'}}} align="center" gutterBottom>
            Frequently Asked Questions
          </Typography>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>How do I apply for financing?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                Applying for financing is simple! Visit our financing page to fill out an application, and we’ll get back to you within 24 hours.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Do you offer warranties?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                Yes, all our cars come with a standard warranty, with options for extended warranties to suit your needs.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Can I test drive a car before buying?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                Absolutely! Schedule a test drive with us at a convenient time, and experience the car firsthand.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
    </Container>
  </Box>
    
  <Box width='100%' m='50px 0'>
      <Container maxWidth='xl'>
        {/* Call to Action */}
        <Box mt={5} textAlign="center">
          <Typography sx={{fontFamily:'"Bebas Neue", sans-serif' , fontSize:{xs:'24px' , sm:'30px',md:'38px' , color:'#1b263b'}}} gutterBottom>
            Find Your Perfect Car Today
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Explore our collection and drive home your dream car with ease.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Browse Cars
          </Button>
        </Box>
    </Container>
  </Box>
</div>
  );
}

export default AboutPage;
