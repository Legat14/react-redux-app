import React from "react";

class AvatarInput extends React.Component {
  public avatarInput: React.RefObject<HTMLInputElement>;

  constructor(props: {}) {
    super(props);
    this.avatarInput = React.createRef();
  }

  render(): JSX.Element {
    return (
      <label className="input-label">
        <h4>Load your avatar:</h4>
        <input className="file" name="file" type="file"
        accept="image/*" ref={this.avatarInput} data-testid="avatar-input" />
      </label>
    )
  }
}

export default AvatarInput;
