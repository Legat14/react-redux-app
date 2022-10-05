import React from 'react';
import TestCard from './Text-card';

class AccountCardsDiv extends React.Component<{number: Array<number>}> {

  constructor(props: {number: Array<number>}) {
    super(props);
  }
  
  render(): JSX.Element {

    const newArr = this.props.number.map((element) => {
      return (
        <TestCard
        key={element}
        name={element}
        />
      )
    });

    return (
      <div>
        <h4>
          Cards number: {this.props.number.length}
        </h4>
        {newArr}
      </div>
    )
  }
}

export default AccountCardsDiv;
