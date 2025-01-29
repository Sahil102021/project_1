import React, { useEffect, useState } from 'react';
import BlogCard from '../Componet/BlogCard.jsx';  // Your BlogCard component
import BlogData from '../Componet/BlogData.js';  // The fake data file you created
import { Box, Button, Container, Grid2 } from '@mui/material';
import Banner2 from '../Bannerpage/Banner2';

const Blog = () => {
  // State hooks inside the Blog component
  const [text, setText] = useState(BlogData);
  const [search, setSearch] = useState('');

  // Function to handle category filtering
  function handl(el) {
    let filterData = BlogData.filter(e => 
      el === "All" ? BlogData : e.category.toLowerCase() === el.toLowerCase()
    );
    setText(filterData);
  }

  // Function to handle search filtering
  function handleSearch() {
    let filterData = BlogData.filter((el) => {
      return el.title.toLowerCase().includes(search.toLowerCase());
    });
    setText(filterData);
  }

  // useEffect to trigger search when the search term changes
  useEffect(() => {
    handleSearch();
  }, [search]);

  // Log the filtered text to the console
  console.log(text);

  return (
    <div>
      <Banner2 />

      <Box width='100%' sx={{ m:'50px 0'}}>
        <Container maxWidth='xl'>
        <Box sx={{display:'flex' , flexDirection:{xs:'column' , md:'row'}}}>

          
        {/* Blog Search */}
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

        {/* Blog Show */}
        <Box width={{xs:'100%' , md:'80%'}}>
              <Box width='100%'>
                <Grid2 container spacing={3} >
                  {/* Loop through filtered text data */}
                  {text.map((post, i) => (
                    <Grid2 key={i} item xs={12} sm={6} md={4}>
                      <BlogCard
                        image={post.img}
                        title={post.title}
                        description={post.description}
                        author_name={post.author_name}
                        tags={post.tags}
                        published_time={post.published_time}
                      />
                    </Grid2>
                  ))}
                </Grid2>
              </Box>
          </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default Blog;
