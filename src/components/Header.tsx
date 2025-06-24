// src/components/Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAppSelector } from '../hooks/useAppSelector';
import { selectTotalCount, selectTotalPrice } from '../features/basket/basketSlice';
import { ROUTES } from '../constants/routes';

export const Header: React.FC = () => {
  const totalCount = useAppSelector(selectTotalCount);
  const totalPrice = useAppSelector(selectTotalPrice);

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Название — NavLink */}
        <Link
          component={NavLink}
          to={ROUTES.MENU}
          color="inherit"
          underline="none"
          variant="h6"
          sx={{ flexGrow: 1 }}
        >
          Гренка
        </Link>

        <Typography variant="subtitle1" sx={{ mr: 2 }}>
          {totalPrice.toFixed(2)} ₽
        </Typography>

        <IconButton component={NavLink} to={ROUTES.BASKET} color="inherit" size="large">
          <Badge badgeContent={totalCount} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
