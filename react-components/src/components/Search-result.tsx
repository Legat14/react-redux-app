import React from 'react';
import GameCard from './Game-card';

function SearchResult() {
  return (
    <div className='search-result'>
      <GameCard
        title="God of War"
        price="2999"
        platform="PC"
        release="01/14/2022"
        img="./assets/img/god-of-war.jpg"
       />
      <GameCard
        title="Elden Ring"
        price="3899"
        platform="PC"
        release="02/25/2022"
        img="./assets/img/elden-ring.jpg"
        />
      <GameCard
        title="GhostRunner"
        price="799"
        platform="PC"
        release="10/27/2020"
        img="./assets/img/ghostrunner.jpg"
        />
      <GameCard
        title="Far Cry 5"
        price="699"
        platform="PC"
        release="03/26/2018"
        img="./assets/img/far-cry-5.jpg"
        />
      <GameCard
        title="PUBG"
        price="1599"
        platform="Xbox 360"
        release="12/21/2017"
        img="./assets/img/pubg.jpg"
        />
      <GameCard
        title="Shadow Tactics"
        price="95"
        platform="PC, MacOS, Linux"
        release="12/06/2016"
        img="./assets/img/shadow-tactics.jpg"
        />
    </div>
  );
}

export default SearchResult;
