import { createContext } from 'react';
import { IAccountCard } from 'types';

const Context = createContext<{
    state: { accountCards:IAccountCard[] },
    dispatch: React.Dispatch<{
        type: string;
        newAccountCard: IAccountCard;
    }>
}>({
    state: { accountCards: [] },
    dispatch: ()=>{},
});

export default Context;