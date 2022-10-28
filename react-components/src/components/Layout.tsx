import Context from 'model/Context';
import React, { useReducer } from 'react';
import { Outlet } from 'react-router-dom';
import { IAccountCard } from 'types';
import Header from './Header';

const accountCardReducer = (state: {accountCards: IAccountCard[]}, action: { type: string, newAccountCard: IAccountCard }):
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

function Layout(): JSX.Element {
  const [state, dispatch] = useReducer(accountCardReducer, { accountCards: [] });
  return (
    <Context.Provider value={{state: state, dispatch: dispatch}}>
      <div className="app-conteiner">
        <Header />
        <Outlet />
      </div>
    </Context.Provider>
  );
}

export default Layout;
