import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AppDispatch, IResponse, RootState, sortOptions } from 'types';
import { useDispatch, useSelector } from 'react-redux';
import { saveLastPage, savePageNumber, savePhotoPerPage, saveSortOption } from 'model/slices/photoCardSlice';
import { fetchPhotosThunk, renderPhotoCard } from 'model/slices/photosSlice';
import store from 'model/store';
import isEmpty from 'helpers/isEmpty';

function SearchTool(): JSX.Element {
  const inputSortFromState = useSelector((state: RootState) => state.photoCard.inputSort);
  const inputPhotosPerPageFromState = useSelector((state: RootState) => state.photoCard.inputPhotosPerPage);
  const inputPageNumberFromState = useSelector((state: RootState) => state.photoCard.inputPageNumber);
  let lastPage = useSelector((state: RootState) => state.photoCard.lastPage);
  const photosPerResponse = 4000;
  const dispatch = useDispatch<AppDispatch>();
  const [request, setRequest] = useState('');
  const requestEndpoint = 'https://www.flickr.com/services/rest/';
  const requestMethod = 'flickr.photos.search';
  const apiKey = '92c3ed46142b2191fc2baa90c9cc54b4'; // TODO: Заменить хардкод на переменную энвайромента
  const format = 'json&nojsoncallback=1';
  const { register, handleSubmit, setValue, watch } = useForm<{
    inputSearch: string;
    inputSort: sortOptions;
    inputPhotosPerPage: string;
    inputPageNumber: string;
  }>();

  useEffect((): void => {
    setValue('inputSort', inputSortFromState);
    setValue('inputPhotosPerPage', inputPhotosPerPageFromState.toString());
    setValue('inputPageNumber', inputPageNumberFromState.toString());
  }, [inputPageNumberFromState, inputPhotosPerPageFromState, inputSortFromState, setValue]);

  useEffect((): (() => void) => {
    const localStorageValue = localStorage.getItem('searchInput');
    if (localStorageValue || localStorageValue === '') {
      setRequest(localStorageValue);
      setValue('inputSearch', localStorageValue);
    }

    return (): void => {
      localStorage.setItem('searchInput', watch('inputSearch'));
    };
  }, [setRequest, setValue, watch]);

  const search = async (data: {
    inputSearch: string;
    inputSort: sortOptions;
    inputPhotosPerPage: string;
    inputPageNumber: string;
  }): Promise<void> => {
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
    await dispatch(fetchPhotosThunk(requestUrl));
    const state = store.getState();
    const responseObj = state.photos.response as IResponse & Response;
    dispatch(renderPhotoCard({
      ...state.photos,
      response: responseObj
    }));

    try {
      if (!state.photos.error || isEmpty(responseObj)) {
        if ((responseObj.stat) === 'ok') {
        } else {
          throw new Error('Bad response!');
        }
      } else {
        throw new Error(state.photos.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.currentTarget) {
      const value = event.currentTarget.value;
      setRequest(value);
    }
  };

  const handleSortInputChange = (): void => {
    // TODO: Сделать чтобы при изменении сортировки сразу происходил новый поиск
    dispatch(saveSortOption({
      inputSort: watch('inputSort'),
      inputPhotosPerPage: inputPhotosPerPageFromState,
      inputPageNumber: inputPageNumberFromState,
      lastPage: lastPage,
    }));
  };

  const handlePhotosPerPageInputChange = (): void => {
    // TODO: Сделать чтобы при изменении количества сразу происходил новый поиск
    dispatch(savePhotoPerPage({
      inputSort: inputSortFromState,
      inputPhotosPerPage: +watch('inputPhotosPerPage'),
      inputPageNumber: inputPageNumberFromState,
      lastPage: lastPage,
    }));
    lastPage = calculateTotalPage();
    dispatch(saveLastPage({
      inputSort: inputSortFromState,
      inputPhotosPerPage: inputPhotosPerPageFromState,
      inputPageNumber: inputPageNumberFromState,
      lastPage: lastPage,
    }));
  };

  const calculateTotalPage = (): number => {
    return Math.ceil(photosPerResponse / +watch('inputPhotosPerPage'));
  };

  const handlePageNumberInputChange = (): void => {
    // TODO: Сделать чтобы при изменении страницы сразу происходил новый поиск
    dispatch(savePageNumber({
      inputSort: inputSortFromState,
      inputPhotosPerPage: inputPhotosPerPageFromState,
      inputPageNumber: +watch('inputPageNumber'),
      lastPage: lastPage,
    }));
  };

  return (
    <form className="search-tool" onSubmit={handleSubmit(search)}>
      <input
        className="input-search"
        type="search"
        placeholder="Enter request here"
        value={request}
        {...register('inputSearch', {
          required: true,
          onChange: (event) => handleSearchInputChange(event),
        })}
        data-testid="search-input"
      ></input>
      <p>Sort by:</p>
      <select
        className="input-sort"
        {...register('inputSort', { required: true, onChange: handleSortInputChange })}
        data-testid="input-sort"
      >
        <option value={sortOptions.None}>None</option>
        <option value={sortOptions.DatePostedAsc}>Date Posted ⇩</option>
        <option value={sortOptions.DatePostedDesc}>Date Posted ⇧</option>
        <option value={sortOptions.DateTakenAsc}>Date Taken ⇩</option>
        <option value={sortOptions.DateTakendDesc}>Date Taken ⇧</option>
        <option value={sortOptions.InterestingnessAsc}>Interestingness ⇩</option>
        <option value={sortOptions.InterestingnessDesc}>Interestingness ⇧</option>
        <option value={sortOptions.Relevance}>Relevance</option>
      </select>
      <p>Photos for page:</p>
      <input
        className="input-photos-per-page"
        type="number"
        min={'5'}
        max={'50'}
        {...register('inputPhotosPerPage', {
          required: true,
          min: 5,
          max: 50,
          onChange: handlePhotosPerPageInputChange,
        })}
        data-testid="input-photos-per-page"
      />
      <p>Page number:</p>
      <input
        className="input-page-number"
        type="number"
        min={'1'}
        max={lastPage}
        {...register('inputPageNumber', {
          required: true,
          min: 1,
          max: lastPage,
          onChange: handlePageNumberInputChange,
        })}
        data-testid="input-page-number"
      />
      <p>Total pages: {lastPage}</p>
      <button className="search-btn" type="submit" data-testid="search-btn">
        Search
      </button>
    </form>
  );
}

export default SearchTool;
