import React, { useRef, useEffect, useContext } from 'react';
import AccountCards from './components/AccountCards';
import ConfirmationWindow from './components/ConfirmationWindow';
import showCreateCardConfirmation from './functions/showCreateCardConfirmation';
import { IAllInputsData, ICheckboxesData } from 'types';
import AccountForm from './components/AccountForm';
import createAccountCard from './functions/createAccountCard';
import Context from 'model/Context';

function FormPage(): JSX.Element {
  const state = useContext(Context).state;
  const dispatch = useContext(Context).dispatch;
  const accountForm = useRef<HTMLElement>(null);
  const confirmation = useRef(null);
  
  console.log('Context: ', useContext(Context));

  useEffect(() => {
    console.log(state.accountCards);
  });

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
    const confirmationDiv = getConfirmation();
    if (confirmationDiv) {
      showCreateCardConfirmation(confirmationDiv);
    }
  };

  const handleReset = () => {
    dispatch({
      type: 'delete-all-account-cards',
      newAccountCard: {
        key: 0,
        name: '',
        birthDate: '',
        gender: '',
        avatarUrl: '',
        country: '',
        devices: '',
      },
    });
  }

  //TODO: Перенести кнопку Reset в форму

  return (
    <section className="form-page__section">
      <h2>React Forms</h2>
      <AccountForm handleSubmit={handleSubmit} ref={accountForm} />
      <button className='form-page__reset-btn' onClick={handleReset}>Reset</button>
      <AccountCards cardData={state.accountCards} />
      <ConfirmationWindow ref={confirmation} />
    </section>
  );
}

export default FormPage;
