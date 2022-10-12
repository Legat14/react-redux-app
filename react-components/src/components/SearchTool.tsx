import React, { FormEventHandler, ReactEventHandler } from 'react';

class SearchTool extends React.Component<{}, {request: string}> {
  requestEndpoint: string;
  requestMethod: string;
  apiKey: string;
  format: string;

  constructor(props: {}) {
    super(props);
    this.requestEndpoint = 'https://www.flickr.com/services/rest/';
    this.requestMethod = 'flickr.photos.search';
    this.apiKey = '55f3f75e00ac276da38071522de9c95a'; // TODO: Заменить хардкод на переменную энвайромента
    this.format = 'json&nojsoncallback=1';
    this.getValue = this.getValue.bind(this);
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      request: '',
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

  componentDidMount(): void {
    const searchInput = localStorage.getItem('searchInput');
    if (searchInput || searchInput === '') {
      this.setValue(searchInput);
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
    console.log('Search: ', this.state.request);
    const request = this.state.request;
    const requestArr = request.split(' ');
    const trimmedRequest = requestArr.map((element): string =>{
      return element.trim();
    });
    const processedRequest = trimmedRequest.join('+');
    const requestUrl = `${this.requestEndpoint}?method=${this.requestMethod}&api_key=${this.apiKey}&text=${processedRequest}&format=${this.format}`
    console.log(requestUrl);
    const responce = await fetch(requestUrl);
    const responseObj = await responce.json();
    console.log(responseObj);
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
          onChange = {this.handleChange}
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
