import React, { useRef, useState } from 'react';
import AccountCards from './components/AccountCards';
import ConfirmationWindow from './components/ConfirmationWindow';
import showCreateCardConfirmation from './functions/showCreateCardConfirmation';
import { IAccountCard, IAllInputsData, ICheckboxesData } from 'types';
import AccountForm from './components/AccountForm';
import createAccountCard from './functions/createAccountCard';

function FormPage(): JSX.Element {
  const [accountCards, setAccountCards] = useState<IAccountCard[] | []>([]);
  const accountForm = useRef<HTMLElement>(null);
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
    const accountCard = createAccountCard(key, inputsData, checkboxesData);
    const previousAccountCards = accountCards;
    const newAccountCards = [...previousAccountCards, accountCard];
    setAccountCards(newAccountCards as IAccountCard[]);
    const confirmationDiv = getConfirmation();

    if (confirmationDiv) {
      showCreateCardConfirmation(confirmationDiv);
    }
  };

  return (
    <section className="form-page__section">
      <h2>React Forms</h2>
      <AccountForm handleSubmit={handleSubmit} ref={accountForm} />
      <AccountCards cardData={accountCards} />
      <ConfirmationWindow ref={confirmation} />
    </section>
  );
}

export default FormPage;
