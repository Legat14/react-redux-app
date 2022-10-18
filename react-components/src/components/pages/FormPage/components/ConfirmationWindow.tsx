import React from 'react';

class ConfirmationWindow extends React.Component {
  confirmationDiv: React.RefObject<HTMLDivElement>;

  constructor(props: {}) {
    super(props);
    this.confirmationDiv = React.createRef();
  }
  render(): JSX.Element {
    return (
      <div className="confirmation__div confirmation__div_disabled" ref={this.confirmationDiv}>
        <h3>Congratulations!</h3>
        <p>Your account was created</p>
      </div>
    );
  }
}

export default ConfirmationWindow;
