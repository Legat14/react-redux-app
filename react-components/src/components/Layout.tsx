import Context from 'store/Context';
import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import store from '../store/store';
import { Provider } from 'react-redux';

function Layout(): JSX.Element {
  const navRef = useRef<HTMLElement>(null);

  const highliteLink = (linkToHighlite: number, nav: HTMLElement | null = navRef.current): void => {
    if (nav) {
      const linksArr = nav.childNodes;
      linksArr.forEach((link: ChildNode) => {
        (link as HTMLElement).classList.remove('header__link_active_page');
      });
      (linksArr[linkToHighlite] as HTMLElement).classList.add('header__link_active_page');
    }
  };

  return (
    <Context.Provider
      value={{
        functions: {
          highliteLink,
        },
      }}
    >
      <Provider store={store}>
        <div className="app-conteiner">
          <Header ref={navRef} />
          <Outlet />
        </div>
      </Provider>
    </Context.Provider>
  );
}

export default Layout;
