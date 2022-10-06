import React from "react";

class SwitcherInput extends React.Component {
  public switcher: React.RefObject<HTMLInputElement>;

  constructor(props: {}) {
    super(props);
    this.switcher = React.createRef();
  }

  render(): JSX.Element {
    return (
      <div className="switcher__div">
        <h4>Choose youre gender</h4>
        <label className="switcher__label">
          <span>Male</span>
          <input className="switcher" name="gender" type="checkbox" ref={this.switcher} />
          <div className="switcher__control"></div>
          <span>Female</span>
        </label>
      </div>
    )
  }
}

export default SwitcherInput;
