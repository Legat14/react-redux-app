import React, { LegacyRef } from 'react';

class SearchTool extends React.Component {
  constructor(props: {}) {
    super(props);
    this.getValue = this.getValue.bind(this);
    this.search = this.search.bind(this);
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

  search(): void {
    // Это метод-заглушка. Познее нужно его расширить до полноценного поиска.
    const input = this.inputRef.current;
    if (input) {
      console.log('Search: ', input.value);
    }
  }

  render(): JSX.Element {
    return (
      <form className="search-tool">
        <input
          className="input-search"
          type="search"
          placeholder="Enter request here"
          ref={this.inputRef as LegacyRef<HTMLInputElement>}
        ></input>
        <button className="search-btn" type="button" onClick={this.search}>
          Search
        </button>
      </form>
    );
  }
}

export default SearchTool;
