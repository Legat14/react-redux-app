import Context from 'model/Context';
import React, { useReducer, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import {
  IAccountCard,
  IDetailContent,
  IPhotoCardDispatch,
  IPhotoCardState,
  sortOptions,
} from 'types';
import Header from './Header';
import store from '../model/store';
import { Provider } from 'react-redux';

// const accountCardReducer = (
//   state: { accountCards: IAccountCard[] },
//   action: { type: string; newAccountCard: IAccountCard }
// ): { accountCards: IAccountCard[] | [] } => {
//   if (action.type === 'add-account-card') {
//     // TODO: Создать enum для возможных команд
//     if (action.newAccountCard) {
//       const newAccountCards = [...state.accountCards, action.newAccountCard];
//       return { ...state, accountCards: newAccountCards as IAccountCard[] };
//     }
//   }
//   if (action.type === 'delete-all-account-cards') {
//     return { ...state, accountCards: [] };
//   }
//   return state;
// };

// const photoCardReducer = (state: IPhotoCardState, action: IPhotoCardDispatch): IPhotoCardState => {
//   // TODO: Добавить возможность очистки страницы
//   if (action.type === 'render-photo-cards') {
//     return { ...state, responseObj: action.responseObj };
//   }
//   if (action.type === 'save-sort-option') {
//     return { ...state, inputSort: action.inputSort };
//   }
//   if (action.type === 'save-photo-per-page') {
//     return { ...state, inputPhotosPerPage: action.inputPhotosPerPage };
//   }
//   if (action.type === 'save-page-number') {
//     return { ...state, inputPageNumber: action.inputPageNumber };
//   }
//   if (action.type === 'save-last-page') {
//     return { ...state, lastPage: action.lastPage };
//   }
//   return state;
// };

// const detailReducer = (
//   state: IDetailContent,
//   action: {
//     type: string;
//     newDetailState: IDetailContent;
//   }
// ): IDetailContent => {
//   if (action.type === 'save-detail-content') {
//     return action.newDetailState;
//   }
//   return state;
// };

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

  // const [accountState, accountDispatch] = useReducer(accountCardReducer, { accountCards: [] });
  // const [photoCardState, photoCardDispatch] = useReducer(photoCardReducer, {
  //   responseObj: {},
  //   inputSort: sortOptions.None,
  //   inputPhotosPerPage: 5,
  //   inputPageNumber: 1,
  //   lastPage: 800,
  // });
  // const [detailState, detailDispatch] = useReducer(detailReducer, {
  //   src: 'none',
  //   id: 'none',
  //   owner: 'none',
  //   server: 'none',
  //   title: 'none',
  // });

  return (
    <Provider
      store={store}
      // value={{
      //   states: {
      //     accountState,
      //     photoCardState,
      //     detailState,
      //   },
      //   dispatches: {
      //     accountDispatch,
      //     photoCardDispatch,
      //     detailDispatch,
      //   },
      //   functions: {
      //     highliteLink,
      //   },
      // }}
    >
      <div className="app-conteiner">
        <Header ref={navRef} />
        <Outlet />
      </div>
    </Provider>
  );
}

export default Layout;
