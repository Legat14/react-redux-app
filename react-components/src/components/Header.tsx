import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'types';

function Header(): JSX.Element {
  let detailLink = '/detail';
  const photoID = useSelector((state: RootState) => state.details.id);
  if (photoID === 'none') {
    detailLink = '/';
  }

  return (
    <header className="header">
      <h1>React hooks</h1>
      <nav>
        <Link className="header__link_active_page" to="/">
          Main page
        </Link>
        <Link to={detailLink}>Details</Link>
        <Link to="/about">About us</Link>
        <Link to="/form">React forms</Link>
      </nav>
    </header>
  );
}

export default Header;
