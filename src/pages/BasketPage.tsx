// src/pages/BasketPage.tsx
import React from 'react';
import {
  Grid, Card, CardMedia, CardContent, Typography,
  IconButton, Button, Box
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  selectBasketItems,
  selectTotalPrice,
  removeFromBasket
} from '../features/basket/basketSlice';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';

export const BasketPage: React.FC = () => {
  const items = useAppSelector(selectBasketItems);
  const total = useAppSelector(selectTotalPrice);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Ваш завтрак с любовью
      </Typography>

      {items.length === 0 && (
        <Typography align="center">Корзина пуста</Typography>
      )}

      <Grid container spacing={2}>
        {items.map(item => (
          <Grid item xs={12} md={8} key={item.id}>
            <Card sx={{ display: 'flex', alignItems: 'center', borderRadius: 2 }}>
              <CardMedia
                component="img"
                image={item.imageUrl}
                alt={item.name}
                sx={{ width: 120, height: 80, objectFit: 'cover', borderRadius: 1 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6">{item.name}</Typography>
                <Typography>
                  ×{item.quantity} × {item.price.toFixed(2)} ₽ ={' '}
                  {(item.quantity * item.price).toFixed(2)} ₽
                </Typography>
              </CardContent>
              <IconButton onClick={() => dispatch(removeFromBasket(item.id))}>
                <DeleteIcon />
              </IconButton>
            </Card>
          </Grid>
        ))}
      </Grid>

      {items.length > 0 && (
        <Box sx={{ textAlign: 'right', mt: 4 }}>
          <Typography variant="h6">Total: {total.toFixed(2)} ₽</Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 1 }}
            onClick={() => navigate(ROUTES.ORDER)}
          >
            Оформить заказ
          </Button>
        </Box>
      )}
    </Box>
  );
};
