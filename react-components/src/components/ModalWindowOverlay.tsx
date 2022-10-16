import React from 'react';

class ModalWindowOverlay extends React.Component<{}, {overlayClass: string}> {
  constructor(props: {}) {
    super(props);
    this.state = {
      overlayClass: 'modal-window__overlay modal-window__hidden',
    }
    this.showOverlay = this.showOverlay.bind(this);
    this.hideOverlay = this.hideOverlay.bind(this);
  }

  showOverlay() {
    this.setState({
      overlayClass: 'modal-window__overlay',
    });
  }

  hideOverlay() {
    this.setState({
      overlayClass: 'modal-window__overlay modal-window__hidden',
    });
  }

  render(): JSX.Element { 
    return (
      <div className={this.state.overlayClass}></div>
    )
  }
}

export default ModalWindowOverlay;
