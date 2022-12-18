import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'types';
import SearchResult from './components/SearchResult';
import SearchTool from './components/SearchTool';

function MainPage(): JSX.Element {
  const isLoading = useSelector((state: RootState): boolean => state.photos.isLoading);

  return (
    <section className="main-page__section">
      <div className="main-page__bar">
        <h2>Main page</h2>
        <SearchTool />
      </div>
      {isLoading ? (
        <div className="main-page__loading-screen">
          <img src="./assets/gif/loading-screen.gif" alt="loading..." />
        </div>
      ) : (
        <SearchResult />
      )}
    </section>
  );
}

export default MainPage;
