import React from 'react';
import { Outlet } from 'react-router-dom';
import AppProvider from 'store/AppProvider';
import Header from './Header';

function Layout(): JSX.Element {

  const children = (
    <div className="app-conteiner">
      <Header />
      <Outlet />
    </div>
  );

  return (
    AppProvider(children)
  );
}

export default Layout;
