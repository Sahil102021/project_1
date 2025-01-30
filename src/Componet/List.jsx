import { useState, useEffect } from "react"
import { Box, Typography, Button, Chip, ThemeProvider, createTheme } from "@mui/material"
import { styled } from "@mui/system"
import { motion } from "framer-motion"

const dataList = [
  { name: "Ford", country: "USA" },
  { name: "Chevrolet (Chevy)", country: "USA" },
  { name: "Tesla", country: "USA" },
  { name: "Dodge", country: "USA" },
  { name: "Jeep", country: "USA" },
  { name: "Chrysler", country: "USA" },
  { name: "Cadillac", country: "USA" },
  { name: "GMC", country: "USA" },
  { name: "Lincoln", country: "USA" },
  { name: "Buick", country: "USA" },
  { name: "Ram", country: "USA" },
  { name: "Volkswagen (VW)", country: "Germany" },
  { name: "Mercedes-Benz", country: "Germany" },
  { name: "BMW", country: "Germany" },
  { name: "Audi", country: "Germany" },
  { name: "Porsche", country: "Germany" },
  { name: "Opel", country: "Germany" },
  { name: "Bentley", country: "UK" },
  { name: "Rolls-Royce", country: "UK" },
  { name: "Ferrari", country: "Italy" },
  { name: "Lamborghini", country: "Italy" },
  { name: "Maserati", country: "Italy" },
  { name: "Alfa Romeo", country: "Italy" },
  { name: "Fiat", country: "Italy" },
  { name: "Pagani", country: "Italy" },
  { name: "Renault", country: "France" },
  { name: "Peugeot", country: "France" },
  { name: "Citroën", country: "France" },
  { name: "Rivian", country: "USA" },
  { name: "Lucid Motors", country: "USA" },
  { name: "NIO", country: "China" },
  { name: "XPeng", country: "China" },
  { name: "Polestar", country: "Sweden" },
  { name: "BYD", country: "China" },
  { name: "Fisker", country: "USA" },
  { name: "Faraday Future", country: "USA" },
]

const theme = createTheme({
  palette: {
    primary: {
      main: "#4a4e69",
    },
    secondary: {
      main: "#f2e9e4",
    },
  },
})

const StyledBox = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  color: theme.palette.secondary.main,
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.02)",
  },
}))

const StyledChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.secondary.main,
  },
}))

const MotionBox = motion(Box)

export default function LuxuryCarBrands() {
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [filteredBrands, setFilteredBrands] = useState(dataList)

  useEffect(() => {
    if (selectedCountry) {
      setFilteredBrands(dataList.filter((brand) => brand.country === selectedCountry))
    } else {
      setFilteredBrands(dataList)
    }
  }, [selectedCountry])

  const countries = Array.from(new Set(dataList.map((brand) => brand.country)))

  return (<>
    <Box width='100%' textAlign='center' m='75px 0'>
              <Typography variant='h5' sx={{fontWeight:'bold' , color:'#22223b' }}>
                Welcome to the all luxury car brand name 
              </Typography> <br />
              <Typography variant='body2' color='textSecondary'>
                
Welcome to the NextCar Car Gallery, your ultimate destination for discovering both new and classic car brands. Whether you're looking for the latest models or iconic vintage cars, our collection offers a diverse range to suit every enthusiast's taste. Explore top car brands and find your next dream ride!
              </Typography>
          </Box>
    <ThemeProvider theme={theme}>
      <Box sx={{ m: "75px 0", p: 3 }}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2 }}>
          <StyledBox width={{ xs: "100%", md: "25%" }}>
            <Typography variant="h5" align="center" gutterBottom>
              All The Luxury Brand Cars
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Button
                variant={selectedCountry === null ? "contained" : "outlined"}
                onClick={() => setSelectedCountry(null)}
                fullWidth
                sx={{color:'#f2e9e4'}}
              >
                All Countries
              </Button>
              {countries.map((country) => (
                <Button
                  key={country}
                  variant={selectedCountry === country ? "contained" : "outlined"}
                  onClick={() => setSelectedCountry(country)}
                  fullWidth
                  sx={{color:'#f2e9e4'}}
                >
                  {country}
                </Button>
              ))}
            </Box>
          </StyledBox>
          <MotionBox
            width={{ xs: "100%", md: "75%" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ backgroundColor: "secondary.main", borderRadius: 1, p: 2 }}>
              {filteredBrands.map((brand, index) => (
                <MotionBox
                  key={brand.name}
                  component={motion.div}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  display="inline-block"
                >
                  <StyledChip label={`${brand.name} - ${brand.country}`} onClick={() => {}} />
                </MotionBox>
              ))}
            </Box>
          </MotionBox>
        </Box>
      </Box>
    </ThemeProvider>
    </>
  )
}

