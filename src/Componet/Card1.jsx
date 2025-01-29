import React from 'react'
import { Box, display, width } from '@mui/system'
import { Button, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { FiMoreVertical } from "react-icons/fi";
import { MdOutlineCurrencyRupee } from "react-icons/md";

        
function Card1 (props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        };
    const handleClose = () => {
        setAnchorEl(null);
  };
  return (
    <div>
        <Box sx={{boxShadow: 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em',borderRadius:'10px',overflow:'hidden'}}>

            <Box width='100%' sx={{overflow:'hidden', height:{xs:'130px',md:'200px'}}}>
            <img width='100%' height='100%'  src={props.photos} style={{objectFit:'cover'}}/>
            </Box> 

            <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',width:'clac(100% - 20px)' ,p:'0 10px 0 10px'}}>
            <Typography sx={{fontWeight:'bold',flexGrow:'1',fontSize:'14px',fontWeight:'bold'}}>{props.name}</Typography>
                <Box> 
                    <IconButton sx={{p:'0'}}
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                      >
                        <FiMoreVertical />
                      </IconButton>
                      <Menu 
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          'aria-labelledby': 'basic-button',
                        }}
                        sx={{p:'10px'}}
                      >
                        <MenuItem onClick={handleClose}>More View</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                      </Menu>
                </Box>
            </Box>

            <Box sx={{p:'0 10px 0 10px'}}>
                <Typography  sx={{fontWeight:'bold',flexGrow:'1',fontSize:'14px',fontWeight:'bold'}}><MdOutlineCurrencyRupee /> {props.Prise} *</Typography>
            </Box>
            <Button href={props.link} variant='outlined' color='orange' sx={{width:'calc(100% - 20px)',m:'10px',color:'orange',borderRadius:'10px','&:hover':{backgroundColor:'orange',color:'#fff'
            }}}>
                    Check Octomber Offer    
            </Button>
        </Box>
     
    </div>
  )
}

export default Card1