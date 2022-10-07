import AccountCardsDiv from 'components/Account-cards-div';
import { validateAvatar, validateDate, validateName } from 'components/Data-validation';
import React, { FormEvent } from 'react';
import { IAccountCard } from 'types';
import Form from '../Form';

class FormPage extends React.Component {
  form: React.RefObject<Form>;
  state: { cards: IAccountCard[] };

  constructor(props: {}) {
    super(props);
    this.form = React.createRef();
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

  getInputValue(nameInput: HTMLInputElement | HTMLSelectElement | null): string {
    let inputValue = '';
    if (nameInput) {
      inputValue = nameInput.value;
    }
    return inputValue;
  }

  getBirthDateInput(): HTMLInputElement | null {
    let birthDateInput = null;
    if (this.form.current && this.form.current.birthDateInputComp.current) {
      birthDateInput = this.form.current.birthDateInputComp.current.birthDateInput.current;
    }
    return birthDateInput;
  }

  getGender(): string {
    let genderSwitcherValue = false;
    if (this.form.current && this.form.current.genderInputComp.current &&
      this.form.current.genderInputComp.current.switcher.current) {
      genderSwitcherValue = this.form.current.genderInputComp.current.switcher.current.checked;
      console.log('genderSwitcherValue', genderSwitcherValue);
    }

    let gender = 'Female';
    if (genderSwitcherValue) {
      gender = 'Male';
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

  getCountryInput(): HTMLSelectElement | null {
    let countryInput = null;
    if (this.form.current && this.form.current.countryInputComp.current) {
      countryInput = this.form.current.countryInputComp.current.countryInput.current;
    }
    return countryInput;
  }

  getPcCheckbox(): HTMLInputElement | null {
    let pcCheckbox = null;
    if (this.form.current && this.form.current.devicesInputComp.current) {
      pcCheckbox = this.form.current.devicesInputComp.current.pcCheckbox.current;
    }
    return pcCheckbox;
  }

  getPs5Checkbox(): HTMLInputElement | null {
    let pS5Checkbox = null;
    if (this.form.current && this.form.current.devicesInputComp.current) {
      pS5Checkbox = this.form.current.devicesInputComp.current.ps5Checkbox.current;
    }
    return pS5Checkbox;
  }

  getXboxCheckbox(): HTMLInputElement | null {
    let xBoxCheckbox = null;
    if (this.form.current && this.form.current.devicesInputComp.current) {
      xBoxCheckbox = this.form.current.devicesInputComp.current.xBoxCheckbox.current;
    }
    return xBoxCheckbox;
  }

  getSwitchCheckbox(): HTMLInputElement | null {
    let switchCheckbox = null;
    if (this.form.current && this.form.current.devicesInputComp.current) {
      switchCheckbox = this.form.current.devicesInputComp.current.switchCheckbox.current;
    }
    return switchCheckbox;
  }

  getDevices({
    pcCheckbox,
    ps5Checkbox,
    xBoxCheckbox,
    switchCheckbox,
  }: {
    pcCheckbox: HTMLInputElement | null
    ps5Checkbox: HTMLInputElement | null
    xBoxCheckbox: HTMLInputElement | null
    switchCheckbox: HTMLInputElement | null
  }): string {
    let devices = ['none :-('];
    let pcCheckboxValue = false;
    if (pcCheckbox) {
      pcCheckboxValue = pcCheckbox.checked;
    }
    let ps5CheckboxValue = false;
    if (ps5Checkbox) {
      ps5CheckboxValue = ps5Checkbox.checked;
      console.log('ps5CheckboxValue', ps5CheckboxValue);
    }
    let xBoxCheckboxValue = false;
    if (xBoxCheckbox) {
      xBoxCheckboxValue = xBoxCheckbox.checked;
      console.log('xBoxCheckboxValue', xBoxCheckboxValue);
    }
    let switchCheckboxValue = false;
    if (switchCheckbox) {
      switchCheckboxValue = switchCheckbox.checked;
      console.log('switchCheckboxValue', switchCheckboxValue);
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
    key: key,
    name: name,
    birthDate: birthDate,
    gender: gender,
    avatar: avatar,
    country: country,
    devices: devices,
  }: IAccountCard): void {
    const newAccoutData = {
      key,
      name,
      birthDate,
      avatar,
      gender,
      country,
      devices,
    }

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
        nameMistakeMessage.classList.remove('form__mistake-message_disabled');
      }
    } else {
      if (nameMistakeMessage) {
        nameMistakeMessage.classList.add('form__mistake-message_disabled');
      }
    }

    if (!dateIsValid) {
      isValid = false;
      this.cleanInput(birthDateInput);
      if (dateMistakeMessage) {
        dateMistakeMessage.classList.remove('form__mistake-message_disabled');
      }
    } else {
      if (dateMistakeMessage) {
        dateMistakeMessage.classList.add('form__mistake-message_disabled');
      }
    }
    
    if (!avatarIsValid) {
      isValid = false;
      if (avatarMistakeMessage) {
        avatarMistakeMessage.classList.remove('form__mistake-message_disabled');
      }
    } else {
      if (avatarMistakeMessage) {
        avatarMistakeMessage.classList.add('form__mistake-message_disabled');
      }
    }

    if (isValid) {
      this.createAccountCard({
        key: key,
        name: name,
        birthDate: birthDate,
        gender: gender,
        avatar: avatar,
        country: country,
        devices: devices,
      });
      this.cleanInput(nameInput);
      this.cleanInput(birthDateInput);
      this.cleanInput(avatarInput);
      this.uncheckCheckbox(pcCheckbox);
      this.uncheckCheckbox(ps5Checkbox);
      this.uncheckCheckbox(xBoxCheckbox);
      this.uncheckCheckbox(switchCheckbox);
      if (nameMistakeMessage) {
        nameMistakeMessage.classList.add('form__mistake-message_disabled');
      }
      if (dateMistakeMessage) {
        dateMistakeMessage.classList.add('form__mistake-message_disabled');
      }
    }
  }

  render(): JSX.Element {
    return (
      <section className="form-page__section" onSubmit={this.handleSubmit}>
        <h2>React Forms</h2>
        <Form ref={this.form} />
        <AccountCardsDiv
        cardData={ this.state.cards }
      />
      </section>
    );
  }
}

export default FormPage;
