import isEmpty from 'helpers/isEmpty';
import Context from 'model/Context';
import React, { useReducer } from 'react';
import { Outlet } from 'react-router-dom';
import { IAccountCard, IPhoto, IPhotoCard, IPhotos, IResponse } from 'types';
import Header from './Header';
import RenderPhoto from './pages/MainPage/components/RenderPhoto';

const accountCardReducer = (state: { accountCards: IAccountCard[] }, action: { type: string, newAccountCard: IAccountCard }):
{ accountCards: IAccountCard[] | [] } => {
    if (action.type === 'add-account-card') { // TODO: Создать enum для возможных команд
      if (action.newAccountCard) {
        const newAccountCards = [...state.accountCards, action.newAccountCard];
        return {...state, accountCards: newAccountCards as IAccountCard[]};
      }
    }
    if (action.type === 'delete-all-account-cards') {
      return {...state, accountCards: []};
    }
    return state;
}

const photoCardReducer = (state: { responseObj: IResponse | {} }, action: { type: string, responseObj: IResponse }):
{ responseObj: IResponse | {} } => {
  if (action.type === 'render-photo-cards') {
    return {...state, responseObj: action.responseObj};
  }
  return state;
}

function Layout(): JSX.Element {
  const [accountState, accountDispatch] = useReducer(accountCardReducer, { accountCards: [] });
  const [photoCardState, photoCardDispatch] = useReducer(photoCardReducer, { responseObj: {} });
  return (
    <Context.Provider value={{
      states: {accountState, photoCardState},
      dispatches: {
        accountDispatch: accountDispatch,
        photoCardDispatch: photoCardDispatch,
      },
    }}>
      <div className="app-conteiner">
        <Header />
        <Outlet />
      </div>
    </Context.Provider>
  );
}

export default Layout;
