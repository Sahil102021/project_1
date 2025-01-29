import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Divider, Grid2, Typography } from '@mui/material';
import Banner2 from '../Bannerpage/Banner2';
import Card2 from '../Componet/Card2';
import Data1 from '../Componet/Data1';
import Card1 from '../Componet/Card1';
import Data from '../Componet/Data';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { FaChevronCircleRight } from 'react-icons/fa';

const Explore = () => {

    // State hooks inside the Blog component
    const [text, setText] = useState(Data1);
    const [search, setSearch] = useState('');
  
    // Function to handle category filtering
    function handl(el) {
      let filterData = Data1.filter(e => 
        el === "All" ? Data1 : e.category.toLowerCase() === el.toLowerCase()
      );
      setText(filterData);
    }
  
    // Function to handle search filtering
    function handleSearch() {
      let filterData = Data1.filter((el) => {
        return el.name.toLowerCase().includes(search.toLowerCase());
      });
      setText(filterData);
    }
  
    // useEffect to trigger search when the search term changes
    useEffect(() => {
      handleSearch();
    }, [search]);




  return (
    <div>
      {/* section 1 */}
      <Banner2 />


      {/* section 2 */}
      <Box width="100%" mt={5}> 
        <Container maxWidth='xl'>
          <Box width='100%'  sx={{display:'flex' , flexDirection:{xs:'column' , md:'row'}}}>

            {/* seach */}
            <Box width={{xs:'100%' , md:'20%'}}>
            <input
            className='inputSearch'
            type="search" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            placeholder='Search Blog '
            />
          <Button variant='outlined' onClick={() => handl('All')}>All</Button>
            </Box>

            {/* Car Card */}
            <Box width={{xs:'100%' , md:'80%'}}>
            <Box width='100%'>
                <Grid2 container spacing={1}>
                    {text.map((el,i) => (
                      <Grid2 xs={12} sm={6} md={6} key={i}>
                      <Card2 photos={el.photos} 
                             name={el.name} 
                             make={el.make} 
                             model={el.model} 
                             year={el.year} 
                             color={el.color} 
                             enginePower={el.enginePower} 
                             mileage={el.mileage} 
                             fuel={el.fuel} 
                             price={el.fuel}
                             id={el.id}  />
                      </Grid2>
                      ))}
                </Grid2>
            </Box>
            </Box>

          </Box>
        </Container>
      </Box>


      {/* Section 3 */}
      <Box width='100%' >
        <Container maxWidth='xl'>
            <Box width='100%' sx={{m:'20px 0 20px 0',borderRadius:'10px',boxShadow: 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em '}}>
              <Typography variant='h5'  sx={{p:'20px',fontWeight:'bold'}}>The most searched cars</Typography>
              <Divider />
              <Box width='calc(100% - 40px)' p='20px'>
                <Grid2 container spacing={2}>
                    {
                      Data.map((el,i) => {
                        return (
                        <Grid2 key={i} size={{xs:12,sm:6,md:3}}>
                          <Card1 photos={el.photos} name={el.name} Prise={el.prise} link={el.link}/>
                        </Grid2>
                        )
                      })
                    }
                </Grid2>
              </Box>
              <Box>
                <Link sx={{textDecoration:'none'}} to='/Explore' >
                <Typography color='orange' variant='body1' p='0px 20px 10px 20px' sx={{display:'flex',alignItems:'center',gap:'10px'}} >
                    View All Suv Car <FaChevronCircleRight />
                </Typography>
                </Link>
              </Box>
            </Box>
        </Container>
      </Box>     

    </div>
  );
}

export default Explore;
