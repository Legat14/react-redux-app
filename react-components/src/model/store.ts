import { configureStore } from '@reduxjs/toolkit'
import accountCardReducer from './slices/accountCardSlice';
import photoCardReducer from './slices/photoCardSlice';

const store = configureStore({
  reducer: {
    accountCard: accountCardReducer,
    photoCard: photoCardReducer,
  },
});

export default store;
