import React from 'react';
import {
  Avatar, Box, Button, Card, CardContent, CardMedia, Container, Divider, IconButton, List, ListItem, ListItemButton,
  ListItemIcon, ListItemText, Stack, Typography
} from '@mui/material';
import { Email, Phone, DirectionsCar, Info, ContactPhone, Event, AccessTime } from '@mui/icons-material';
import carImg from '../img/Bmw/BmwM4/exterior-image-167.png'





const user = {
    name: "Sahil",
    fullName: "Sahil Kumar",
    contact: "123-456-7890",
    email: "sahil@example.com",
    bio: "Car enthusiast and tech lover with a passion for exploring innovative transportation solutions.",
    userId: "123456",
    profilePic: "https://via.placeholder.com/150",
    car: {
      model: "Tesla Model S",
      color: "Red",
      price: "$70,000",
      company: "Tesla",
      bookingContact: "tesla-support@example.com",
      carPic: carImg,
      details: "Electric vehicle with autonomous driving capabilities and a luxurious interior.",
      bookingTime: "2023-11-10 14:00",
      connectTimes: 5,
      connectNumber: "1800-123-4567",
    }
  };


const BookingCard = () => {
  return (
    <div>
        <Box width='100%'>

            <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, boxShadow: 3 }}>
              <CardMedia
                component="img"
                sx={{ width: { xs: '100%', sm: 300 }, height: { xs: 200, sm: 'auto' } }}
                image={user.car.carPic}
                alt="Car image"
              />
              <CardContent>
                <Typography component="div" variant="h6">{user.car.model}</Typography>
                <Typography variant="subtitle1" color="textSecondary">Color: {user.car.color}</Typography>
                <Typography variant="subtitle1" color="textSecondary">Price: {user.car.price}</Typography>
                <Typography variant="body2" color="textSecondary" mt={2}>
                  {user.car.details}
                </Typography>

                <Stack direction="row" alignItems="center" spacing={1} mt={2}>
                  <Event fontSize="small" />
                  <Typography variant="body2" color="textSecondary">
                    Booking Date: {new Date(user.car.bookingTime).toLocaleString()}
                  </Typography>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1} mt={1}>
                  <ContactPhone fontSize="small" />
                  <Typography variant="body2" color="textSecondary">
                    Connect Number: {user.car.connectNumber}
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1} mt={1}>
                  <AccessTime fontSize="small" />
                  <Typography variant="body2" color="textSecondary">
                    Connection Attempts: {user.car.connectTimes}
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1} mt={1}>
                  <DirectionsCar fontSize="small" />
                  <Typography variant="body2" color="textSecondary">
                    Company: {user.car.company}
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1} mt={1}>
                  <Info fontSize="small" />
                  <Typography variant="body2" color="textSecondary">
                    Booking Contact: {user.car.bookingContact}
                  </Typography>
                </Stack>

                {/* Book Again Button */}
                <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick={() => alert("Booking initiated!")}>
                  Book Again
                </Button>
              </CardContent>
            </Card>
        </Box>
    </div>
  )
};

export default BookingCard