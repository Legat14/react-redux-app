import React, { useCallback, useRef } from 'react';
import AccountCards from './components/AccountCards';
import ConfirmationWindow from './components/ConfirmationWindow';
import showCreateCardConfirmation from './functions/showCreateCardConfirmation';
import { IAllInputsData, ICheckboxesData, RootState } from 'types';
import AccountForm from './components/AccountForm';
import createAccountCard from './functions/createAccountCard';
import { useDispatch, useSelector } from 'react-redux';
import { addAccountCard, deleteAllAccountCards } from 'store/slices/accountCardSlice';

function FormPage(): JSX.Element {
  const accountCards = useSelector((state: RootState) => state.accountCard.accountCards);
  const dispatch = useDispatch();
  const confirmation = useRef(null);
  const handleResetCallback = useCallback((): void => {
    dispatch(deleteAllAccountCards());
  }, [dispatch]);

  const handleSubmitCallback = useCallback(
    (inputsData: IAllInputsData, checkboxesData: ICheckboxesData): void => {
      const getKey = (): number => {
        return accountCards.length;
      };
      const key = getKey();
      const newAccountCard = createAccountCard(key, inputsData, checkboxesData);
      dispatch(addAccountCard({ newAccountCard }));
      const confirmationDiv = getConfirmation();
      if (confirmationDiv) {
        showCreateCardConfirmation(confirmationDiv);
      }
    },
    [dispatch, accountCards.length]
  );

  const getConfirmation = (): HTMLDivElement | null => {
    let confirmationElement = null;
    if (confirmation.current) {
      confirmationElement = confirmation.current;
    }
    return confirmationElement;
  };

  return (
    <section className="form-page__section">
      <h2>React Forms</h2>
      <AccountForm handleSubmit={handleSubmitCallback} handleReset={handleResetCallback} />
      <AccountCards cardData={accountCards} />
      <ConfirmationWindow ref={confirmation} />
    </section>
  );
}

export default FormPage;
