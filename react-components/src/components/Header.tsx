import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1>React components</h1>
      <nav>
        <Link to="/">Main page</Link>
        <Link to="/about">About us</Link>
      </nav>
    </header>
  );
}

export default Header;
