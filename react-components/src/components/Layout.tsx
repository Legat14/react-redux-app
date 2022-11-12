import Context from 'store/Context';
import React, { useReducer } from 'react';
import { Outlet } from 'react-router-dom';
import { sortOptions } from 'types';
import Header from './Header';
import { accountCardReducer, detailReducer, photoCardReducer } from 'store/reducer';

function Layout(): JSX.Element {

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
      }}
    >
      <div className="app-conteiner">
        <Header />
        <Outlet />
      </div>
    </Context.Provider>
  );
}

export default Layout;
