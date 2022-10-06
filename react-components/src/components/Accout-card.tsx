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
        <p>
          <strong>Birth date:</strong>
          <span>{this.props.date}</span>
        </p>
        <p>
          <strong>Gender:</strong>
          <span>{this.props.gender}</span>
        </p>
        <p>
          {/* TODO: Заменить вывод адреса на загрузку картинки */}
          <strong>Avatar:</strong>
          <span>{this.props.img}</span>
        </p>
        <p>
          <strong>Country:</strong>
          <span>{this.props.select}</span>
        </p>
        <p>
          <strong>Gaming devices:</strong>
          <span>{this.props.devices}</span>
        </p>
      </div>
    );
  }
}

export default AccountCard;
