import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Credentials, UserState } from './types';

const initialState: UserState = { token: null, roles: [] };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ token: string; roles: string[] }>) => {
      state.token = action.payload.token;
      state.roles = action.payload.roles;
    },
    logout: () => initialState
  }
});
export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;