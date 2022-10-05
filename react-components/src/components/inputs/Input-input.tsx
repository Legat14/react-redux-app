import React from "react";

class InputInput extends React.Component {
  public inputInput: React.RefObject<HTMLInputElement>;

  constructor(props: {}) {
    super(props);
    this.inputInput = React.createRef();
  }

  render(): JSX.Element {
    return (
      <label className="input-label">
        Type your name:
        <input className="input" name="input" type="input" ref={this.inputInput} />
      </label>
    )
  }
}

export default InputInput;
