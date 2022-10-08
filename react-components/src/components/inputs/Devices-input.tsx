import React from "react";

class DevicesInput extends React.Component {
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
          <input className="checkbox" name="pc" type="checkbox" ref={this.pcCheckbox} data-testid="pc-input" />
          PC
        </label>
        <label className="checkbox-label">
          <input className="checkbox" name="ps5" type="checkbox" ref={this.ps5Checkbox} data-testid="ps5-input" />
          PS5
        </label>
        <label className="checkbox-label">
          <input className="checkbox" name="Xbox" type="checkbox" ref={this.xBoxCheckbox} data-testid="xbox-input" />
          Xbox series X
        </label>
        <label className="checkbox-label">
          <input className="checkbox" name="switch" type="checkbox" ref={this.switchCheckbox} data-testid="switch-input" />
          Switch
        </label>
      </div>
    )
  }
}

export default DevicesInput;
