import React from "react";

class CheckboxInput extends React.Component {
  public pcCheckbox: React.RefObject<HTMLInputElement>;
  public ps5Checkbox: React.RefObject<HTMLInputElement>;
  public xBoxCheckbox: React.RefObject<HTMLInputElement>;
  public switchCheckbox: React.RefObject<HTMLInputElement>;

  constructor(props: {}) {
    super(props);
    this.pcCheckbox = React.createRef();
    this.ps5Checkbox = React.createRef();
    this.xBoxCheckbox = React.createRef();
    this.switchCheckbox = React.createRef();
  }

  render(): JSX.Element {
    return (
      <div className="checkboxes">
        <h4>What gaming devices do you have?</h4>
        <label className="checkbox-label">
          <input className="checkbox" name="pc" type="checkbox" ref={this.pcCheckbox} />
          PC
        </label>
        <label className="checkbox-label">
          <input className="checkbox" name="ps5" type="checkbox" ref={this.ps5Checkbox} />
          PS5
        </label>
        <label className="checkbox-label">
          <input className="checkbox" name="Xbox" type="checkbox" ref={this.xBoxCheckbox} />
          Xbox series X
        </label>
        <label className="checkbox-label">
          <input className="checkbox" name="switch" type="checkbox" ref={this.switchCheckbox} />
          Switch
        </label>
      </div>
    )
  }
}

export default CheckboxInput;
