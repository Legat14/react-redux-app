import React from "react";

class NameInput extends React.Component {
  public nameInput: React.RefObject<HTMLInputElement>;

  constructor(props: {}) {
    super(props);
    this.nameInput = React.createRef();
  }

  render(): JSX.Element {
    return (
      <label className="input-label">
        <h4>Type your name:</h4>
        <input className="input" name="input" type="input" ref={this.nameInput} />
      </label>
    )
  }
}

export default NameInput;
