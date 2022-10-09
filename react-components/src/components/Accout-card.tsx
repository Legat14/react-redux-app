import React from "react";
import { IAccountCard } from "types";

class AccountCard extends React.Component<IAccountCard> {
  constructor(props: IAccountCard) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div className="account-card">
        <h4>{this.props.name}</h4>
        <div className="account-card__avatar-div">
          <img className="account-card__avatar-img" src={this.props.avatarUrl} alt="avatar" />
        </div>
        <div className="account-card__div">
          <p>
            <strong>Birth date:</strong>
            <span>{this.props.birthDate}</span>
          </p>
          <p>
            <strong>Gender:</strong>
            <span>{this.props.gender}</span>
          </p>
          <p>
            <strong>Country:</strong>
            <span>{this.props.country}</span>
          </p>
          <p>
            <strong>Gaming devices:</strong>
            <span>{this.props.devices}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default AccountCard;
