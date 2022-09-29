import React from 'react';
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <header className="main-page-header">
      <h1>React components</h1>
        <nav>
          <Link to="/">Main page</Link>
          <Link to="/about">About us</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;
