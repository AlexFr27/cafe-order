// src/pages/OrderPage.tsx
import React, { useEffect } from 'react';
import { useAppSelector } from '../hooks/useAppSelector';
import { selectBasketItems } from '../features/basket/basketSlice'; // или другой селектор, если вы храните заказ не в basket
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { Box, Alert, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

export const OrderPage: React.FC = () => {
  const items = useAppSelector(selectBasketItems);
  const navigate = useNavigate();

  // Если нет позиций — кидаем на /menu
  useEffect(() => {
    if (items.length === 0) {
      navigate(ROUTES.MENU, { replace: true });
    }
  }, [items, navigate]);

  return (
    <Box sx={{ p: 2 }}>
      <Alert severity="info" sx={{ mb: 3 }}>
        Статус заказа: ваш заказ в обработке!
      </Alert>

      <Typography variant="h5" gutterBottom>
        Ваш заказ:
      </Typography>

      <Grid container spacing={2}>
        {items.map(item => (
          <Grid item xs={12} md={6} key={item.id}>
            <Card sx={{ display: 'flex', borderRadius: 2 }}>
              <CardMedia
                component="img"
                image={item.imageUrl}
                alt={item.name}
                sx={{ width: 100, height: 100, objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="subtitle1">{item.name}</Typography>
                <Typography variant="body2">
                  {item.quantity} × {item.price.toFixed(2)} ₽ ={' '}
                  {(item.quantity * item.price).toFixed(2)} ₽
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'right', mt: 4 }}>
        <Typography variant="h6">
          Total:{' '}
          {items.reduce((sum, it) => sum + it.price * it.quantity, 0).toFixed(2)} ₽
        </Typography>
      </Box>
    </Box>
  );
};
