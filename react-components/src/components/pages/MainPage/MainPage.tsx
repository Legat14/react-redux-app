import SearchResult from './components/SearchResult';
import SearchTool from './components/SearchTool';
import React, { useCallback, useState } from 'react';
import ModalWindowOverlay from './components/ModalWindowOverlay';
import ModalWindow from './components/ModalWindow';

function MainPage(): JSX.Element {
  const [response, setResponse] = useState({});
  const [modalContent, setModalContent] = useState({});
  const [isOpened, setIsOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = useCallback(() => {
      setIsOpened(false);
    },
    [setIsOpened]
  );

  return (
    <section
      className="main-page__section"
      onClick={handleClick}
    >
      <ModalWindowOverlay isOpened={isOpened} />
      <ModalWindow modalContent={modalContent} setIsOpened={setIsOpened} isOpened={isOpened} />
      <div className="main-page__bar">
        <h2>Main page</h2>
        <SearchTool setResponse={setResponse} setIsLoading={setIsLoading} />
      </div>
      {isLoading ? (
        <div className="main-page__loading-screen">
          <img src="./assets/gif/loading-screen.gif" alt="loading..." />
        </div>
      ) : (
        <SearchResult
          response={response}
          setModalContent={setModalContent}
          setIsOpened={setIsOpened}
        />
      )}
    </section>
  );
}

export default MainPage;
