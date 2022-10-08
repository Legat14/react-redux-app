import React from "react";

class BirthDateInput extends React.Component {
  public birthDateInput: React.RefObject<HTMLInputElement>;

  constructor(props: {}) {
    super(props);
    this.birthDateInput = React.createRef();
  }

  render(): JSX.Element {
    return (
      <label className="date__label">
        <h4>Insert your birthday:</h4>
        <input className="date__input" name="date" type="date" ref={this.birthDateInput} data-testid="birth-date-input" />
      </label>
    )
  }
}

export default BirthDateInput;
