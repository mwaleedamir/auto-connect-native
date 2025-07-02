import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './addToCartBtnSlice';
import savedReducer from './savebuttonSlice';
import { ownerDetailsReducer, userDetailsReducer } from './userSignupSlice';
import { ownerAuthReducer, userAuthReducer } from './userLoginSlice';
import { createListingsReducer } from './createListingsSlice';

export const store = configureStore({
  reducer: {
    addToCart: cartReducer,
    saved: savedReducer,
    userDetails: userDetailsReducer,
    ownerDetails: ownerDetailsReducer,
    userAuth: userAuthReducer,
    ownerAuth: ownerAuthReducer,
    createListing: createListingsReducer,
  },
}); 