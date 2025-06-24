// src/pages/SplashPage.tsx
import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.8); }
  to   { opacity: 1; transform: scale(1); }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to   { opacity: 0; }
`;

export const SplashPage: React.FC = () => {
  const navigate = useNavigate();
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    // через 2.5 с запустим fadeOut
    const t1 = setTimeout(() => setLeaving(true), 2500);
    // через 3.5 с перейдём на /menu
    const t2 = setTimeout(() => navigate('/menu'), 3500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [navigate]);

  return (
    <Box
      component="main"
      sx={{
        position: 'fixed',
        inset: 0,
        bgcolor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        animation: `${leaving ? fadeOut : fadeIn} 1s both`,
      }}
    >
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ color: 'primary.main' }}
      >
        Добро пожаловать к нам в гости
      </Typography>
      <Typography
        variant="h5"
        align="center"
        sx={{ color: 'secondary.main' }}
      >
        с любовью, Гренка
      </Typography>
    </Box>
  );
};
