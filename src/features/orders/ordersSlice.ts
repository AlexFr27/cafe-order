import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Order } from './types';

const ordersSlice = createSlice({
  name: 'orders',
  initialState: [] as Order[],
  reducers: {
    setOrders: (state, action: PayloadAction<Order[]>) => action.payload
  }
});
export const { setOrders } = ordersSlice.actions;
export default ordersSlice.reducer;