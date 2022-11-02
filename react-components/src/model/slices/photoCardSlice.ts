import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPhotoCardDispatch, IPhotoCardState, IResponse, sortOptions } from 'types';

const initialState: IPhotoCardState = {
  responseObj: {},
  inputSort: sortOptions.None,
  inputPhotosPerPage: 5,
  inputPageNumber: 1,
  lastPage: 800,
}

export const photoCardSlice = createSlice({
  name: 'photoCard',
  initialState,
  reducers: {
    renderPhotoCard: (state: IPhotoCardState, action: PayloadAction <IPhotoCardDispatch>) => {
      return { ...state, responseObj: action.payload.responseObj };
    },
    saveSortOption: (state: IPhotoCardState, action: PayloadAction <IPhotoCardDispatch>) => {
      return { ...state, inputSort: action.payload.inputSort };
    },
    savePhotoPerPage: (state: IPhotoCardState, action: PayloadAction <IPhotoCardDispatch>) => {
      return { ...state, inputPhotosPerPage: action.payload.inputPhotosPerPage };
    },
    savePageNumber: (state: IPhotoCardState, action: PayloadAction <IPhotoCardDispatch>) => {
      return { ...state, inputPageNumber: action.payload.inputPageNumber };
    },
    saveLastPage: (state: IPhotoCardState, action: PayloadAction <IPhotoCardDispatch>) => {
      return { ...state, lastPage: action.payload.lastPage };
    },
  },
});

export const { renderPhotoCard, saveSortOption, savePhotoPerPage, savePageNumber, saveLastPage } = photoCardSlice.actions;

export default photoCardSlice.reducer
