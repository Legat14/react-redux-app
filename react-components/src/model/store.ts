import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
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

export const AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch;

export default store;
