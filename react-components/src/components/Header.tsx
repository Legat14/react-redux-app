import React, { RefObject } from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component<{}, {}> {

  render(): JSX.Element {
  return (
    <header className="header">
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
