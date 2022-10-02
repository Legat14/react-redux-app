import React, { LegacyRef } from 'react';

class SearchTool extends React.Component {
  constructor() {
    super({}); // TODO: Из-за этого TS выдает ошибку. Нужно разобраться с типизацией.
    this.getValue = this.getValue.bind(this);
    this.search = this.search.bind(this);
  }

  inputRef: React.RefObject<HTMLInputElement> = React.createRef();

  getValue(): string | null {
    const input = this.inputRef.current;
    let searchInput = null;
    if (input) {
      console.log(input.value);
      searchInput = input.value
    }
    return searchInput;
  }

  setValue(searchValue: string): void{
    const input = this.inputRef.current;
    if (input) {
      input.value = searchValue;
    }
  }

  componentDidMount(): void {
    const searchInput = localStorage.getItem('searchInput');
    console.log('Did mount: ', searchInput);
    if (searchInput || searchInput === '') {
      this.setValue(searchInput);
    }
  }

  componentWillUnmount(): void {
    const searchInput = this.getValue();
    console.log('Will unmount: ', searchInput);
    if (searchInput || searchInput === '') {
      localStorage.setItem('searchInput', searchInput);
    }
  }

  search(): void { // Это метод-заглушка. Познее нужно его расширить до полноценного поиска.
    const input = this.inputRef.current
    if (input) {
      console.log('Search: ', input.value);
    }
  }

  render(): React.ReactNode {
    return (
      <form className='search-tool'>
        <input className="input-search" type='search' placeholder='Enter request here' ref={this.inputRef as LegacyRef<HTMLInputElement>}></input>
        <button className="search-btn" type='button' onClick={this.search}>Search</button>
      </form>
    );
  }
}

export default SearchTool;
