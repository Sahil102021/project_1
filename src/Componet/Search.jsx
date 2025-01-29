import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, IconButton, TextField } from '@mui/material';
import { FiX } from "react-icons/fi";
import Data1 from './Data1';

const style = {
  position: 'absolute',
  top: {xs:'40%' , sm:'40%',md:'50%'},
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: '400px', lg: '600px' },
  height: {xs:'500px' , sm:'500px',md:'400px'},
  backgroundColor: '#ffffff9a',
  backdropFilter: 'blur(10px)',
  border: '1px solid #fff',
  borderRadius: '10px',
  boxShadow: 24,
  p: {xs:0 , sm:0 , md:4},
  display: 'flex',
  flexDirection: 'column',
};

function Search() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} sx={{ minWidth: '0' }}>
        <SearchIcon sx={{
          fontSize: { xs: '12px', sm: '16px' },
          color: '#fff',
          '&:hover': { color: 'black' },
          transition: 'color 0.3s',
        }} />
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* CLOSE ICON */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={handleClose} aria-label="Close search">
              <FiX />
            </IconButton>
          </Box>

          {/* SEARCH */}
          <Box width='100%'>
            <Autocomplete 
              id="car-select-demo"
              sx={{ width:{xs:'200px ' , sm:'300px' , md:'400px'} ,margin:'auto'}}
              options={Data1}
              autoHighlight
              getOptionLabel={(option) => option.name}
              renderOption={(props, option) => {
                const { key, ...optionProps } = props;
                return (
                  <Box 
                    key={key}
                    component="li"
                    sx={{ '& > img': { mr: 2, flexShrink: 0 }  }}
                    {...optionProps}
                  >
                    <img
                      loading="lazy"
                      width="20"
                      srcSet={`https://carlogos.com/${option.make.toLowerCase()}.png 2x`}
                      src={`https://carlogos.com/${option.make.toLowerCase()}.png`}
                      alt={option.make}
                      onError={(e) => (e.target.style.display = 'none')}
                    />
                    {option.name} 
                  </Box>
                );
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Choose a car"
                  autoFocus
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: 'new-password', // disable autocomplete and autofill
                  }}
                />
              )}
            />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default Search;
