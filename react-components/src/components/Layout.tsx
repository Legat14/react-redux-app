import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import store from '../store/store';
import { Provider } from 'react-redux';

function Layout(): JSX.Element {

  return (
    <Provider store={store}>
      <div className="app-conteiner">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}

export default Layout;
