import React, { useRef, useState, useReducer } from 'react';
import AccountCards from './components/AccountCards';
import ConfirmationWindow from './components/ConfirmationWindow';
import showCreateCardConfirmation from './functions/showCreateCardConfirmation';
import { IAccountCard, IAllInputsData, ICheckboxesData } from 'types';
import AccountForm from './components/AccountForm';
import createAccountCard from './functions/createAccountCard';

function FormPage(): JSX.Element {
  // const [accountCards, setAccountCards] = useState<IAccountCard[] | []>([]);
    const reducer = (state: {accountCards: IAccountCard[]}, action: { type: string, newAccountCard: IAccountCard }):
    { accountCards: IAccountCard[] | [] } => {
      if(action.type === 'add-account-card') {
        const newAccountCards = [...state.accountCards, action.newAccountCard];
        return {...state, accountCards: newAccountCards};
      }
      return state;
    }
  const [state, dispatch] = useReducer(reducer, { accountCards: [] });
  const accountForm = useRef<HTMLElement>(null);
  const confirmation = useRef(null);

  const getKey = (): number => {
    return state.accountCards.length;
  };

  const getConfirmation = (): HTMLDivElement | null => {
    let confirmationElement = null;
    if (confirmation.current) {
      confirmationElement = confirmation.current;
    }
    return confirmationElement;
  };

  const handleSubmit = (inputsData: IAllInputsData, checkboxesData: ICheckboxesData): void => {
    const key = getKey();
    const newAccountCard = createAccountCard(key, inputsData, checkboxesData);
    dispatch({
      type: 'add-account-card',
      newAccountCard,
    });
    // const previousAccountCards = state.accountCards;
    // const newAccountCards = [...previousAccountCards, accountCard];
    // setAccountCards(newAccountCards as IAccountCard[]);
    const confirmationDiv = getConfirmation();

    if (confirmationDiv) {
      showCreateCardConfirmation(confirmationDiv);
    }
  };

  return (
    <section className="form-page__section">
      <h2>React Forms</h2>
      <AccountForm handleSubmit={handleSubmit} ref={accountForm} />
      <AccountCards cardData={state.accountCards} />
      <ConfirmationWindow ref={confirmation} />
    </section>
  );
}

export default FormPage;
