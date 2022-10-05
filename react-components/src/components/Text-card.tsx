import React from "react";
import { ITestCard } from "types";

class TestCard extends React.Component<ITestCard> {
  constructor(props: ITestCard) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div className="test-card">
        <h4>{this.props.name}</h4>
      </div>
    );
  }
}

export default TestCard;
