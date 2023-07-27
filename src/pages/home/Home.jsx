import React from 'react';
import Layout from '../../Layout';  
import { Card, Container, CardActionArea, CardMedia, Grid, Typography, Box } from '@mui/material';

import { FavoriteBorderOutlined, Star } from '@mui/icons-material';
import images from './Images';
import SlideImage from '../../components/slide';



export default function Home() {

  return (
    <Layout>
    <Container  maxWidth='xl'>
      <Grid container spacing={4}>
      {images.sort(() => Math.random() - 0.5).map((card) => (
        <Grid kry={card} item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ 
          maxWidth: '100%' , boxShadow:'none', backgroundColor:'#fff',
          '&:hover': {
          background: '#ffffff', 
      },
    }}>
      <CardActionArea> 
        <CardMedia>
          <SlideImage image1={card.image1} image2={card.image2} image3={card.image3} /> 
        </CardMedia>
        <Box position={'absolute'} top={'15px'} right={'15px'}>
          <FavoriteBorderOutlined sx={{ fontSize:'29px', color:'#fff', }} />
        </Box>
          <Box display={'flex'} justifyContent={'space-between'}
          alignItems={'center'} mt={2}>
            <Typography gutterBottom variant="h6" component="div" fontWeight={'bold'} fontSize={'16px'}>
              Chaing Rai, Thailand
            </Typography>
            <Box display={'flex'}
          alignItems={'center'}>
            <Star color='text.secondary' sx={{ fontSize:'19px', }}/>
            <Typography variant="subtitle2" color="text.secondary" 
            fontSize={'15px'}
            justifyItems={'center'}>
             4.90
            </Typography>
            </Box>
          </Box>
          <Typography variant="subtitle2" color="text.secondary" 
            fontSize={'15px'}
            justifyItems={'center'}>
             29 km to Lam Nam Kok National Park Aug 19 - 24
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" 
            fontSize={'15px'}
            justifyItems={'center'}>
             <span style={{ fontWeight:'bold' }}>${card.price}</span> night
          </Typography>
      </CardActionArea>
    </Card>
        </Grid>
        ))}
      </Grid>
      </Container>
    </Layout>

  );
}
