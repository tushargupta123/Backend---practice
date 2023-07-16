import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {  loginApi, signupApi } from './userAPI';

const initialState = {
  token: '',
  status: 'idle',
};

export const signupSlice = createAsyncThunk(
  'user/signupSlice',
  async (data) => {
    const response = await signupApi(data);
    return response.data;
  }
);
export const loginSlice = createAsyncThunk(
  'user/loginSlice',
  async (data) => {
    const response = await loginApi(data);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signupSlice.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signupSlice.fulfilled, (state, action) => {
        state.status = 'idle';
        state.token = action.payload;
        localStorage.setItem('token', state.token);
      })
      .addCase(loginSlice.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginSlice.fulfilled, (state, action) => {
        state.status = 'idle';
        state.token = action.payload;
        localStorage.setItem('token', state.token);
      })
  },
});

export default userSlice.reducer;
