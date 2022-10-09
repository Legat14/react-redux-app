import React from "react";
import { IAccountCard } from "types";

class AccountCard extends React.Component<IAccountCard> {
  constructor(props: IAccountCard) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div className="account-card">
        <img src={this.props.avatarUrl} alt="avatar" />
        <div className="account-card__div">
          <h4>{this.props.name}</h4>
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
