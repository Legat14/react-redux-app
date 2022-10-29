import React, { createContext, Dispatch } from 'react';
import { IAccountCard, IResponse, sortOptions } from 'types';

const Context = createContext<{
    states: {
        accountState: { accountCards: IAccountCard[] },
        photoCardState: {
            responseObj: IResponse | {},
            inputSort: sortOptions,
        }
    },
    dispatches: {
        accountDispatch:
            Dispatch<{
                type: string;
                newAccountCard: IAccountCard;
            }>,
        photoCardDispatch:
            Dispatch<{
                type: string;
                responseObj: IResponse;
                inputSort: sortOptions,
            }>,
    }
}>({
    states: { accountState: { accountCards: [] }, photoCardState: { responseObj: {}, inputSort: sortOptions.None } },
    dispatches: {
        accountDispatch: ()=>{},
        photoCardDispatch: ()=>{},
    },
});

export default Context;