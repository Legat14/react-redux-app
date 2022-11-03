import { configureStore } from '@reduxjs/toolkit'
import accountCardReducer from './slices/accountCardSlice';
import detailReducer from './slices/detailSlice';
import photoCardReducer from './slices/photoCardSlice';

const store = configureStore({
  reducer: {
    accountCard: accountCardReducer,
    photoCard: photoCardReducer,
    details: detailReducer,
  },
});

export default store;
