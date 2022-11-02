import React, { useState, useEffect, useContext } from 'react';
import Context from 'model/Context';
import { useForm } from 'react-hook-form';
import { IPhotoCardState, IResponse, RootState, sortOptions } from 'types';
import { useDispatch, useSelector } from 'react-redux';
import { renderPhotoCard, saveLastPage, savePageNumber, savePhotoPerPage, saveSortOption } from 'model/slices/photoCardSlice';

function SearchTool(props: { setIsLoading: (value: boolean) => void }): JSX.Element {
  const responseObjfromState = useSelector((state: RootState) => state.photoCard.responseObj);
  const inputSortFromState = useSelector((state: RootState) => state.photoCard.inputSort);
  const inputPhotosPerPageFromState = useSelector((state: RootState) => state.photoCard.inputPhotosPerPage);
  const inputPageNumberFromState = useSelector((state: RootState) => state.photoCard.inputPageNumber);
  let lastPage = useSelector((state: RootState) => state.photoCard.lastPage);
  // const responseObjfromState = useContext(Context).states.photoCardState.responseObj;
  // const inputSortFromState = useContext(Context).states.photoCardState.inputSort;
  // const inputPhotosPerPageFromState = useContext(Context).states.photoCardState.inputPhotosPerPage;
  // const inputPageNumberFromState = useContext(Context).states.photoCardState.inputPageNumber;
  // let lastPage = useContext(Context).states.photoCardState.lastPage;
  const photosPerResponse = 4000;
  const dispatch = useDispatch();
  // const dispatch = useContext(Context).dispatches.photoCardDispatch;
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
  }, []);

  useEffect((): (() => void) => {
    const localStorageValue = localStorage.getItem('searchInput');
    if (localStorageValue || localStorageValue === '') {
      setRequest(localStorageValue);
      setValue('inputSearch', localStorageValue);
    }

    return (): void => {
      localStorage.setItem('searchInput', watch('inputSearch'));
    };
  }, []);

  const search = async (data: {
    inputSearch: string;
    inputSort: sortOptions;
    inputPhotosPerPage: string;
    inputPageNumber: string;
  }): Promise<void> => {
    props.setIsLoading(true);
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
    const responseObj = await response.json();
    props.setIsLoading(false);
    dispatch(renderPhotoCard({
      responseObj,
      inputSort: inputSortFromState,
      inputPhotosPerPage: inputPhotosPerPageFromState,
      inputPageNumber: inputPageNumberFromState,
      lastPage: lastPage,
    }));

    try {
      if ((await responseObj.stat) === 'ok') {
        // TODO: Добавить в state, чтобы обновлялся номер на странице
      } else {
        throw new Error('Something went wrong!');
      }
    } catch (error) {}
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
      responseObj: responseObjfromState as IResponse,
      inputSort: watch('inputSort'),
      inputPhotosPerPage: inputPhotosPerPageFromState,
      inputPageNumber: inputPageNumberFromState,
      lastPage: lastPage,
    }));
  };

  const handlePhotosPerPageInputChange = (): void => {
    // TODO: Сделать чтобы при изменении количества сразу происходил новый поиск
    dispatch(savePhotoPerPage({
      responseObj: responseObjfromState as IResponse,
      inputSort: inputSortFromState,
      inputPhotosPerPage: +watch('inputPhotosPerPage'),
      inputPageNumber: inputPageNumberFromState,
      lastPage: lastPage,
    }));
    lastPage = calculateTotalPage();
    dispatch(saveLastPage({
      responseObj: responseObjfromState as IResponse,
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
      responseObj: responseObjfromState as IResponse,
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
