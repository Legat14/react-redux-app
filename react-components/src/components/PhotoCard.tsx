import React from 'react';
import { IPhotoCard } from 'types';

function PhotoCard(props: IPhotoCard): JSX.Element {
  return (
    <div className="photo-card">
      <img src={`${props.src}`} alt={`${props.title}`} />
      <h3>{props.title}</h3>
      <h4>{props.owner}</h4>
    </div>
  );
}

export default PhotoCard;
