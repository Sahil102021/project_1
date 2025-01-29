// Import necessary libraries
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid2, Button , Box } from '@mui/material';
import img1 from '../img/Bmw/BmwM4/exterior-image-167.png';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

function Card2(props) {
    return (
        <Card sx={{
            maxWidth: 345,
            margin: 1,
            borderRadius: 3, 
            boxShadow: 3,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 6
            }
        }}>
            <CardMedia
                component="img"
                height="180"
                image={props.photos[0]}
                alt={`${props.make} ${props.model}`}
                sx={{ borderTopLeftRadius: 3, borderTopRightRadius: 3 }}
            />
            <CardContent sx={{ paddingBottom: 2 }}>
                <Typography variant="h5" component="div" sx={{ fontWeight: 600, color: '#333' }}>
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                    <strong>Make:</strong> {props.make} | <strong>Model:</strong> {props.model} | <strong>Year:</strong> {props.year}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                    <strong>Color:</strong> {props.color} | <strong>Engine Power:</strong> {props.enginePower} | <strong>Mileage:</strong> {props.mileage}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                    <strong>Fuel:</strong> {props.fuel} | <strong>Price:</strong> ${props.price}
                </Typography>
            </CardContent>
            <Link to={`/product/${props.id}`}><Button variant="contained" color="primary" sx={{
                m: '0 0 10px 10px', 
                borderRadius: 2, 
                fontWeight: 600, 
                backgroundColor: '#3f51b5',
                '&:hover': {
                    backgroundColor: '#2c387e'
                }
            }}>
                Learn More
            </Button></Link>
        </Card>
        

      
    )
};

export default Card2;
