import React, { ReactNode, useReducer } from "react";
import { sortOptions } from "types";
import Context from "./Context";
import { accountCardReducer, detailReducer, photoCardReducer } from "./reducer";

function AppProvider(children: ReactNode): JSX.Element {
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
      {children}
    </Context.Provider>
  )
}

export default AppProvider;
