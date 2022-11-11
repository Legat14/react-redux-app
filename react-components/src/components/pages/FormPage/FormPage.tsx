import React, { useRef, useContext } from 'react';
import AccountCards from './components/AccountCards';
import ConfirmationWindow from './components/ConfirmationWindow';
import showCreateCardConfirmation from './functions/showCreateCardConfirmation';
import { IAllInputsData, ICheckboxesData } from 'types';
import AccountForm from './components/AccountForm';
import createAccountCard from './functions/createAccountCard';
import Context from 'store/Context';

function FormPage(): JSX.Element {
  const accountCards = useContext(Context).states.accountState.accountCards;
  const dispatch = useContext(Context).dispatches.accountDispatch;
  const confirmation = useRef(null);

  const getKey = (): number => {
    return accountCards.length;
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
    const confirmationDiv = getConfirmation();
    if (confirmationDiv) {
      showCreateCardConfirmation(confirmationDiv);
    }
  };

  const emptyAccountCard = {
    key: 0,
    name: '',
    birthDate: '',
    gender: '',
    avatarUrl: '',
    country: '',
    devices: '',
  };

  const handleReset = () => {
    dispatch({
      type: 'delete-all-account-cards',
      newAccountCard: emptyAccountCard,
    });
  };

  //TODO: Перенести кнопку Reset в форму

  return (
    <section className="form-page__section">
      <h2>React Forms</h2>
      <AccountForm handleSubmit={handleSubmit} />
      <button className="form-page__reset-btn" onClick={handleReset}>
        Reset
      </button>
      <AccountCards cardData={accountCards} />
      <ConfirmationWindow ref={confirmation} />
    </section>
  );
}

export default FormPage;
