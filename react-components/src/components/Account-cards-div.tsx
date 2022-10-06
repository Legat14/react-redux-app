import React from 'react';
import { IAccountCard } from 'types';
import AccountCard from './Accout-card';

class AccountCardsDiv extends React.Component<{ cardData: IAccountCard[] }> {

  constructor(props: { cardData: IAccountCard[] }) {
    super(props);
  }
  
  render(): JSX.Element {

    const cardsArr = this.props.cardData.map((element): JSX.Element => {
      return (
        <AccountCard
        key={element.key}
        name={element.name}
        date={element.date}
        gender={element.gender}
        img={element.img}
        select={element.select}
        devices={element.devices}
        />
      )
    });

    return (
      <div>
        <h4>
          Accounts registered: {this.props.cardData.length}
        </h4>
        {cardsArr}
      </div>
    )
  }
}

export default AccountCardsDiv;
