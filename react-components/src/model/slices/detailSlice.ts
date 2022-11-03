import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IDetailContent } from 'types';

const initialState: IDetailContent = {
  src: 'none',
  id: 'none',
  owner: 'none',
  server: 'none',
  title: 'none',
}

export const detailSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    saveDetailContent: (state, action: PayloadAction <{ newDetailState: IDetailContent }>) => {
      return { ...action.payload.newDetailState };
    },
  },
});

export const { saveDetailContent } = detailSlice.actions;

export default detailSlice.reducer
