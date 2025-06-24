import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { QRScanner } from '../components/QRScanner';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Welcome to Cafe!</Typography>
      <Button variant="contained" onClick={() => navigate('/menu')}>View Menu</Button>
      <Typography variant="h6" gutterBottom>Or scan QR code at your table:</Typography>
      <QRScanner />
    </Container>
  );
};