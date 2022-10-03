import React from 'react';

function AboutUsPage() {
  return (
    <section className="about-page__section">
      <h2>About us</h2>
      <article className="about-page__article">
        <p>
          This app is developed by 
          <a href="https://github.com/Legat14" target="_blank">Ivan Zotov</a>
          as part of the
          <a href="https://rs.school/" target="_blank">Rolling Scopes School</a>
          <a href="https://rs.school/react/" target="_blank">React course</a>
          in October 2022
        </p>
      </article>
    </section>
  );
}

export default AboutUsPage;
