import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetOrdersQuery } from '../api/ordersApi';
import { Container, List, ListItem, Typography } from '@mui/material';

export const OrdersPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const tableId = searchParams.get('tableId');
  const { data: orders = [] } = useGetOrdersQuery();
  const myOrders = orders.filter(o => o.tableId === tableId);

  return (
    <Container>
      <Typography variant="h5">Your Orders</Typography>
      <List>
        {myOrders.map(o => (
          <ListItem key={o.id}>Order {o.id}: {o.status}</ListItem>
        ))}
      </List>
    </Container>
  );
};