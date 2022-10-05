import React from "react";

class CheckboxInput extends React.Component {
  public pcCheckbox: React.RefObject<HTMLInputElement>;

  constructor(props: {}) {
    super(props);
    this.pcCheckbox = React.createRef();
  }

  render(): JSX.Element {
    return (
      <div className="checkboxes">
        <h4>What gaming devices do you have?</h4>
        <label className="checkbox-label">
          <input className="pc-checkbox" name="pc" type="checkbox" ref={this.pcCheckbox} />
          PC
        </label>
      </div>
    )
  }
}

export default CheckboxInput;
