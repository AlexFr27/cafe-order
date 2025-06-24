// src/features/basket/basketSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import type { BasketItem } from './types';

interface AddPayload {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

const basketSlice = createSlice({
  name: 'basket',
  initialState: [] as BasketItem[],
  reducers: {
    addToBasket: (state, action: PayloadAction<AddPayload>) => {
      const found = state.find(item => item.id === action.payload.id);
      if (found) {
        found.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromBasket: (state, action: PayloadAction<string>) => {
      return state.filter(item => item.id !== action.payload);
    },
    clearLocalBasket: () => []
  }
});

export const { addToBasket, removeFromBasket, clearLocalBasket } = basketSlice.actions;
export default basketSlice.reducer;

// Селекторы:
export const selectBasketItems = (state: RootState) => state.basket;
export const selectTotalCount = (state: RootState) =>
  state.basket.reduce((sum, item) => sum + item.quantity, 0);
export const selectTotalPrice = (state: RootState) =>
  state.basket.reduce((sum, item) => sum + item.price * item.quantity, 0);
