import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAccountCard } from 'types'

export interface AccountCardSlice { accountCards: IAccountCard[] }

const initialState: AccountCardSlice = { accountCards: [] }

export const accountCardSlice = createSlice({
  name: 'accountCard',
  initialState,
  reducers: {
    addAccountCard: (state, action: PayloadAction <{ newAccountCard: IAccountCard }>) => {
      return { accountCards: [...state.accountCards, action.payload.newAccountCard] };
    },
    deleteAllAccountCards: () => {
      return { accountCards: [] }
    },
  },
});

export const { addAccountCard, deleteAllAccountCards } = accountCardSlice.actions;

export default accountCardSlice.reducer
