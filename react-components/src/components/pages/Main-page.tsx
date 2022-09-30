import SearchResult from 'components/Search-result';
import SearchTool from 'components/Search-tool';
import React from 'react';

function MainPage() {
  return (
    <section className="main-page__section">
      <h2>Main page</h2>
      <SearchTool />
      <SearchResult />
    </section>
  );
}

export default MainPage;
