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
    this.getInputData = this.getInputData.bind(this);
    this.state = { cards: [] };
  }

  getInputData(event: FormEvent<HTMLFormElement>): void {

    event.preventDefault();

    const key = this.state.cards.length;

    let inputValue = '';
    if (this.form.current && this.form.current.inputComp.current &&
      this.form.current.inputComp.current.inputInput.current) {
      inputValue = this.form.current.inputComp.current.inputInput.current.value;
      console.log('inputValue', inputValue);
    }
    let dateValue = '';
    if (this.form.current && this.form.current.dateComp.current &&
      this.form.current.dateComp.current.dateInput.current) {
      dateValue = this.form.current.dateComp.current.dateInput.current.value;
      console.log('dateValue', dateValue);
    }
    let selectValue = '';
    if (this.form.current && this.form.current.selectComp.current &&
      this.form.current.selectComp.current.selectInput.current) {
      selectValue = this.form.current.selectComp.current.selectInput.current.value;
      console.log('selectValue', selectValue);
    }
    let devices = ['none'];
    let pcCheckboxValue = false;
    if (this.form.current && this.form.current.checkboxComp.current &&
      this.form.current.checkboxComp.current.pcCheckbox.current) {
      pcCheckboxValue = this.form.current.checkboxComp.current.pcCheckbox.current.checked;
      console.log('pcCheckboxValue', pcCheckboxValue);
    }
    if (pcCheckboxValue) {
      devices = [];
      devices.push('PC');
    }

    const newAccoutData = {
      key: key,
      name: inputValue,
      date: dateValue,
      select: selectValue,
      devices: devices,
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
      <section className="form-page__section" onSubmit={this.getInputData}>
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
