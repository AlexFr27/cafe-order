// src/pages/MenuPage.tsx
import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { useFetchMenuQuery } from '../api/menuApi';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { addToBasket } from '../features/basket/basketSlice';

export const MenuPage: React.FC = () => {
  const { data: items = [], isLoading } = useFetchMenuQuery();
  const dispatch = useAppDispatch();

  if (isLoading) return <div>Loading…</div>;

  return (
    <Grid container marginY={4} spacing={2} sx={{ p: 2 }}>
      {items.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={`${process.env.PUBLIC_URL}${item.imageUrl}`}
              alt={item.name}
            />
            <CardContent>
              <Typography variant="h6">{item.name}</Typography>
              <Typography>{item.price.toFixed(2)} ₽</Typography>
            </CardContent>
            <Button
              fullWidth
              variant="contained"
              onClick={() => dispatch(addToBasket(item))}
            >
              Добавить в корзину
            </Button>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
