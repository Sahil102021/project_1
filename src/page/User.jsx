import React from 'react';
import {
  Avatar, Box, Button, Card, CardContent, CardMedia, Container, Divider, IconButton, List, ListItem, ListItemButton,
  ListItemIcon, ListItemText, Stack, Typography
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import BadgeIcon from '@mui/icons-material/Badge';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import men from '../img/testimoniyal1.jpg';
import BookingCard from '../Componet/BookingCard';



const User = () => {
  return (
    <Container maxWidth="xl">
      <Box mt={10}>
        <Box display="flex" flexDirection={{ xs: 'column', sm: 'column' , md:' row '}}>

          {/* User Info Section */}
          <Box flex={{ xs: 'auto', sm: '100%' , md:'30%' }} p={2}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar
                src={men}
                alt="User Profile"
                sx={{ width: 150, height: 150, border: '5px solid', overflow: 'hidden', mb: 3 }}
              />
              <Typography variant='subtitle1' textAlign='center' color="textSecondary">
              Car enthusiast and tech lover with a passion for exploring innovative transportation solutions.
              </Typography>
              <Typography variant="body1" color="textSecondary" mt={1}>User ID: 78561289 </Typography>
                

              <List sx={{ width: '100%' }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon><PersonIcon /></ListItemIcon>
                    <ListItemText primary="User Name :" />
                    <ListItemText primary="Sahil475" sx={{ textAlign: 'right' }} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon><EmailIcon /></ListItemIcon>
                    <ListItemText primary="Email :" />
                    <ListItemText primary="Ramani3356@gmail.com" sx={{ textAlign: 'right' }} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon><BadgeIcon /></ListItemIcon>
                    <ListItemText primary="Full Name :" />
                    <ListItemText primary="Ramani Sahil" sx={{ textAlign: 'right' }} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon><ContactPhoneIcon /></ListItemIcon>
                    <ListItemText primary="Contact :" />
                    <ListItemText primary="+91 81550-83855" sx={{ textAlign: 'right' }} />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Box>

          {/* Car Booking Details Section */}
          <Box flex={{ xs: 'auto', sm: '100%' , md:'70%'}} p={2}>

          <Typography variant="h5" align="center" gutterBottom>
              Car Booking Details
            </Typography>
            <Divider sx={{ width: '100%', mb: 2 }} />

            <BookingCard />
          </Box>

        </Box>
      </Box>
    </Container>
  );
};

export default User;
