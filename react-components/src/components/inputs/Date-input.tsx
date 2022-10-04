import React from "react";

class DateInput extends React.Component {
  public dateInput: React.RefObject<HTMLInputElement>;

  constructor(props: {}) {
    super(props);
    this.dateInput = React.createRef();
  }

  render(): JSX.Element {

    return (
      <label className="input-label">
      Insert your birthday:
      <input className="input" type="date" ref={this.dateInput} />
    </label>
    )
  }
}

export default DateInput;
