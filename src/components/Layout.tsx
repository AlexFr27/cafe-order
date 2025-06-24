import React, { ReactNode } from 'react';
import { Container, Box } from '@mui/material';
import { Header } from './Header';

interface Props { children: ReactNode; }
export const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Header />
    <Box component="main" sx={{ mt: 2, mb: 4 }}>
      <Container maxWidth="lg">
        {children}
      </Container>
    </Box>
  </>
);