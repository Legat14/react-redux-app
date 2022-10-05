import React from "react";
import { IAccountCard } from "types";

class AccountCard extends React.Component {
  constructor(props: IAccountCard) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div className="account-card">
        <h4>{(this.props as IAccountCard).name}</h4>
        <p>
          <strong>Birth date:</strong>
          <span>{(this.props as IAccountCard).date}</span>
        </p>
      </div>
    );
  }
}

export default AccountCard;
