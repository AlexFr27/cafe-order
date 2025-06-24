import React from 'react';
import { Container, Typography } from '@mui/material';

export const NoPermissionPage: React.FC = () => (
  <Container>
    <Typography variant="h4">403 — No Permission</Typography>
    <Typography>You do not have access to this page.</Typography>
  </Container>
);