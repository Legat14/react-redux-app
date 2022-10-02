import React from 'react';
import { IGameCard } from '../types';

function GameCard(props: IGameCard) {
  return (
    <div className="game-card">
      <img src={`${props.img}`} alt={`${props.title}`} />
      <h3>{props.title}</h3>
      <h2>{props.price} ₽</h2>
      <p><strong>Platform:</strong> <span>{props.platform}</span></p>
      <p><strong>Release date:</strong> <span>{props.release}</span></p>
    </div>
  );
}

export default GameCard;
