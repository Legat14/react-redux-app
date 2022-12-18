import React, { FormEvent } from 'react';
import AccountCards from './components/AccountCards';
import ConfirmationWindow from './components/ConfirmationWindow';
import { validateAvatar, validateDate, validateName } from './functions/data-validation';
import showCreateCardConfirmation from './functions/showCreateCardConfirmation';
import { disableSubmit, enableSubmit } from './functions/toggleSubmitFunctions';
import { IAccountCard, IAccountFormInputs } from 'types';
import AccountForm from './components/AccountForm';

class FormPage extends React.Component {
  form: React.RefObject<AccountForm>;
  confirmation: React.RefObject<ConfirmationWindow>;
  state: { cards: IAccountCard[] };

  constructor(props: {}) {
    super(props);
    this.form = React.createRef();
    this.confirmation = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { cards: [] };
  }

  getKey(): number {
    return this.state.cards.length;
  }

  getNameInput(): HTMLInputElement | null {
    let nameInput = null;
    if (this.form.current && this.form.current.nameInputComp.current) {
      nameInput = this.form.current.nameInputComp.current.nameInput.current;
    }
    return nameInput;
  }

  getBirthDateInput(): HTMLInputElement | null {
    let birthDateInput = null;
    if (this.form.current && this.form.current.birthDateInputComp.current) {
      birthDateInput = this.form.current.birthDateInputComp.current.birthDateInput.current;
    }
    return birthDateInput;
  }

  getGender(genderInput: HTMLInputElement): string {
    let gender = 'Male';
    if (genderInput.checked === true) {
      gender = 'Female';
    }
    return gender;
  }

  getAvatarInput(): HTMLInputElement | null {
    let avatarInput = null;
    if (this.form.current && this.form.current.avatarInputComp.current) {
      avatarInput = this.form.current.avatarInputComp.current.avatarInput.current;
    }
    return avatarInput;
  }

  getAvatarInputBtn(): HTMLButtonElement | null {
    let avatarInputBtn = null;
    if (this.form.current && this.form.current.avatarInputComp.current) {
      avatarInputBtn = this.form.current.avatarInputComp.current.avatarInputBtn.current;
    }
    return avatarInputBtn;
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
    if (this.form.current) {
      nameMistakeMessage = this.form.current.nameMistakeMessage.current;
    }
    return nameMistakeMessage;
  }

  getDateMistakeMessage(): HTMLParagraphElement | null {
    let dateMistakeMessage = null;
    if (this.form.current) {
      dateMistakeMessage = this.form.current.dateMistakeMessage.current;
    }
    return dateMistakeMessage;
  }

  getAvatarMistakeMessage(): HTMLParagraphElement | null {
    let avatarMistakeMessage = null;
    if (this.form.current) {
      avatarMistakeMessage = this.form.current.avatarMistakeMessage.current;
    }
    return avatarMistakeMessage;
  }

  getConfirmationDiv(): HTMLDivElement | null {
    let confirmationDiv = null;
    if (this.confirmation.current) {
      confirmationDiv = this.confirmation.current.confirmationDiv.current;
    }
    return confirmationDiv;
  }

  getSubmitInput(): HTMLInputElement | null {
    let submitInput = null;
    if (this.form.current && this.form.current.submitComp.current) {
      submitInput = this.form.current.submitComp.current.submitInput.current;
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

    const form = event.currentTarget;
    const formElements = form.elements as typeof form.elements & IAccountFormInputs;

    console.log(formElements);

    const nameInput = formElements['name-input'];
    const birthDateInput = formElements['date-input'];
    const genderInput = formElements['gender-input'];
    const avatarInput = formElements['avatar-input'];
    const countryInput = formElements['country-input'];
    const pcCheckbox = formElements['pc'];
    const ps5Checkbox = formElements['ps5'];
    const xBoxCheckbox = formElements['Xbox'];
    const switchCheckbox = formElements['switch'];
    const submitInput = formElements['submit-input'];
    const confirmationDiv = this.getConfirmationDiv();

    const key = this.getKey();
    const name = nameInput.value;
    const birthDate = birthDateInput.value;
    const gender = this.getGender(genderInput);
    const avatar = avatarInput.value;
    const country = countryInput.value;
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
      <section className="form-page__section">
        <h2>React Forms</h2>
        <AccountForm ref={this.form} onSubmit={this.handleSubmit} />
        <AccountCards cardData={this.state.cards} />
        <ConfirmationWindow ref={this.confirmation} />
      </section>
    );
  }
}

export default FormPage;
