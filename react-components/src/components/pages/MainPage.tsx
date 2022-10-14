import SearchResult from 'components/SearchResult';
import SearchTool from 'components/SearchTool';
import React from 'react';
import { IResponse } from 'types';

class MainPage extends React.Component<{}, IResponse | {}> {
  searchTool: React.RefObject<HTMLInputElement>;

  constructor(props: {}) {
    super(props);
    this.getPhotos = this.getPhotos.bind(this);
    this.searchTool = React.createRef();
    this.state = {
      response: {}, // TODO: узнать, как получить стейт сюда вместо дочернего элемента (колбеками)
    }
  }

  getPhotos = (response: IResponse): void => {
    this.setState({
      response: response,
    });
  }

  render(): JSX.Element {
    return (
      <section className="main-page__section">
        <div className="main-page__bar">
          <h2>Main page</h2>
          <SearchTool getPhotos={this.getPhotos} />
        </div>
        <SearchResult response={(this.state as {response: IResponse}).response} />
      </section>
    );
  }
}

export default MainPage;
