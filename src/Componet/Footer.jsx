import { Box, Container, Grid2, Typography, IconButton, styled, keyframes } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { FaCcMastercard, FaPaypal } from "react-icons/fa"
import { RiBankCardFill } from "react-icons/ri"
import { SiAmericanexpress } from "react-icons/si"

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`

const StyledFooter = styled(Box)(({ theme }) => ({
  background: "linear-gradient(-45deg, #415a77, #1b263b, #0d1b2a, #778da9)",
  backgroundSize: "400% 400%",
  animation: `${gradientAnimation} 15s ease infinite`,
  color: "#e0e1dd",
  borderRadius: "20px 20px 0 0",
  boxShadow: "0 -10px 20px rgba(0,0,0,0.1)",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-50%",
    left: "-50%",
    width: "200%",
    height: "200%",
    background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 80%)",
    transform: "rotate(30deg)",
  },
}))

const FooterLink = styled(RouterLink)(({ theme }) => ({
  color: "#e0e1dd",
  textDecoration: "none",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "2px",
    bottom: -2,
    left: 0,
    backgroundColor: "#e0e1dd",
    transform: "scaleX(0)",
    transformOrigin: "bottom right",
    transition: "transform 0.3s ease-out",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
    transformOrigin: "bottom left",
  },
}))

const FooterSection = styled(Box)(({ theme }) => ({
  borderLeft: "1px solid rgba(224, 225, 221, 0.3)",
  paddingLeft: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    borderLeft: "none",
    marginTop: theme.spacing(2),
    paddingLeft: 0,
  },
}))

const IconButtonStyled = styled(IconButton)(({ theme }) => ({
  color: "#e0e1dd",
  transition: "transform 0.3s ease, color 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    color: "#ffffff",
  },
}))

const Footer = () => {
  return (
    <StyledFooter>
      <Container maxWidth="xl">
        <Box sx={{ py: 6 }}>
          <Grid2 container spacing={3}>
            <Grid2 item size={{xs : 6 , md : 3}}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                }}
              >
                NextCar
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                One of the best Car Selling platforms in India. <br />
                Fast car selling company collaboration.
              </Typography>
            </Grid2>
            <Grid2 item size={{xs : 6 , md : 3}}>
              <FooterSection>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                  About NextCar
                </Typography>
                <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                  {["Home", "Explore", "Blog", "About"].map((item) => (
                    <li key={item} style={{ marginBottom: "8px" }}>
                      <FooterLink to={`/${item.toLowerCase()}`}>{item}</FooterLink>
                    </li>
                  ))}
                </Box>
              </FooterSection>
            </Grid2>
            <Grid2 item size={{xs : 6 , md : 3}}>
              <FooterSection>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                  Services
                </Typography>
                <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                  {["Car Sales", "Car Rentals", "Car Maintenance", "Car Insurance"].map((item) => (
                    <li key={item} style={{ marginBottom: "8px" }}>
                      <FooterLink to={`/${item.replace(" ", "").toLowerCase()}`}>{item}</FooterLink>
                    </li>
                  ))}
                </Box>
              </FooterSection>
            </Grid2>
            <Grid2 size={{xs : 6 , md : 3}}>
              <FooterSection>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                  Support
                </Typography>
                <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                  {["FAQ", "Contact Us", "Privacy Policy", "Terms of Service"].map((item) => (
                    <li key={item} style={{ marginBottom: "8px" }}>
                      <FooterLink to={`/${item.replace(" ", "").toLowerCase()}`}>{item}</FooterLink>
                    </li>
                  ))}
                </Box>
              </FooterSection>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
      <Box sx={{ borderTop: "1px solid rgba(224, 225, 221, 0.3)" }}>
        <Container maxWidth="xl">
          <Box sx={{ py: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="body2" sx={{ fontFamily: "revert", opacity: 0.8 }}>
              © 2024 Girnar Software Pvt. Ltd.
            </Typography>
            <Box>
              {[FaCcMastercard, RiBankCardFill, FaPaypal, SiAmericanexpress].map((Icon, index) => (
                <IconButtonStyled key={index} aria-label={`Payment method ${index + 1}`}>
                  <Icon />
                </IconButtonStyled>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </StyledFooter>
  )
}

export default Footer

