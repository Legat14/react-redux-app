import React from "react";

class Input extends React.Component {
  public input: React.RefObject<HTMLInputElement>;

  constructor(props: {}) {
    super(props);
    this.input = React.createRef();
  }

  render(): JSX.Element {

    return (
      <label className="input-label">
      Type your name:
      <input className="input" type="input" ref={this.input} />
    </label>
    )
  }
}

export default Input;
