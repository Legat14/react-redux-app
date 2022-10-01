import React from 'react';
import { IGameCard } from '../types';

function GameCard(props: IGameCard) {
  return (
    <div className="game-card">
      <img src={`${props.img}`} alt={`${props.title}`} />
      <h3>{props.title}</h3>
      <h2>{props.price} р.</h2>
      <p><strong>Platform:</strong> {props.platform}</p>
      <p><strong>Release date:</strong> {props.release}</p>
    </div>
  );
}

export default GameCard;
