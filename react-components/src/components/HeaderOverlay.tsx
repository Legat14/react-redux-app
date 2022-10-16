import React from 'react';

class HeaderOverlay extends React.Component<{}, {overlayClass: string}> {
  constructor(props: {}) {
    super(props);
    this.state = {
      overlayClass: 'header__overlay modal-window__hidden',
    }
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
      <div className={this.state.overlayClass}></div>
    )
  }
}

export default HeaderOverlay;
