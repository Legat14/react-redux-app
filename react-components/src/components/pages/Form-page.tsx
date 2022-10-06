import AccountCardsDiv from 'components/Account-cards-div';
import { validateDate, validateName } from 'components/Data-validation';
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

  getInputValue(nameInput: HTMLInputElement | null): string {
    let inputValue = '';
    if (nameInput) {
      inputValue = nameInput.value;
    }
    return inputValue;
  }

  getBirthDateInput(): HTMLInputElement | null {
    let birthDateInput = null;
    if (this.form.current && this.form.current.birthDateComp.current) {
      birthDateInput = this.form.current.birthDateComp.current.birthDateInput.current;
    }
    return birthDateInput;
  }

  // getBirthDate(): string {
  //   let dateValue = '';
  //   if (this.form.current && this.form.current.dateComp.current &&
  //     this.form.current.dateComp.current.dateInput.current) {
  //     dateValue = this.form.current.dateComp.current.dateInput.current.value;
  //   }
  //   return dateValue;
  // }

  getGender(): string {
    let genderSwitcherValue = false;
    if (this.form.current && this.form.current.switcherComp.current &&
      this.form.current.switcherComp.current.switcher.current) {
      genderSwitcherValue = this.form.current.switcherComp.current.switcher.current.checked;
      console.log('genderSwitcherValue', genderSwitcherValue);
    }
    
    let gender = 'Female';
    if (genderSwitcherValue) {
      gender = 'Male';
    }
    return gender;
  }

  getAvatar(): string {
    let imgSrc = '';
    if (this.form.current && this.form.current.fileComp.current &&
      this.form.current.fileComp.current.fileInput.current) {
      imgSrc = this.form.current.fileComp.current.fileInput.current.value;
      console.log('imgSrc', imgSrc);
    }
    return imgSrc;
  }

  getCountry(): string {
    let selectValue = '';
    if (this.form.current && this.form.current.selectComp.current &&
      this.form.current.selectComp.current.selectInput.current) {
      selectValue = this.form.current.selectComp.current.selectInput.current.value;
    }
    return selectValue;
  }

  getDevices(): string {
    let devices = ['none :-('];
    let pcCheckboxValue = false;
    if (this.form.current && this.form.current.checkboxComp.current &&
      this.form.current.checkboxComp.current.pcCheckbox.current) {
      pcCheckboxValue = this.form.current.checkboxComp.current.pcCheckbox.current.checked;
      console.log('pcCheckboxValue', pcCheckboxValue);
    }
    let ps5CheckboxValue = false;
    if (this.form.current && this.form.current.checkboxComp.current &&
      this.form.current.checkboxComp.current.ps5Checkbox.current) {
      ps5CheckboxValue = this.form.current.checkboxComp.current.ps5Checkbox.current.checked;
      console.log('ps5CheckboxValue', ps5CheckboxValue);
    }
    let xBoxCheckboxValue = false;
    if (this.form.current && this.form.current.checkboxComp.current &&
      this.form.current.checkboxComp.current.xBoxCheckbox.current) {
      xBoxCheckboxValue = this.form.current.checkboxComp.current.xBoxCheckbox.current.checked;
      console.log('xBoxCheckboxValue', xBoxCheckboxValue);
    }
    let switchCheckboxValue = false;
    if (this.form.current && this.form.current.checkboxComp.current &&
      this.form.current.checkboxComp.current.switchCheckbox.current) {
      switchCheckboxValue = this.form.current.checkboxComp.current.switchCheckbox.current.checked;
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

  cleanInput(input: HTMLInputElement | null): void {
    if (input) {
      input.value = '';
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

    const key = this.getKey();
    const name = this.getInputValue(nameInput);
    const birthDate = this.getInputValue(birthDateInput);
    const gender = this.getGender();
    const avatar = this.getAvatar();
    const country = this.getCountry();
    const devices = this.getDevices();

    const nameIsValid = validateName(name);
    const dateIsValid = validateDate(birthDate);

    const nameMistakeMessage = this.getNameMistakeMessage();
    const dateMistakeMessage = this.getDateMistakeMessage();

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
