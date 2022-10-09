import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout(): JSX.Element {
  return (
    <div className="app-conteiner">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
