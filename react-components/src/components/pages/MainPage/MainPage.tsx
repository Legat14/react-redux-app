import React, { useState } from 'react';
import SearchResult from './components/SearchResult';
import SearchTool from './components/SearchTool';
import ModalWindowOverlay from './components/ModalWindowOverlay';
import ModalWindow from './components/ModalWindow';

function MainPage(): JSX.Element {
  const [modalContent, setModalContent] = useState({});
  const [isOpened, setIsOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section
      className="main-page__section"
      onClick={() => {
        setIsOpened(false);
      }}
    >
      <ModalWindowOverlay isOpened={isOpened} />
      <ModalWindow modalContent={modalContent} setIsOpened={setIsOpened} isOpened={isOpened} />
      <div className="main-page__bar">
        <h2>Main page</h2>
        <SearchTool setIsLoading={setIsLoading} />
      </div>
      {isLoading ? (
        <div className="main-page__loading-screen">
          <img src="./assets/gif/loading-screen.gif" alt="loading..." />
        </div>
      ) : (
        <SearchResult setModalContent={setModalContent} setIsOpened={setIsOpened} />
      )}
    </section>
  );
}

export default MainPage;
