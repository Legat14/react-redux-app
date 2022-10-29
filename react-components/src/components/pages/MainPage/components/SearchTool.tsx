import React, { useState, useEffect, useContext } from 'react';
import Context from 'model/Context';
import { useForm } from 'react-hook-form';
import { sortOptions } from 'types';

function SearchTool(props: {
  setIsLoading: (value: boolean) => void;
}): JSX.Element {
  const dispatch = useContext(Context).dispatches.photoCardDispatch;
  const [request, setRequest] = useState('');
  const requestEndpoint = 'https://www.flickr.com/services/rest/';
  const requestMethod = 'flickr.photos.search';
  const apiKey = '92c3ed46142b2191fc2baa90c9cc54b4'; // TODO: Заменить хардкод на переменную энвайромента
  const format = 'json&nojsoncallback=1';
  const { register, handleSubmit, setValue, watch } = useForm<{ inputSearch: string, inputSort: sortOptions }>();

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
    inputSearch: string,
    inputSort: sortOptions,
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

    const requestUrl = `${requestEndpoint}?method=${requestMethod}&api_key=${apiKey}&text=${processedRequest}${sortRequest}&format=${format}`;
    console.log(requestUrl);
    const response = await fetch(requestUrl);
    const responseObj = await response.json();
    props.setIsLoading(false);
    dispatch({type: 'render-photo-cards', responseObj})

    try {
      if ((await responseObj.stat) !== 'ok') {
        throw new Error('Something went wrong!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget) {
      const value = event.currentTarget.value;
      setRequest(value);
    }
  };

  return (
    <form className="search-tool" onSubmit={handleSubmit(search)}>
      <input
        className="input-search"
        type="search"
        placeholder="Enter request here"
        value={request}
        {...register('inputSearch', { required: true, onChange: (event) => handleChange(event) })}
      ></input>
      <p>Sort by:</p>
      <select
        className="input-sort"
        {...register('inputSort', { required: true })}
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
      <button className="search-btn" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchTool;
