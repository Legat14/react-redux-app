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
        birthDate={element.birthDate}
        gender={element.gender}
        avatar={element.avatar}
        avatarUrl={element.avatarUrl}
        country={element.country}
        devices={element.devices}
        />
      )
    });

    return (
      <div className='account-cards__div'>
        <h3>
          Accounts registered: {this.props.cardData.length}
        </h3>
        {cardsArr}
      </div>
    )
  }
}

export default AccountCardsDiv;
