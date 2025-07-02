import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { post } from '../services/apiEndpoint';

export const userLogin = createAsyncThunk('userAuth/userLogin', async (data, { rejectWithValue }) => {
  try {
    const response = await post('/auth/user/login', data);
    const result = response.data;
    return result;
  } catch (error) {
    return rejectWithValue('Network or unexpected error occurred');
  }
});

const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState: {
    user: null,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(userLogin.pending, state => {
        state.isLoading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export const userAuthReducer = userAuthSlice.reducer;

export const ownerLogin = createAsyncThunk('ownerAuth/ownerLogin', async (data, { rejectWithValue }) => {
  try {
    const response = await post('/auth/owner/login', data);
    const result = response.data;
    return result;
  } catch (error) {
    return rejectWithValue('Network or unexpected error occurred');
  }
});

const ownerAuthSlice = createSlice({
  name: 'ownerAuth',
  initialState: {
    owner: null,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(ownerLogin.pending, state => {
        state.isLoading = true;
      })
      .addCase(ownerLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.owner = action.payload;
      })
      .addCase(ownerLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export const ownerAuthReducer = ownerAuthSlice.reducer; 