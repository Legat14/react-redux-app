import React, { FormEvent } from 'react';
import AccountCards from './components/AccountCards';
import ConfirmationWindow from './components/ConfirmationWindow';
import { validateAvatar, validateDate, validateName } from './functions/data-validation';
import showCreateCardConfirmation from './functions/showCreateCardConfirmation';
import { disableSubmit, enableSubmit } from './functions/toggleSubmitFunctions';
import { IAccountCard, IAccountFormRefs } from 'types';
import AccountForm from './components/AccountForm';

class FormPage extends React.Component {
  accountForm: React.RefObject<IAccountFormRefs>;
  confirmation: React.RefObject<HTMLDivElement>;
  state: { cards: IAccountCard[] };

  constructor(props: {}) {
    super(props);
    this.accountForm = React.createRef();
    this.confirmation = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { cards: [] };
  }

  getKey(): number {
    return this.state.cards.length;
  }

  getNameInput(): HTMLInputElement | null {
    let nameInput = null;
    if (this.accountForm.current && this.accountForm.current.nameInputComp.nameInput) {
      nameInput = this.accountForm.current.nameInputComp.nameInput.current;
    }
    return nameInput;
  }

  getInputValue(nameInput: HTMLInputElement | HTMLSelectElement | null): string {
    let inputValue = '';
    if (nameInput) {
      inputValue = nameInput.value;
    }
    return inputValue;
  }

  getBirthDateInput(): HTMLInputElement | null {
    let birthDateInput = null;
    if (this.accountForm.current && this.accountForm.current.birthDateInputComp) {
      birthDateInput = this.accountForm.current.birthDateInputComp.birthDateInput.current;
    }
    return birthDateInput;
  }

  getGender(): string {
    let genderSwitcherValue = false;
    if (
      this.accountForm.current &&
      this.accountForm.current.genderInputComp &&
      this.accountForm.current.genderInputComp.switcher.current
    ) {
      genderSwitcherValue = this.accountForm.current.genderInputComp.switcher.current.checked;
    }

    let gender = 'Male';
    if (genderSwitcherValue) {
      gender = 'Female';
    }
    return gender;
  }

  getAvatarInput(): HTMLInputElement | null {
    let avatarInput = null;
    if (this.accountForm.current && this.accountForm.current.avatarInputComp) {
      avatarInput = this.accountForm.current.avatarInputComp.avatarInput.current;
    }
    return avatarInput;
  }

  getAvatarInputBtn(): HTMLButtonElement | null {
    let avatarInputBtn = null;
    if (this.accountForm.current && this.accountForm.current.avatarInputComp) {
      avatarInputBtn = this.accountForm.current.avatarInputComp.avatarInputBtn.current;
    }
    return avatarInputBtn;
  }

  getCountryInput(): HTMLSelectElement | null {
    let countryInput = null;
    if (this.accountForm.current && this.accountForm.current.countryInputComp) {
      countryInput = this.accountForm.current.countryInputComp.countryInput.current;
    }
    return countryInput;
  }

  getPcCheckbox(): HTMLInputElement | null {
    let pcCheckbox = null;
    if (this.accountForm.current && this.accountForm.current.devicesInputComp) {
      pcCheckbox = this.accountForm.current.devicesInputComp.pcCheckbox.current;
    }
    return pcCheckbox;
  }

  getPs5Checkbox(): HTMLInputElement | null {
    let pS5Checkbox = null;
    if (this.accountForm.current && this.accountForm.current.devicesInputComp) {
      pS5Checkbox = this.accountForm.current.devicesInputComp.ps5Checkbox.current;
    }
    return pS5Checkbox;
  }

  getXboxCheckbox(): HTMLInputElement | null {
    let xBoxCheckbox = null;
    if (this.accountForm.current && this.accountForm.current.devicesInputComp) {
      xBoxCheckbox = this.accountForm.current.devicesInputComp.xBoxCheckbox.current;
    }
    return xBoxCheckbox;
  }

  getSwitchCheckbox(): HTMLInputElement | null {
    let switchCheckbox = null;
    if (this.accountForm.current && this.accountForm.current.devicesInputComp) {
      switchCheckbox = this.accountForm.current.devicesInputComp.switchCheckbox.current;
    }
    return switchCheckbox;
  }

  getDevices({
    pcCheckbox,
    ps5Checkbox,
    xBoxCheckbox,
    switchCheckbox,
  }: {
    pcCheckbox: HTMLInputElement | null;
    ps5Checkbox: HTMLInputElement | null;
    xBoxCheckbox: HTMLInputElement | null;
    switchCheckbox: HTMLInputElement | null;
  }): string {
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

  getNameMistakeMessage(): HTMLParagraphElement | null {
    let nameMistakeMessage = null;
    if (this.accountForm.current) {
      nameMistakeMessage = this.accountForm.current.nameMistakeMessage;
    }
    return nameMistakeMessage;
  }

  getDateMistakeMessage(): HTMLParagraphElement | null {
    let dateMistakeMessage = null;
    if (this.accountForm.current) {
      dateMistakeMessage = this.accountForm.current.dateMistakeMessage;
    }
    return dateMistakeMessage;
  }

  getAvatarMistakeMessage(): HTMLParagraphElement | null {
    let avatarMistakeMessage = null;
    if (this.accountForm.current) {
      avatarMistakeMessage = this.accountForm.current.avatarMistakeMessage;
    }
    return avatarMistakeMessage;
  }

  getConfirmation(): HTMLDivElement | null {
    let confirmation = null;
    if (this.confirmation.current) {
      confirmation = this.confirmation.current;
    }
    return confirmation;
  }

  getSubmitInput(): HTMLInputElement | null {
    let submitInput = null;
    if (this.accountForm.current && this.accountForm.current.submitComp) {
      submitInput = this.accountForm.current.submitComp.submitInput.current;
    }
    return submitInput;
  }

  cleanInput(input: HTMLInputElement | null): void {
    if (input) {
      input.value = '';
    }
  }

  uncheckCheckbox(checkbox: HTMLInputElement | null): void {
    if (checkbox) {
      checkbox.checked = false;
    }
  }

  createAccountCard({
    key,
    name,
    birthDate,
    gender,
    avatar,
    avatarUrl,
    country,
    devices,
  }: IAccountCard): void {
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

    let newState = {};
    this.setState((previousState: { cards: IAccountCard[] }) => {
      const cards = [...previousState.cards];
      cards.push(newAccoutData);
      newState = { cards: cards };
      return newState;
    });
  }

  handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const nameInput = this.getNameInput();
    const birthDateInput = this.getBirthDateInput();
    const avatarInput = this.getAvatarInput();
    const countryInput = this.getCountryInput();
    const pcCheckbox = this.getPcCheckbox();
    const ps5Checkbox = this.getPs5Checkbox();
    const xBoxCheckbox = this.getXboxCheckbox();
    const switchCheckbox = this.getSwitchCheckbox();
    const submitInput = this.getSubmitInput();
    const confirmationDiv = this.getConfirmation();

    const key = this.getKey();
    const name = this.getInputValue(nameInput);
    const birthDate = this.getInputValue(birthDateInput);
    const gender = this.getGender();
    const avatar = this.getInputValue(avatarInput);
    const country = this.getInputValue(countryInput);
    const devices = this.getDevices({
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

    const nameMistakeMessage = this.getNameMistakeMessage();
    const dateMistakeMessage = this.getDateMistakeMessage();
    const avatarMistakeMessage = this.getAvatarMistakeMessage();

    let isValid = true;

    if (!nameIsValid) {
      isValid = false;
      this.cleanInput(nameInput);
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
      this.cleanInput(birthDateInput);
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
      this.createAccountCard({
        key,
        name,
        birthDate,
        gender,
        avatar,
        avatarUrl,
        country,
        devices,
      });
      this.cleanInput(nameInput);
      this.cleanInput(birthDateInput);
      this.cleanInput(avatarInput);
      this.uncheckCheckbox(pcCheckbox);
      this.uncheckCheckbox(ps5Checkbox);
      this.uncheckCheckbox(xBoxCheckbox);
      this.uncheckCheckbox(switchCheckbox);
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

  addPressButtonEvent() {
    const avatarInput = this.getAvatarInput();
    const avatarInputBtn = this.getAvatarInputBtn();
    if (avatarInputBtn) {
      avatarInputBtn.addEventListener('click', (): void => {
        if (avatarInput) {
          avatarInput.click();
        }
      });
    }
  }

  addEnableSubmitEvents() {
    const nameInput = this.getNameInput();
    const birthDateInput = this.getBirthDateInput();
    const avatarInput = this.getAvatarInput();
    const submitInput = this.getSubmitInput();
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

  componentDidMount(): void {
    this.addEnableSubmitEvents();
    this.addPressButtonEvent();
  }

  render(): JSX.Element {
    return (
      <section className="form-page__section" onSubmit={this.handleSubmit}>
        <h2>React Forms</h2>
        <AccountForm ref={this.accountForm} />
        <AccountCards cardData={this.state.cards} />
        <ConfirmationWindow ref={this.confirmation} />
      </section>
    );
  }
}

export default FormPage;
