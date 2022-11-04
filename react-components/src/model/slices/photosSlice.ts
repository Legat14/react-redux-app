import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { IPhotosState } from 'types';

export const fetchPhotosThunk = createAsyncThunk(
  'photos/fetch-photos',
  async (requestUrl: string): Promise<Response> => {
    const response = await fetch(requestUrl);
    const responseObj = await response.json();
    return responseObj;
  }
)

const initialState = {
  response: {},
  isLoading: false,
  error: '',
} as IPhotosState;

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    renderPhotoCard: (state: IPhotosState, action: PayloadAction <IPhotosState>) => {
      return { ...state, response: action.payload.response };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPhotosThunk.fulfilled, (
      state: IPhotosState,
      action): void => {
        state.isLoading = false;
      state.response = action.payload;
    });
    builder.addCase(fetchPhotosThunk.rejected, (state: IPhotosState) => {
      state.isLoading = false;
      state.error = 'Request was rejected!';
    });
    builder.addCase(fetchPhotosThunk.pending, (state: IPhotosState) => {
      state.isLoading = true;
    });
  },
});

export const { renderPhotoCard } = photosSlice.actions;

export default photosSlice.reducer;
