import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(): JSX.Element {
  return (
    <header className="header">
      <h1>React hooks</h1>
      <nav>
        <NavLink
        className={({isActive}) => isActive ? "header__link_active_page" : undefined}
         to="/"
         end>
          Main page
        </NavLink>
        <NavLink
          to="/about"
          end
          className={({isActive}) => isActive ? "header__link_active_page" : undefined}
        >
          About us
        </NavLink>
        <NavLink
          to="/form"
          end
          className={({isActive}) => isActive ? "header__link_active_page" : undefined}
        >
          React forms
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
