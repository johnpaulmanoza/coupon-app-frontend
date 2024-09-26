import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const UserSignup = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        User Signup
      </Typography>
      <TextField fullWidth label="Name" margin="normal" />
      <TextField fullWidth label="Email" margin="normal" />
      <TextField fullWidth label="Password" margin="normal" type="password" />
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Signup
      </Button>
    </Container>
  );
};

export default UserSignup;
