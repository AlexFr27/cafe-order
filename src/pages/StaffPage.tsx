import React from 'react';
import { useGetOrdersQuery } from '../api/ordersApi';
import { Container, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material';

export const StaffPage: React.FC = () => {
  const { data: orders = [] } = useGetOrdersQuery();
  return (
    <Container>
      <Typography variant="h5">All Orders (Staff)</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order ID</TableCell>
            <TableCell>Table</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map(o => (
            <TableRow key={o.id}>
              <TableCell>{o.id}</TableCell>
              <TableCell>{o.tableId}</TableCell>
              <TableCell>{o.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};