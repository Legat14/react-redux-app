import React from 'react';
import { IResponse } from 'types';

class SearchTool extends React.Component<
  {
    getPhotos: (response: IResponse) => void;
    setIsLoaded: (value: boolean) => void;
  },
  { request: string }
> {
  requestEndpoint: string;
  requestMethod: string;
  apiKey: string;
  format: string;

  constructor(props: {
    getPhotos: (response: IResponse) => void;
    setIsLoaded: (value: boolean) => void;
  }) {
    super(props);
    this.requestEndpoint = 'https://www.flickr.com/services/rest/';
    this.requestMethod = 'flickr.photos.search';
    this.apiKey = '92c3ed46142b2191fc2baa90c9cc54b4'; // TODO: Заменить хардкод на переменную энвайромента
    this.format = 'json&nojsoncallback=1';
    this.getValue = this.getValue.bind(this);
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
    const searchInput = localStorage.getItem('searchInput');
    if (searchInput) {
      this.state = {
        request: searchInput,
      };
      this.setValue(searchInput as string);
    } else {
      this.state = {
        request: '',
      };
    }
  }

  inputRef: React.RefObject<HTMLInputElement> = React.createRef();

  getValue(): string | null {
    const input = this.inputRef.current;
    let searchInput = null;
    if (input) {
      searchInput = input.value;
    }
    return searchInput;
  }

  setValue(searchValue: string): void {
    const input = this.inputRef.current;
    if (input) {
      input.value = searchValue;
    }
  }

  componentWillUnmount(): void {
    const searchInput = this.getValue();
    if (searchInput || searchInput === '') {
      localStorage.setItem('searchInput', searchInput);
    }
  }

  async search(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    this.props.setIsLoaded(false);
    const request = this.state.request;
    const requestArr = request.split(' ');
    const trimmedRequest = requestArr.map((element): string => {
      return element.trim();
    });
    const processedRequest = trimmedRequest.join('+');
    const requestUrl = `${this.requestEndpoint}?method=${this.requestMethod}&api_key=${this.apiKey}&text=${processedRequest}&format=${this.format}`;
    const response = await fetch(requestUrl);
    const responseObj = await response.json();
    this.props.setIsLoaded(true);
    this.props.getPhotos(responseObj);
    try {
      if (await responseObj.stat !== 'ok') {
        throw new Error('Something went wrong!');
      }
    } catch (error) {
      console.error(error);
    }
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target) {
      const value = event.target.value;
      this.setState({
        request: value,
      });
    }
  }

  render(): JSX.Element {
    return (
      <form className="search-tool" onSubmit={this.search}>
        <input
          className="input-search"
          type="search"
          placeholder="Enter request here"
          value={this.state.request}
          onChange={this.handleChange}
          ref={this.inputRef as React.RefObject<HTMLInputElement>}
        ></input>
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default SearchTool;
