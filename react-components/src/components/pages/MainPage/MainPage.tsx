import React, { useState } from 'react';
import SearchResult from './components/SearchResult';
import SearchTool from './components/SearchTool';

function MainPage(): JSX.Element {

  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className="main-page__section">
      <div className="main-page__bar">
        <h2>Main page</h2>
        <SearchTool setIsLoading={setIsLoading} />
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
