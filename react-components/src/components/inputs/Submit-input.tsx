import React from "react";

class SubmitInput extends React.Component{
  submitInput: React.RefObject<HTMLInputElement>

  constructor(props: {}) {
    super(props);
    this.submitInput = React.createRef();
  }

  render(): JSX.Element {
  return (
    <input className="submit" type="submit" disabled={true} ref={this.submitInput} data-testid="submit-input" />
    )
  }
}

export default SubmitInput;
