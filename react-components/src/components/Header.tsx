import Context from 'store/Context';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

function Header(): JSX.Element {
  let detailLink = '/detail';
  const photoID = useContext(Context).states.detailState.id;
  if (photoID === 'none') {
    detailLink = '/';
  }

  const activeClassName = 'header__link_active_page';

  return (
    <header className="header">
      <h1>React hooks</h1>
      <nav>
        <NavLink
          to="/"
          className={({isActive}) => isActive ? activeClassName : undefined}
          end
          >
          Main page
        </NavLink>
        <NavLink
          to="/about"
          className={({isActive}) => isActive ? activeClassName : undefined}
          end
          >
          About us
        </NavLink>
        <NavLink
          to="/form"
          className={({isActive}) => isActive ? activeClassName : undefined}
          end
        >
          React forms
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
