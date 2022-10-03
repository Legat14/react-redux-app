import React from 'react';
import { IGameCard } from '../types';

function GameCard(props: IGameCard): JSX.Element {
  return (
    <div className="game-card">
      <img src={`${props.img}`} alt={`${props.title}`} />
      <div className="game-card__description">
        <h3>{props.title}</h3>
        <h2>{props.price} ₽</h2>
        <p><strong>Platform:</strong> <span>{props.platform}</span></p>
        <p><strong>Release date:</strong> <span>{props.release}</span></p>
      </div>
    </div>
  );
}

export default GameCard;
