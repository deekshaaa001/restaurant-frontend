import React from 'react';
import Layout from '../components/layout/Layout';
import { Box, Typography } from '@mui/material';


const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h6": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h6 ": {
              fontSize: "1.5rem",
            },
          },
        }}
        >
       <Typography  variant='h6' >
        Welcome to my restaurant!!
       </Typography>
       <p> 
       Savor a flavor at Kitchen Kitten, a brand-new restaurant in Bhubaneswar. Whether you’re in the mood for something spicy or sweet, we’ve got a huge range of cuisine available on our menu—all deep fried to perfection. 
       We’re excited to bring something new to our community and can’t wait to share our unique recipes.
       Come dine with us & experience an authentic meal in an intimate dining space. 
       The restaurant offers menus for Lunch and Dinner. 
       We look forward to serving you!! ❤️
       </p>
       <br/>
       


       </Box>
    
    </Layout>
        
    
  )
}

export default About;