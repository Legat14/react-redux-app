import { createContext, Dispatch } from 'react';
import { IAccountCard, IPhotoCardDispatch, IPhotoCardState, IResponse, sortOptions } from 'types';

const Context = createContext<{
  states: {
    accountState: { accountCards: IAccountCard[] };
    photoCardState: IPhotoCardState;
  };
  dispatches: {
    accountDispatch: Dispatch<{
      type: string;
      newAccountCard: IAccountCard;
    }>;
    photoCardDispatch: Dispatch<IPhotoCardDispatch>;
  };
}>({
  states: {
    accountState: { accountCards: [] },
    photoCardState: {
      responseObj: {},
      inputSort: sortOptions.None,
      inputPhotosPerPage: 5,
      lastPage: 1,
    },
  },
  dispatches: {
    accountDispatch: () => {},
    photoCardDispatch: () => {},
  },
});

export default Context;
