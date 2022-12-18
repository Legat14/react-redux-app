import React from 'react';
import { IAccountCard } from 'types';

function AccountCard(props: IAccountCard): JSX.Element {
  return (
    <div className="account-card">
      <h4>{props.name}</h4>
      <div className="account-card__avatar-div">
        <img className="account-card__avatar-img" src={props.avatarUrl} alt="avatar" />
      </div>
      <div className="account-card__div">
        <p>
          <strong>Birth date:</strong>
          <span>{props.birthDate}</span>
        </p>
        <p>
          <strong>Gender:</strong>
          <span>{props.gender}</span>
        </p>
        <p>
          <strong>Country:</strong>
          <span>{props.country}</span>
        </p>
        <p>
          <strong>Gaming devices:</strong>
          <span>{props.devices}</span>
        </p>
      </div>
    </div>
  );
}

export default AccountCard;
