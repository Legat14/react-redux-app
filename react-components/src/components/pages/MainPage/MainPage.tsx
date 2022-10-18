import SearchResult from './components/SearchResult';
import SearchTool from './components/SearchTool';
import React from 'react';

function MainPage(): JSX.Element {
  return (
    <section className="main-page__section">
      <div className="main-page__bar">
        <h2>Main page</h2>
        <SearchTool />
      </div>
      <SearchResult />
    </section>
  );
}

export default MainPage;
