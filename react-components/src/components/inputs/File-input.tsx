import React from "react";

class FileInput extends React.Component {
  public fileInput: React.RefObject<HTMLInputElement>;

  constructor(props: {}) {
    super(props);
    this.fileInput = React.createRef();
  }

  render(): JSX.Element {
    return (
      <label className="input-label">
        <h4>Load your avatar:</h4>
        <input className="file" name="file" type="file"
        accept="image/*" ref={this.fileInput} />
      </label>
    )
  }
}

export default FileInput;
