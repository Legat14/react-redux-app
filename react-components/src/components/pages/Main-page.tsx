import SearchResult from 'components/Search-result';
import SearchTool from 'components/Search-tool';
import React from 'react';

function MainPage() {
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
