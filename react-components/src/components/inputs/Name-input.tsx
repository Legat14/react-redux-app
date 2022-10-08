import React from "react";

class NameInput extends React.Component {
  public nameInput: React.RefObject<HTMLInputElement>;

  constructor(props: {}) {
    super(props);
    this.nameInput = React.createRef();
  }

  render(): JSX.Element {
    return (
      <label className="name__label">
        <h4>Type your name:</h4>
        <input className="name__input" name="name-input" type="input" ref={this.nameInput} data-testid="name-input" />
      </label>
    )
  }
}

export default NameInput;
