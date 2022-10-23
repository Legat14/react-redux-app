import React, { FormEvent, useEffect, useRef, useState } from 'react';
import AccountCards from './components/AccountCards';
import ConfirmationWindow from './components/ConfirmationWindow';
import { validateAvatar, validateDate, validateName } from './functions/data-validation';
import showCreateCardConfirmation from './functions/showCreateCardConfirmation';
import { disableSubmit, enableSubmit } from './functions/toggleSubmitFunctions';
import { IAccountCard } from 'types';
import AccountForm from './components/AccountForm';

function FormPage(): JSX.Element{

  const [cards, setCards] = useState<IAccountCard[] | []>([]);
  const accountForm = useRef(null);
  const confirmation = useRef(null);

  const getKey = (): number => {
    return cards.length;
  }

  const getNameInput = (): HTMLInputElement | null => {
    let nameInput = null;
    if (accountForm.current && (accountForm.current as AccountForm).nameInputComp.current) {
      nameInput = (accountForm.current as AccountForm).nameInputComp.current!.nameInput.current;
    }
    return nameInput;
  }

  const getInputValue = (nameInput: HTMLInputElement | HTMLSelectElement | null): string => {
    let inputValue = '';
    if (nameInput) {
      inputValue = nameInput.value;
    }
    return inputValue;
  }

  const getBirthDateInput = (): HTMLInputElement | null => {
    let birthDateInput = null;
    if (accountForm.current && (accountForm.current as AccountForm).birthDateInputComp.current) {
      birthDateInput = (accountForm.current as AccountForm).birthDateInputComp.current!.birthDateInput.current;
    }
    return birthDateInput;
  }

  const getGender = (): string => {
    let genderSwitcherValue = false;
    if (
      accountForm.current &&
      (accountForm.current as AccountForm).genderInputComp.current &&
      (accountForm.current as AccountForm).genderInputComp.current!.switcher.current
    ) {
      genderSwitcherValue = (accountForm.current as AccountForm).genderInputComp.current!.switcher.current!.checked;
    }

    let gender = 'Male';
    if (genderSwitcherValue) {
      gender = 'Female';
    }
    return gender;
  }

  const getAvatarInput = (): HTMLInputElement | null => {
    let avatarInput = null;
    if (accountForm.current && (accountForm.current as AccountForm).avatarInputComp.current) {
      avatarInput = (accountForm.current as AccountForm).avatarInputComp.current!.avatarInput.current;
    }
    return avatarInput;
  }

  const getAvatarInputBtn = (): HTMLButtonElement | null => {
    let avatarInputBtn = null;
    if (accountForm.current && (accountForm.current as AccountForm).avatarInputComp.current) {
      avatarInputBtn = (accountForm.current as AccountForm).avatarInputComp.current!.avatarInputBtn.current;
    }
    return avatarInputBtn;
  }

  const getCountryInput = (): HTMLSelectElement | null => {
    let countryInput = null;
    if (accountForm.current && (accountForm.current as AccountForm).countryInputComp.current) {
      countryInput = (accountForm.current as AccountForm).countryInputComp.current!.countryInput.current;
    }
    return countryInput;
  }

  const getPcCheckbox = (): HTMLInputElement | null => {
    let pcCheckbox = null;
    if (accountForm.current && (accountForm.current as AccountForm).devicesInputComp.current) {
      pcCheckbox = (accountForm.current as AccountForm).devicesInputComp.current!.pcCheckbox.current;
    }
    return pcCheckbox;
  }

  const getPs5Checkbox = (): HTMLInputElement | null => {
    let pS5Checkbox = null;
    if (accountForm.current && (accountForm.current as AccountForm).devicesInputComp.current) {
      pS5Checkbox = (accountForm.current as AccountForm).devicesInputComp.current!.ps5Checkbox.current;
    }
    return pS5Checkbox;
  }

  const getXboxCheckbox = (): HTMLInputElement | null => {
    let xBoxCheckbox = null;
    if (accountForm.current && (accountForm.current as AccountForm).devicesInputComp.current) {
      xBoxCheckbox = (accountForm.current as AccountForm).devicesInputComp.current!.xBoxCheckbox.current;
    }
    return xBoxCheckbox;
  }

  const getSwitchCheckbox = (): HTMLInputElement | null => {
    let switchCheckbox = null;
    if (accountForm.current && (accountForm.current as AccountForm).devicesInputComp.current) {
      switchCheckbox = (accountForm.current as AccountForm).devicesInputComp.current!.switchCheckbox.current;
    }
    return switchCheckbox;
  }

  const getDevices = ({
    pcCheckbox,
    ps5Checkbox,
    xBoxCheckbox,
    switchCheckbox,
  }: {
    pcCheckbox: HTMLInputElement | null;
    ps5Checkbox: HTMLInputElement | null;
    xBoxCheckbox: HTMLInputElement | null;
    switchCheckbox: HTMLInputElement | null;
  }): string => {
    let devices = ['none :-('];
    let pcCheckboxValue = false;
    if (pcCheckbox) {
      pcCheckboxValue = pcCheckbox.checked;
    }
    let ps5CheckboxValue = false;
    if (ps5Checkbox) {
      ps5CheckboxValue = ps5Checkbox.checked;
    }
    let xBoxCheckboxValue = false;
    if (xBoxCheckbox) {
      xBoxCheckboxValue = xBoxCheckbox.checked;
    }
    let switchCheckboxValue = false;
    if (switchCheckbox) {
      switchCheckboxValue = switchCheckbox.checked;
    }
    if (pcCheckboxValue || ps5CheckboxValue || xBoxCheckboxValue || switchCheckboxValue) {
      devices = [];
    }
    if (pcCheckboxValue) {
      devices.push('PC');
    }
    if (ps5CheckboxValue) {
      devices.push('PS5');
    }
    if (xBoxCheckboxValue) {
      devices.push('Xbox series X');
    }
    if (switchCheckboxValue) {
      devices.push('Switch');
    }
    const devicesStr = devices.join(', ');
    return devicesStr;
  }

  const getNameMistakeMessage = (): HTMLParagraphElement | null => {
    let nameMistakeMessage = null;
    if (accountForm.current) {
      nameMistakeMessage = (accountForm.current as AccountForm).nameMistakeMessage.current;
    }
    return nameMistakeMessage;
  }

  const getDateMistakeMessage = (): HTMLParagraphElement | null => {
    let dateMistakeMessage = null;
    if (accountForm.current) {
      dateMistakeMessage = (accountForm.current as AccountForm).dateMistakeMessage.current;
    }
    return dateMistakeMessage;
  }

  const getAvatarMistakeMessage = (): HTMLParagraphElement | null => {
    let avatarMistakeMessage = null;
    if (accountForm.current) {
      avatarMistakeMessage = (accountForm.current as AccountForm).avatarMistakeMessage.current;
    }
    return avatarMistakeMessage;
  }

  const getConfirmation = (): HTMLDivElement | null => {
    let confirmationElement = null;
    if (confirmation.current) {
      confirmationElement = confirmation.current;
    }
    return confirmationElement;
  }

  const getSubmitInput = (): HTMLInputElement | null => {
    let submitInput = null;
    if (accountForm.current && (accountForm.current as AccountForm).submitComp.current) {
      submitInput = (accountForm.current as AccountForm).submitComp.current!.submitInput.current;
    }
    return submitInput;
  }

  const cleanInput = (input: HTMLInputElement | null): void => {
    if (input) {
      input.value = '';
    }
  }

  const uncheckCheckbox = (checkbox: HTMLInputElement | null): void => {
    if (checkbox) {
      checkbox.checked = false;
    }
  }

  const createAccountCard = ({
    key,
    name,
    birthDate,
    gender,
    avatar,
    avatarUrl,
    country,
    devices,
  }: IAccountCard): void => {
    const newAccoutData = {
      key,
      name,
      birthDate,
      avatar,
      avatarUrl,
      gender,
      country,
      devices,
    };

    const newCardsState = [...cards, newAccoutData];
    setCards(newCardsState);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const nameInput = getNameInput();
    const birthDateInput = getBirthDateInput();
    const avatarInput = getAvatarInput();
    const countryInput = getCountryInput();
    const pcCheckbox = getPcCheckbox();
    const ps5Checkbox = getPs5Checkbox();
    const xBoxCheckbox = getXboxCheckbox();
    const switchCheckbox = getSwitchCheckbox();
    const submitInput = getSubmitInput();
    const confirmationDiv = getConfirmation();

    const key = getKey();
    const name = getInputValue(nameInput);
    const birthDate = getInputValue(birthDateInput);
    const gender = getGender();
    const avatar = getInputValue(avatarInput);
    const country = getInputValue(countryInput);
    const devices = getDevices({
      pcCheckbox,
      ps5Checkbox,
      xBoxCheckbox,
      switchCheckbox,
    });
    let avatarUrl = '';
    if (avatarInput && avatarInput.files && avatarInput.files[0]) {
      avatarUrl = URL.createObjectURL(avatarInput.files[0]);
    }

    const nameIsValid = validateName(name);
    const dateIsValid = validateDate(birthDate);
    const avatarIsValid = validateAvatar(avatar);

    const nameMistakeMessage = getNameMistakeMessage();
    const dateMistakeMessage = getDateMistakeMessage();
    const avatarMistakeMessage = getAvatarMistakeMessage();

    let isValid = true;

    if (!nameIsValid) {
      isValid = false;
      cleanInput(nameInput);
      if (nameMistakeMessage) {
        nameMistakeMessage.classList.remove('form__mistake-message_hidden');
      }
    } else {
      if (nameMistakeMessage) {
        nameMistakeMessage.classList.add('form__mistake-message_hidden');
      }
    }

    if (!dateIsValid) {
      isValid = false;
      cleanInput(birthDateInput);
      if (dateMistakeMessage) {
        dateMistakeMessage.classList.remove('form__mistake-message_hidden');
      }
    } else {
      if (dateMistakeMessage) {
        dateMistakeMessage.classList.add('form__mistake-message_hidden');
      }
    }

    if (!avatarIsValid) {
      isValid = false;
      if (avatarMistakeMessage) {
        avatarMistakeMessage.classList.remove('form__mistake-message_hidden');
      }
    } else {
      if (avatarMistakeMessage) {
        avatarMistakeMessage.classList.add('form__mistake-message_hidden');
      }
    }

    if (isValid) {
      createAccountCard({
        key,
        name,
        birthDate,
        gender,
        avatar,
        avatarUrl,
        country,
        devices,
      });
      cleanInput(nameInput);
      cleanInput(birthDateInput);
      cleanInput(avatarInput);
      uncheckCheckbox(pcCheckbox);
      uncheckCheckbox(ps5Checkbox);
      uncheckCheckbox(xBoxCheckbox);
      uncheckCheckbox(switchCheckbox);
      if (nameMistakeMessage) {
        nameMistakeMessage.classList.add('form__mistake-message_hidden');
      }
      if (dateMistakeMessage) {
        dateMistakeMessage.classList.add('form__mistake-message_hidden');
      }
      if (confirmationDiv) {
        showCreateCardConfirmation(confirmationDiv);
      }
    }
    if (submitInput) {
      disableSubmit(submitInput);
    }
  }

  const addPressButtonEvent = () => {
    const avatarInput = getAvatarInput();
    const avatarInputBtn = getAvatarInputBtn();
    if (avatarInputBtn) {
      avatarInputBtn.addEventListener('click', (): void => {
        if (avatarInput) {
          avatarInput.click();
        }
      });
    }
  }

  const addEnableSubmitEvents = () => {
    const nameInput = getNameInput();
    const birthDateInput = getBirthDateInput();
    const avatarInput = getAvatarInput();
    const submitInput = getSubmitInput();
    if (nameInput && submitInput) {
      nameInput.addEventListener('input', () => {
        enableSubmit(submitInput);
      });
    }
    if (birthDateInput && submitInput) {
      birthDateInput.addEventListener('input', () => {
        enableSubmit(submitInput);
      });
    }
    if (avatarInput && submitInput) {
      avatarInput.addEventListener('input', () => {
        enableSubmit(submitInput);
      });
    }
  }

  useEffect(() => {
    addEnableSubmitEvents();
    addPressButtonEvent();
  });

  return (
    <section className="form-page__section" onSubmit={handleSubmit}>
      <h2>React Forms</h2>
      <AccountForm ref={accountForm} />
      <AccountCards cardData={cards} />
      <ConfirmationWindow ref={confirmation} />
    </section>
  );
}

export default FormPage;
