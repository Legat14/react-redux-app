import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { IResponse, sortOptions } from 'types';

export const fetchPhotosThunk = createAsyncThunk(
  'photos/fetch-photos',
  async (requestUrl: string, thungAPI): Promise<Response> => {
    const response = await fetch(requestUrl);
    const responseObj = await response.json();
    return responseObj;
  }
)

interface PhotosState {
  response: Response | {};
  isLoading: boolean;
  error: string;
  
}

const initialState = {
  response: {},
  isLoading: false,
  error: '',
} as PhotosState;

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPhotosThunk.fulfilled, (
      state: PhotosState,
      action): void => {
        state.isLoading = false;
      state.response = action.payload;
      console.log(state.response);
    });
    builder.addCase(fetchPhotosThunk.rejected, (state: PhotosState) => {
      console.error('Something went wrong!');
      state.isLoading = false;
      console.log(state.error);
    });
    builder.addCase(fetchPhotosThunk.pending, (state: PhotosState) => {
      state.isLoading = true;
      console.log(state);
    });
  },
});

export const fetchPhotos = photosSlice.actions;

export default photosSlice.reducer;
