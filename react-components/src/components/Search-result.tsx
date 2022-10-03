import React from 'react';
import GameCard from './Game-card';
import { mockData } from '../mock-data';

function SearchResult(): JSX.Element {

  const gameCardsArr = mockData.map((card): JSX.Element => {
    return <GameCard
    key={card.id}
    title={card.title}
    price={card.price}
    platform={card.platform}
    release={card.release}
    img={card.img}
   />
  })

  return (
    <div className='search-result'>
      {gameCardsArr}
    </div>
  );
}

export default SearchResult;
