import React from 'react';
import { Link } from 'react-router-dom';
import { RootState } from 'types';
import { useSelector } from 'react-redux';

function DetailPage(): JSX.Element {
  const detailContent = useSelector((state: RootState) => state.details);

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
