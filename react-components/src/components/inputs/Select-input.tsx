import React from "react";

class SelectInput extends React.Component {
  public selectInput: React.RefObject<HTMLSelectElement>;

  constructor(props: {}) {
    super(props);
    this.selectInput = React.createRef();
  }

  render(): JSX.Element {
    return (
      <label className="select-label">
        Choose your country:
        <select className="select" name="select" ref={this.selectInput}>
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

export default SelectInput;
