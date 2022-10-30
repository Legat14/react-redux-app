import Context from 'model/Context';
import React, { useReducer } from 'react';
import { Outlet } from 'react-router-dom';
import { IAccountCard, IPhotoCardDispatch, IPhotoCardState, IResponse, sortOptions } from 'types';
import Header from './Header';

const accountCardReducer = (
  state: { accountCards: IAccountCard[] },
  action: { type: string; newAccountCard: IAccountCard }
): { accountCards: IAccountCard[] | [] } => {
  if (action.type === 'add-account-card') {
    // TODO: Создать enum для возможных команд
    if (action.newAccountCard) {
      const newAccountCards = [...state.accountCards, action.newAccountCard];
      return { ...state, accountCards: newAccountCards as IAccountCard[] };
    }
  }
  if (action.type === 'delete-all-account-cards') {
    return { ...state, accountCards: [] };
  }
  return state;
};

const photoCardReducer = (state: IPhotoCardState, action: IPhotoCardDispatch): IPhotoCardState => {
  // TODO: Добавить возможность очистки страницы
  if (action.type === 'render-photo-cards') {
    return { ...state, responseObj: action.responseObj };
  }
  if (action.type === 'save-sort-option') {
    return { ...state, inputSort: action.inputSort };
  }
  if (action.type === 'save-photo-per-page') {
    return { ...state, inputPhotosPerPage: action.inputPhotosPerPage };
  }
  if (action.type === 'save-last-page') {
    return { ...state, lastPage: action.lastPage };
  }
  return state;
};

function Layout(): JSX.Element {
  const [accountState, accountDispatch] = useReducer(accountCardReducer, { accountCards: [] });
  const [photoCardState, photoCardDispatch] = useReducer(photoCardReducer, {
    responseObj: {},
    inputSort: sortOptions.None,
    inputPhotosPerPage: 5,
    lastPage: 1,
  });
  return (
    <Context.Provider
      value={{
        states: { accountState, photoCardState },
        dispatches: {
          accountDispatch: accountDispatch,
          photoCardDispatch: photoCardDispatch,
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
