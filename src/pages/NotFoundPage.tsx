import React from 'react';
import { Container, Typography } from '@mui/material';

export const NotFoundPage: React.FC = () => (
  <Container>
    <Typography variant="h4">404 — Not Found</Typography>
    <Typography>The page you are looking for does not exist.</Typography>
  </Container>
);