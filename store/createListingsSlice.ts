import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const createListing = createAsyncThunk('createListing', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:8000/api/create', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue('Error in creating car listings ' + error.message);
  }
});

const createListingsSlice = createSlice({
  name: 'createListing',
  initialState: {
    userId: null,
    userDetails: [],
    isLoadingCreateList: false,
    errorInlistings: null,
  },
  extraReducers: builder => {
    builder
      .addCase(createListing.pending, state => {
        state.isLoadingCreateList = true;
      })
      .addCase(createListing.fulfilled, (state, action) => {
        state.isLoadingCreateList = false;
        state.userDetails.push(action.payload);
      })
      .addCase(createListing.rejected, (state, action) => {
        state.isLoadingCreateList = false;
        state.errorInlistings = action.error;
      });
  },
});

export const createListingsReducer = createListingsSlice.reducer; 