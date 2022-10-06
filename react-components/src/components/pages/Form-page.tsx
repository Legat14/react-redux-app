import AccountCardsDiv from 'components/Account-cards-div';
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

  getName(): string {
    let inputValue = '';
    if (this.form.current && this.form.current.inputComp.current &&
      this.form.current.inputComp.current.inputInput.current) {
      inputValue = this.form.current.inputComp.current.inputInput.current.value;
    }
    return inputValue;
  }

  getBirthDate(): string {
    let dateValue = '';
    if (this.form.current && this.form.current.dateComp.current &&
      this.form.current.dateComp.current.dateInput.current) {
      dateValue = this.form.current.dateComp.current.dateInput.current.value;
    }
    return dateValue;
  }

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

  handleSubmit(event: FormEvent<HTMLFormElement>): void {

    event.preventDefault();

    const key = this.getKey();
    const name = this.getName();
    const birthDate = this.getBirthDate();
    const gender = this.getGender();
    const avatar = this.getAvatar();
    const country = this.getCountry();
    const devices = this.getDevices();

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
