import React from "react";

class DateInput extends React.Component {
  public dateInput: React.RefObject<HTMLInputElement>;

  constructor(props: {}) {
    super(props);
    this.dateInput = React.createRef();
  }

  render(): JSX.Element {
    return (
      <label className="date-label">
      Insert your birthday:
      <input className="date" name="date" type="date" ref={this.dateInput} />
    </label>
    )
  }
}

export default DateInput;
