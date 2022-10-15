import ModalWindow from 'components/ModalWindow';
import SearchResult from 'components/SearchResult';
import SearchTool from 'components/SearchTool';
import React from 'react';
import { IModalContent, IPhoto, IResponse } from 'types';

class MainPage extends React.Component<{}, {
  response: IResponse | {},
  modalContent: IModalContent | {}
}> {
  searchTool: React.RefObject<HTMLInputElement>;

  constructor(props: {}) {
    super(props);
    this.getPhotos = this.getPhotos.bind(this);
    this.getModalContent = this.getModalContent.bind(this);
    this.searchTool = React.createRef();
    this.state = {
      response: {},
      modalContent: {}
    }
  }

  getPhotos = (response: IResponse): void => {
    this.setState((prev) => {
      return {
        response: response,
        modalContent: prev.modalContent,
      }
    });
  }

  getModalContent = (photo: IPhoto, src: string): void => {
    console.log('Modal Content: ', photo, src);
    this.setState((prev) => {
      return {
        response: prev.response,
        modalContent: {
          src: src,
          id: photo.id,
          owner: photo.owner,
          server: photo.server,
          title: photo.title,
        }
      }
    });
  }

  render(): JSX.Element {
    return (
      <section className="main-page__section">
        <div className="main-page__bar">
          <h2>Main page</h2>
          <SearchTool getPhotos={this.getPhotos} />
        </div>
        <ModalWindow
          modalContent={(this.state as {
            response: IResponse | {},
            modalContent: IModalContent | {}
          }).modalContent}
        />
        <SearchResult
          response={(this.state as {
            response: IResponse | {},
            modalContent: IModalContent | {}
          }).response}
          getModalContent={this.getModalContent}
        />
      </section>
    );
  }
}

export default MainPage;
