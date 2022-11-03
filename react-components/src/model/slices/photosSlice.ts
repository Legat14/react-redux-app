import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { sortOptions } from 'types';

const fetchPhotosThunk = createAsyncThunk(
  'fetch-photos',
  async (data: {
    inputSearch: string;
    inputSort: sortOptions;
    inputPhotosPerPage: string;
    inputPageNumber: string;
  }, thungAPI): Promise<Response> => {
  
    const requestEndpoint = 'https://www.flickr.com/services/rest/';
    const requestMethod = 'flickr.photos.search';
    const apiKey = '92c3ed46142b2191fc2baa90c9cc54b4';
    const format = 'json&nojsoncallback=1';
  
    const requestArr = data.inputSearch.split(' ');
    const trimmedRequest = requestArr.map((element): string => {
      return element.trim();
    });
    const processedRequest = trimmedRequest.join('+');

    let sortRequest = '';
    if (data.inputSort !== sortOptions.None) {
      sortRequest = `&sort=${data.inputSort}`;
    }

    const requestUrl = `${requestEndpoint}?method=${requestMethod}&api_key=${apiKey}&text=${processedRequest}${sortRequest}&per_page=${data.inputPhotosPerPage}&page=${data.inputPageNumber}&format=${format}`;

    const response = await fetch(requestUrl);

    return response;
  }
)

interface PhotosState {
  response: Response;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState = {
  response: {},
  loading: 'idle',
} as PhotosState;

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPhotosThunk.fulfilled, (state: PhotosState, { payload }): void => {
      state.response = payload;
      state.loading = 'succeeded';
    });
    builder.addCase(fetchPhotosThunk.rejected, (state: PhotosState) => {
      console.error('Something went wrong!');
      state.loading = 'failed';
    });
  },
});

export const { addAccountCard, deleteAllAccountCards } = accountCardSlice.actions;

export default photosSlice.reducer
