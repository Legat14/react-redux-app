import React from "react";
import { IAccountCard } from "types";

class AccountCard extends React.Component<IAccountCard> {
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
        <p>
          <strong>Country:</strong>
          <span>{(this.props as IAccountCard).select}</span>
        </p>
        <p>
          <strong>Gaming devices:</strong>
          <span>{(this.props as IAccountCard).devices}</span>
        </p>
      </div>
    );
  }
}

export default AccountCard;
