import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const UserLogin = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        User Login
      </Typography>
      <TextField fullWidth label="Email" margin="normal" />
      <TextField fullWidth label="Password" margin="normal" type="password" />
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Login
      </Button>
    </Container>
  );
};

export default UserLogin;
