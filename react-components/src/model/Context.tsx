import React, { createContext, Dispatch } from 'react';
import { IAccountCard, IResponse } from 'types';

const Context = createContext<{
    states: { accountState: { accountCards: IAccountCard[] }, photoCardState: { responseObj: IResponse | {} } },
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
            }>,
    }
}>({
    states: { accountState: { accountCards: [] }, photoCardState: { responseObj: {} } },
    dispatches: {
        accountDispatch: ()=>{},
        photoCardDispatch: ()=>{},
    },
});

export default Context;