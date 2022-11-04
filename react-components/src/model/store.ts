import { configureStore } from '@reduxjs/toolkit'
import accountCardReducer from './slices/accountCardSlice';
import detailReducer from './slices/detailSlice';
import photoCardReducer from './slices/photoCardSlice';
import photosReducer from './slices/photosSlice';

const store = configureStore({
  reducer: {
    accountCard: accountCardReducer,
    photoCard: photoCardReducer,
    details: detailReducer,
    photos: photosReducer,
  },
});

export default store;
