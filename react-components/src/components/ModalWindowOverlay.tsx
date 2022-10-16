import React from 'react';

class ModalWindowOverlay extends React.Component<{}> {
  constructor(props: {}) {
    super(props);
  }

  showOverlay() {
    this.setState({
      overlayClass: 'header__overlay',
    });
  }

  hideOverlay() {
    this.setState({
      overlayClass: 'header__overlay modal-window__hidden',
    });
  }

  render(): JSX.Element { 
    return (
      <div className="modal-window__overlay"></div>
    )
  }
}

export default ModalWindowOverlay;
