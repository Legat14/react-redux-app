import React from 'react';

class SwitcherInput extends React.Component {
  public switcher: React.RefObject<HTMLInputElement>;

  constructor(props: {}) {
    super(props);
    this.switcher = React.createRef();
  }

  render(): JSX.Element {
    return (
      <div className="gender__div">
        <h4>Choose youre gender</h4>
        <label className="gender__label">
          <span>Male</span>
          <input
            className="gender__input"
            name="gender-input"
            type="checkbox"
            ref={this.switcher}
            data-testid="gender-input"
          />
          <div className="gender__control"></div>
          <span>Female</span>
        </label>
      </div>
    );
  }
}

export default SwitcherInput;
