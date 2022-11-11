import Context from 'store/Context';
import React, { useReducer, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { sortOptions } from 'types';
import Header from './Header';
import { accountCardReducer, detailReducer, photoCardReducer } from 'store/reducer';

function Layout(): JSX.Element {
  const navRef = useRef<HTMLElement>(null);

  const highliteLink = (
    linkToHighlite: number,
    nav: HTMLElement | null = navRef.current,
  ): void => {
    if (nav) {
      const linksArr = nav.childNodes;
      linksArr.forEach((link: ChildNode) => {
        (link as HTMLElement).classList.remove('header__link_active_page');
      });
      (linksArr[linkToHighlite] as HTMLElement).classList.add('header__link_active_page');
    }
  };

  const [accountState, accountDispatch] = useReducer(accountCardReducer, { accountCards: [] });
  const [photoCardState, photoCardDispatch] = useReducer(photoCardReducer, {
    responseObj: {},
    inputSort: sortOptions.None,
    inputPhotosPerPage: 5,
    inputPageNumber: 1,
    lastPage: 800,
  });
  const [detailState, detailDispatch] = useReducer(detailReducer, {
    src: 'none',
    id: 'none',
    owner: 'none',
    server: 'none',
    title: 'none',
  });

  return (
    <Context.Provider
      value={{
        states: {
          accountState,
          photoCardState,
          detailState,
        },
        dispatches: {
          accountDispatch,
          photoCardDispatch,
          detailDispatch,
        },
        functions: {
          highliteLink,
        },
      }}
    >
      <div className="app-conteiner">
        <Header ref={navRef} />
        <Outlet />
      </div>
    </Context.Provider>
  );
}

export default Layout;
