import React, { useState, useRef, useEffect } from 'react';
import { IResponse } from 'types';

function SearchTool(props: {
  setResponse: (response: IResponse) => void,
  setIsLoaded: (value: boolean) => void,
}): JSX.Element {

  const [request, setRequest] = useState('');
  const requestEndpoint = 'https://www.flickr.com/services/rest/';
  const requestMethod = 'flickr.photos.search';
  const apiKey = '92c3ed46142b2191fc2baa90c9cc54b4'; // TODO: Заменить хардкод на переменную энвайромента
  const format = 'json&nojsoncallback=1';
  const searchInput = useRef(null);

  const getValue = (): string | null => {
    console.log(searchInput.current);
    let inputValue = '';
    if (searchInput.current) {
      inputValue = (searchInput.current as HTMLInputElement).value;
    }
    return inputValue;
  }

  const setValue = (currentInput: React.RefObject<HTMLInputElement>, inputValue: string): void => {
    if (currentInput.current) {
      currentInput.current.value = inputValue;
    }
  }

  useEffect((): () => void => {
    console.log('load from LS');
    const localStorageValue = localStorage.getItem('searchInput');
    if (localStorageValue || localStorageValue === '') {
      setRequest(localStorageValue);
      setValue(searchInput, localStorageValue)
    }
  
    return ():void => {
      console.log('save to LS');
      const inputValue = getValue();
      console.log(searchInput);
      if (inputValue) {
        localStorage.setItem('searchInput', inputValue);
      }
    }
  }, [request]);

  const search = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    props.setIsLoaded(false);
    const requestArr = request.split(' ');
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
      if (await responseObj.stat !== 'ok') {
        throw new Error('Something went wrong!');
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget) {
      const value = event.currentTarget.value;
      setRequest(value);
    }
  }

  // TODO: Использовать React Hook Form
  return (
    <form className="search-tool" onSubmit={search}>
      <input
        className="input-search"
        type="search"
        placeholder="Enter request here"
        value={request}
        onChange={handleChange}
        ref={searchInput}
      ></input>
      <button className="search-btn" type="submit">
        Search
      </button>
    </form>
  );
}

// class SearchTool extends React.Component<
//   {
//     setResponse: (response: IResponse) => void;
//     setIsLoaded: (value: boolean) => void;
//   },
//   { request: string }
// > {
//   requestEndpoint: string;
//   requestMethod: string;
//   apiKey: string;
//   format: string;

//   constructor(props: {
//     setResponse: (response: IResponse) => void;
//     setIsLoaded: (value: boolean) => void;
//   }) {
//     super(props);
//     this.requestEndpoint = 'https://www.flickr.com/services/rest/';
//     this.requestMethod = 'flickr.photos.search';
//     this.apiKey = '92c3ed46142b2191fc2baa90c9cc54b4'; // TODO: Заменить хардкод на переменную энвайромента
//     this.format = 'json&nojsoncallback=1';
//     this.getValue = this.getValue.bind(this);
//     this.search = this.search.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {
//       request: '',
//     };
//   }

//   inputRef: React.RefObject<HTMLInputElement> = React.createRef();

//   getValue(): string | null {
//     const input = this.inputRef.current;
//     let searchInput = null;
//     if (input) {
//       searchInput = input.value;
//     }
//     return searchInput;
//   }

//   setValue(searchValue: string): void {
//     const input = this.inputRef.current;
//     if (input) {
//       input.value = searchValue;
//     }
//   }

//   componentDidMount(): void {
//     const searchInput = localStorage.getItem('searchInput');
//     if (searchInput || searchInput === '') {
//       this.setState({
//         request: searchInput,
//       });
//       this.setValue(searchInput);
//     }
//   }

//   componentWillUnmount(): void {
//     const searchInput = this.getValue();
//     if (searchInput || searchInput === '') {
//       localStorage.setItem('searchInput', searchInput);
//     }
//   }

//   async search(event: React.FormEvent<HTMLFormElement>): Promise<void> {
//     event.preventDefault();
//     this.props.setIsLoaded(false);
//     const request = this.state.request;
//     const requestArr = request.split(' ');
//     const trimmedRequest = requestArr.map((element): string => {
//       return element.trim();
//     });
//     const processedRequest = trimmedRequest.join('+');
//     const requestUrl = `${this.requestEndpoint}?method=${this.requestMethod}&api_key=${this.apiKey}&text=${processedRequest}&format=${this.format}`;
//     const response = await fetch(requestUrl);
//     const responseObj = await response.json();
//     this.props.setIsLoaded(true);
//     this.props.setResponse(responseObj);
//     try {
//       if (await responseObj.stat !== 'ok') {
//         throw new Error('Something went wrong!');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   handleChange(event: React.ChangeEvent<HTMLInputElement>) {
//     if (event.target) {
//       const value = event.target.value;
//       this.setState({
//         request: value,
//       });
//     }
//   }

//   render(): JSX.Element {
//     return (
//       <form className="search-tool" onSubmit={this.search}>
//         <input
//           className="input-search"
//           type="search"
//           placeholder="Enter request here"
//           value={this.state.request}
//           onChange={this.handleChange}
//           ref={this.inputRef as React.RefObject<HTMLInputElement>}
//         ></input>
//         <button className="search-btn" type="submit">
//           Search
//         </button>
//       </form>
//     );
//   }
// }

export default SearchTool;
