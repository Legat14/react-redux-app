import React, { RefObject } from 'react';
import { Link } from 'react-router-dom';
import HeaderOverlay from './HeaderOverlay';

class Header extends React.Component<{showModal: boolean}, {}> {
  overlay: RefObject<HeaderOverlay>

  constructor(props: {showModal: boolean}) {
    super(props);
    this.overlay = React.createRef();
  }

  render(): JSX.Element {
  return (
    <header className="header">
      <HeaderOverlay
        ref={this.overlay}
       />
      <h1>React components</h1>
        <nav>
          <Link to="/">Main page</Link>
          <Link to="/about">About us</Link>
          <Link to="/form">React forms</Link>
        </nav>
    </header>
  );
}
}

export default Header;
