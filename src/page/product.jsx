import React, { useEffect, useState } from "react";
import {
    Box,
  Container,
  Grid2,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Stack,
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data1 from "../Componet/Data1";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Product = () => {

    const [text, setText] = useState({
        id: Number,
        name: "",
        make: "",
        model: "",
        year: Number,
        color: "",
        price: Number,
        enginePower: "",
        mileage: "",
        fuel: "",
        photos: []
    }); 
    const { id } = useParams();
    console.log(id);
    async function fetchData () {
        try {
            let copyData =  await data1.find((el) => el.id == parseInt(id))
            setText(copyData);
        } catch (error) {
            console.log(error);
        }
    }
   
useEffect(() => {
    fetchData();
},[])
         
  return (
    <div>
        <Box sx={{width :'100%' , mt:'100px'}} >
    <Container  maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* Product Header */}
      <Typography
        variant="h3"
        component="h1"
        sx={{ fontWeight: "bold", mb: 2 }}
      >
        {text.name}
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
        {text.make} - {text.model} ({text.year})
      </Typography>

      {/* Product Layout */}
      <Grid2 container spacing={4}>
        {/* Carousel Section */}
        <Grid2 item size={{ xs: 12, md: 6 }}>
          <Card>
            <Carousel
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              dynamicHeight
            >
              {text.photos.map((photo, index) => (
                <div key={index}>
                  <CardMedia
                    component="img"
                    image={photo}
                    alt={`BMW M3 Image ${index + 1}`}
                    sx={{ height: 400, objectFit: "cover" }}
                  />
                </div>
              ))}
            </Carousel>
          </Card>
        </Grid2>

        {/* Details Section */}
        <Grid2 item size={{ xs: 12, md: 6 }}>
          <Card variant="outlined" sx={{ p: 3 }}>
            <CardContent>
              <Stack spacing={2}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Specifications
                </Typography>
                <Typography variant="body1">
                  <strong>Make:</strong> {text.make}
                </Typography>
                <Typography variant="body1">
                  <strong>Model:</strong> {text.model}
                </Typography>
                <Typography variant="body1">
                  <strong>Year:</strong> {text.year}
                </Typography>
                <Typography variant="body1">
                  <strong>Color:</strong> {text.color}
                </Typography>
                <Typography variant="body1">
                  <strong>Price:</strong> ${text.price.toLocaleString()}
                </Typography>
                <Typography variant="body1">
                  <strong>Engine Power:</strong> {text.enginePower}
                </Typography>
                <Typography variant="body1">
                  <strong>Mileage:</strong> {text.mileage}
                </Typography>
                <Typography variant="body1">
                  <strong>Fuel:</strong> {text.fuel}
                </Typography>
              </Stack>

              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                sx={{ mt: 4 }}
              >
                Buy Now
              </Button>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Container>
    </Box>
    </div>
  );
};

export default Product;
