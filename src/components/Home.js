import React from 'react';
import { Container, Typography } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Welcome to the Coupon Platform!
      </Typography>
      <Typography variant="h6">
        Explore amazing discounts and coupons from your favorite restaurants.
      </Typography>
    </Container>
  );
};

export default Home;
