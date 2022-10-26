import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { IResponse } from 'types';

function SearchTool(props: {
  setResponse: (response: IResponse) => void;
  setIsLoaded: (value: boolean) => void;
}): JSX.Element {
  const [request, setRequest] = useState('');
  const requestEndpoint = 'https://www.flickr.com/services/rest/';
  const requestMethod = 'flickr.photos.search';
  const apiKey = '92c3ed46142b2191fc2baa90c9cc54b4'; // TODO: Заменить хардкод на переменную энвайромента
  const format = 'json&nojsoncallback=1';
  const { register, handleSubmit, setValue, watch } = useForm<{ inputSearch: string }>();

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

  const search = async (data: { inputSearch: string }): Promise<void> => {
    props.setIsLoaded(false);
    const requestArr = data.inputSearch.split(' ');
    const trimmedRequest = requestArr.map((element): string => {
      return element.trim();
    });
    const processedRequest = trimmedRequest.join('+');
    const requestUrl = `${requestEndpoint}?method=${requestMethod}&api_key=${apiKey}&text=${processedRequest}&format=${format}`;
    const response = await fetch(requestUrl);
    const responseObj = await response.json();
    props.setIsLoaded(true);
    props.setResponse(responseObj);
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
      <button className="search-btn" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchTool;
