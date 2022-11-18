import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDetailContent } from 'types';

const initialState: IDetailContent = {
  src: 'none',
  id: 'none',
  owner: 'none',
  server: 'none',
  title: 'none',
};

export const detailSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    saveDetailContent: (state, action: PayloadAction<{ newDetailState: IDetailContent }>) => {
      state.id = action.payload.newDetailState.id;
      state.owner = action.payload.newDetailState.owner;
      state.server = action.payload.newDetailState.server;
      state.src = action.payload.newDetailState.src;
      state.title = action.payload.newDetailState.title;
    },
  },
});

export const { saveDetailContent } = detailSlice.actions;

export default detailSlice.reducer;
