import { configureStore } from '@reduxjs/toolkit'
import accountCardReducer from './slices/accountCardSlice';

const store = configureStore({
  reducer: {
    accountCard: accountCardReducer,
  },
});

export default store;
