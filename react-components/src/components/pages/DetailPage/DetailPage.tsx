import React, { useContext } from 'react';
import Context from 'model/Context';
import { Link } from 'react-router-dom';

function DetailPage(): JSX.Element {
  const detailContent = useContext(Context).states.detailState;

  return (
    <section className="detail-page__section" data-testid={'detail-page'}>
      <h2>Details</h2>
      <Link to="/">⇦ Back to main page</Link>
      <div className="detail-page__details">
        <img src={detailContent.src} alt={detailContent.title} />
        <div className="detail-page__description">
          <h3>{detailContent.title}</h3>
          <p>
            <span>id: </span>
            {detailContent.id}
          </p>
          <p>
            <span>owner: </span>
            {detailContent.owner}
          </p>
          <p>
            <span>server: </span>
            {detailContent.server}
          </p>
        </div>
      </div>
    </section>
  );
}

export default DetailPage;
