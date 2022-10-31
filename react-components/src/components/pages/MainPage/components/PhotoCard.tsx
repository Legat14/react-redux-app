import React from 'react';
import { Link } from 'react-router-dom';
import { IPhotoCard } from 'types';

function PhotoCard(props: IPhotoCard): JSX.Element {
  return (
    <div className="photo-card" onClick={props.onClick} data-testid={'photo-card'}>
      <Link to="/detail">
        <img src={`${props.src}`} alt={`${props.title}`} />
        <div className="photo-card__small-info">
          <h3>
            <strong>Title:</strong> {props.title}
          </h3>
          <h4>
            <strong>Owner:</strong> {props.owner}
          </h4>
        </div>
      </Link>
    </div>
  );
}

export default PhotoCard;
