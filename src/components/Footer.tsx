import React from 'react';
import { Box, Typography, Link } from '@mui/material';

export const Footer: React.FC = () => (
  <Box
    component="footer"
    sx={{
      mt: 'auto',
      py: 2,
      bgcolor: '#EDE0D4',
      textAlign: 'center',
    }}
  >
    <Typography variant="body2">
      © 2025 Гренка — Ваш идеальный завтрак
    </Typography>
    <Typography variant="caption">
      Сделано с любовью ❤️
    </Typography>
  </Box>
);