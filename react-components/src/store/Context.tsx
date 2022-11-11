import { createContext, Dispatch } from 'react';
import {
  AccountCardActionType,
  DetailType,
  IAccountCard,
  IDetailContent,
  IPhotoCardDispatch,
  IPhotoCardState,
  sortOptions,
} from 'types';

const Context = createContext<{
  states: {
    accountState: { accountCards: IAccountCard[] };
    photoCardState: IPhotoCardState;
    detailState: IDetailContent;
  };
  dispatches: {
    accountDispatch: Dispatch<{
      type: AccountCardActionType;
      newAccountCard?: IAccountCard;
    }>;
    photoCardDispatch: Dispatch<IPhotoCardDispatch>;
    detailDispatch: Dispatch<{
      type: DetailType;
      newDetailState: IDetailContent;
    }>;
  };
  functions: {
    highliteLink: (linkToHighlite: number, nav?: HTMLElement) => void;
  };
}>({
  states: {
    accountState: { accountCards: [] },
    photoCardState: {
      responseObj: {},
      inputSort: sortOptions.None,
      inputPhotosPerPage: 5,
      inputPageNumber: 1,
      lastPage: 800,
    },
    detailState: {
      src: 'none',
      id: 'none',
      owner: 'none',
      server: 'none',
      title: 'none',
    },
  },
  dispatches: {
    accountDispatch: () => {},
    photoCardDispatch: () => {},
    detailDispatch: () => {},
  },
  functions: {
    highliteLink: () => {},
  },
});

export default Context;
