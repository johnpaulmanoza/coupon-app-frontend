import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Container } from '@mui/material';

const LandingPage = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Restaurant Coupons
          </Typography>
          <Button color="inherit" component={Link} to="/login">Login</Button>
          <Button color="inherit" component={Link} to="/signup">Signup</Button>
          <Button color="inherit" component={Link} to="/merchant-login">Merchant</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Get Amazing Discounts on Restaurant Meals!
        </Typography>
        <Typography variant="h6" gutterBottom>
          Sign up now and redeem exclusive coupons at your favorite restaurants.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to="/signup"
          sx={{ mr: 2 }}
        >
          Get Started
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          component={Link}
          to="/merchant-signup"
        >
          Become a Merchant
        </Button>
      </Container>
    </>
  );
};

export default LandingPage;
