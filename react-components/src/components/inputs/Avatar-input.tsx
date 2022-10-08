import React from "react";

class AvatarInput extends React.Component {
  public avatarInput: React.RefObject<HTMLInputElement>;

  constructor(props: {}) {
    super(props);
    this.avatarInput = React.createRef();
  }

  render(): JSX.Element {
    return (
      <label className="avatar__label">
        <h4>Load your avatar:</h4>
        <input className="avatar_input" name="avatar" type="file"
        accept="image/*" ref={this.avatarInput} data-testid="avatar-input" />
      </label>
    )
  }
}

export default AvatarInput;
