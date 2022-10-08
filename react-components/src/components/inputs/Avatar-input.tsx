import React from "react";

class AvatarInput extends React.Component {
  public avatarInput: React.RefObject<HTMLInputElement>;
  public avatarInputBtn: React.RefObject<HTMLButtonElement>;

  constructor(props: {}) {
    super(props);
    this.avatarInput = React.createRef();
    this.avatarInputBtn = React.createRef();
  }

  render(): JSX.Element {
    return (
      <label className="avatar__label">
        <h4>Load your avatar:</h4>
        <input className="avatar__input" name="avatar" type="file"
        accept="image/*" ref={this.avatarInput} data-testid="avatar-input" />
        <button className="avatar__button" type="button" ref={this.avatarInputBtn}>Choose image file</button>
      </label>
    )
  }
}

export default AvatarInput;
