import React from "react";

class CountryInput extends React.Component {
  public countryInput: React.RefObject<HTMLSelectElement>;

  constructor(props: {}) {
    super(props);
    this.countryInput = React.createRef();
  }

  render(): JSX.Element {
    return (
      <label className="country__label">
        <h4>Choose your country:</h4>
        <select className="country__input" name="country" ref={this.countryInput} data-testid="country-input">
          <option value={'Russia'}>Russia</option>
          <option value={'Ukraine'}>Ukraine</option>
          <option value={'Belarus'}>Belarus</option>
          <option value={'Kazakhstan'}>Kazakhstan</option>
          <option value={'Finland'}>Finland</option>
        </select>
      </label>
    )
  }
}

export default CountryInput;
