import Context from 'model/Context';
import React, { MouseEvent, useContext } from 'react';
import { Link } from 'react-router-dom';

function Header(): JSX.Element {

  let detailLink = '/detail';
  const photoID = useContext(Context).states.detailState.id;
  if (photoID === 'none') {
    detailLink = '/';
  }

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (target.nodeName === 'A') {
      const navArr = event.currentTarget.childNodes;
      navArr.forEach((link: ChildNode) => {
        (link as HTMLAnchorElement).classList.remove('header__link_active_page');
      });
      target.classList.add('header__link_active_page');
    }
  }

  return (
    <header className="header">
      <h1>React hooks</h1>
      <nav onClick={handleClick}>
        <Link className='header__link_active_page' to="/">Main page</Link>
        <Link to={detailLink}>Details</Link>
        <Link to="/about">About us</Link>
        <Link to="/form">React forms</Link>
      </nav>
    </header>
  );
}

export default Header;
