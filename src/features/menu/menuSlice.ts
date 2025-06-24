import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MenuItem } from './types';

interface MenuState {
  items: MenuItem[];
}

const initialState: MenuState = { items: [] };

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenu: (state, action: PayloadAction<MenuItem[]>) => {
      state.items = action.payload;
    }
  }
});

export const { setMenu } = menuSlice.actions;
export default menuSlice.reducer;