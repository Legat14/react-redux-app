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
      <div className="devices">
        <h4>What gaming devices do you have?</h4>
        <div className="devices__div">
          <label className="devices__label">
            <input className="devices__checkbox" name="pc" type="checkbox" ref={this.pcCheckbox} data-testid="pc-input" />
            PC
          </label>
          <label className="devices__label">
            <input className="devices__checkbox" name="ps5" type="checkbox" ref={this.ps5Checkbox} data-testid="ps5-input" />
            PS5
          </label>
          <label className="devices__label">
            <input className="devices__checkbox" name="Xbox" type="checkbox" ref={this.xBoxCheckbox} data-testid="xbox-input" />
            Xbox series X
          </label>
          <label className="devices__label">
            <input className="devices__checkbox" name="switch" type="checkbox" ref={this.switchCheckbox} data-testid="switch-input" />
            Switch
          </label>
        </div>
      </div>
    )
  }
}

export default DevicesInput;
