import { Box, Divider, Typography } from '@mui/material'; 
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#0d1b2a',
    },
    secondary: {
      main: '#ff6f61',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h3: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#f2e9e4',
    },
    body1: {
      fontSize: '1rem',
      color: '#f2e9e4',
    },
  },
});

const Banner1 = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Box width="100%">
        <Box 
          sx={{ 
            m: '20px 0', 
            backgroundColor: '#22223b', 
            borderRadius: '8px', 
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' 
          }}
        >
          <Box 
            sx={{ 
              width: '100%', 
              display: 'flex', 
              flexDirection: { xs: 'column', sm: 'row' }, 
              alignItems: 'center', 
              position: 'relative' 
            }}
          >

            <Box 
              sx={{ 
                width: { xs: '100%', sm: '50%' }, 
                overflow: 'hidden', 
                borderRadius: '8px' 
              }}
            >
              <video 
                width="100%" 
                height="100%" 
                src={props.VideoSrc} 
                title="BMW M4 video" 
                autoPlay 
                loop 
                muted 
                style={{ borderRadius: '8px' }} 
              />
            </Box>

            <Box 
              sx={{ 
                position: 'absolute', 
                top: 'calc(100% - 80px)', 
                left: { sm: '5%', md: 'calc(50% - 150px)' }, 
                width: '300px', 
                height: '80px', 
                borderRadius: '50% 50% 0 0', 
                backgroundColor: '#9a8c98', 
                display: { xs: 'none', sm: 'flex' }, 
                justifyContent: 'center', 
                alignItems: 'end', 
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)', 
                zIndex: '1'
              }}
            >
              <Typography variant="h3">{props.BigName}</Typography>
            </Box>

            <Box 
              sx={{ 
                width: { xs: 'calc(100% - 40px)', sm: 'calc(50% - 40px)' }, 
                p: '20px', 
                textAlign: 'right', 
                position: 'relative', 
                overflow: 'hidden' 
              }}
            >
              <Divider 
                sx={{ 
                  width: '100%', 
                  mb: '5px', 
                  backgroundColor: '#f2e9e4', 
                  position: 'relative', 
                  left: '-50%',  
                  transform: 'rotate(90deg)',
                }} 
              />
              <Divider 
                sx={{ 
                  width: '100%', 
                  mb: '5px', 
                  backgroundColor: '#f2e9e4', 
                  position: 'relative', 
                  left: '-52%',  
                  transform: 'rotate(90deg)' 
                }} 
              />
              <Divider sx={{ width: '100%', mb: '5px', backgroundColor: '#f2e9e4' }} />
              <Divider sx={{ width: '100%', mb: '5px', backgroundColor: '#f2e9e4' }} />
              <Typography fontFamily="monospace" sx={{ fontSize: { sm: '20px', md: '30px' }, mb: '5px' }}>
                Engine: {props.Engine}
              </Typography>
              <Typography fontFamily="monospace" sx={{ fontSize: { xs: '14px', sm: '16px' }, mb: '5px' }}>
                Name: {props.Name}
              </Typography>
              <Typography fontFamily="monospace" sx={{ fontSize: { xs: '14px', sm: '16px' }, mb: '5px' }}>
                Description: {props.Description}
              </Typography>
              <Typography fontFamily="monospace" sx={{ fontSize: { xs: '14px', sm: '16px' }, mb: '5px' }}>
                Fuel Type: {props.Fuel}
              </Typography>
              <Typography fontFamily="monospace" sx={{ fontSize: { xs: '14px', sm: '16px' }, mb: '5px' }}>
                Power and Torque: {props.Power}
              </Typography>
              <Typography fontFamily="monospace" sx={{ fontSize: { xs: '14px', sm: '16px' }, mb: '5px' }}>
                DriveTrain: {props.DriveTrain}
              </Typography>
              <Typography fontFamily="monospace" sx={{ fontSize: { xs: '14px', sm: '16px' }, mb: '5px' }}>
                Acceleration: {props.Acceleration}
              </Typography>
              <Typography fontFamily="monospace" sx={{ fontSize: { xs: '14px', sm: '16px' }, mb: '5px' }}>
                Top Speed: {props.Speed}
              </Typography>
              <Divider 
                sx={{ 
                  width: '100%', 
                  mb: '5px', 
                  backgroundColor: '#f2e9e4', 
                  position: 'relative', 
                  left: '-50%',  
                  transform: 'rotate(90deg)',
                }} 
              />
              <Divider 
                sx={{ 
                  width: '100%', 
                  mb: '5px', 
                  backgroundColor: '#f2e9e4', 
                  position: 'relative', 
                  left: '-52%',  
                  transform: 'rotate(90deg)' 
                }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Banner1;
