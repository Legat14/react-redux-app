import ModalWindow from 'components/ModalWindow';
import ModalWindowOverlay from 'components/ModalWindowOverlay';
import SearchResult from 'components/SearchResult';
import SearchTool from 'components/SearchTool';
import React from 'react';
import { IModalContent, IPhoto, IResponse } from 'types';

class MainPage extends React.Component<{}, {
  response: IResponse | {},
  modalContent: IModalContent | {}
}> {
  overlay: React.RefObject<ModalWindowOverlay>;
  modal: React.RefObject<ModalWindow>;

  constructor(props: {}) {
    super(props);
    this.getPhotos = this.getPhotos.bind(this);
    this.getModalContent = this.getModalContent.bind(this);
    this.openModalWindow = this.openModalWindow.bind(this);
    this.closeModalWindow = this.closeModalWindow.bind(this);
    this.overlay = React.createRef();
    this.modal = React.createRef();
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
    this.openModalWindow();
  }
  
  openModalWindow() {
    if (this.overlay.current) {
      this.overlay.current.showOverlay();
    }
    if (this.modal.current) {
      this.modal.current.showModel();
    }
  }

  closeModalWindow() {
    if (this.overlay.current) {
      this.overlay.current.hideOverlay();
    }
    if (this.modal.current) {
      this.modal.current.hideModel();
    }
  }

  render(): JSX.Element {
    return (
      <section className="main-page__section" onClick={this.closeModalWindow}>
        <ModalWindowOverlay ref={this.overlay} />
        <ModalWindow
          ref={this.modal}
          modalContent={(this.state as {
            response: IResponse | {},
            modalContent: IModalContent | {}
          }).modalContent}
        />
        <div className="main-page__bar">
          <h2>Main page</h2>
          <SearchTool getPhotos={this.getPhotos} />
        </div>
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
