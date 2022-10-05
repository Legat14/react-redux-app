import AccountCardsDiv from 'components/Account-cards-div';
import React from 'react';
import Form from '../Form';

class FormPage extends React.Component {
  form: React.RefObject<Form>;
  state: { cards: number[] };

  constructor(props: {}) {
    super(props);
    this.form = React.createRef();
    this.getInputData = this.getInputData.bind(this);
    this.state = { cards: [] };
  }

  getInputData(event: React.SyntheticEvent): void {
    console.log('Ref: ', this.form.current?.submitComp.current);
    console.log('Target', event.target);

    const target = event.currentTarget;
    let newObj = {};
    this.setState((previous: { cards: number[] }) => {
      const cards = [...previous.cards];
      cards.push(1);
      newObj = { cards: cards };
      return newObj;
    });

    if (this.form.current && this.form.current.inputComp.current && this.form.current.inputComp.current.inputInput.current) {
      const inputValue = this.form.current.inputComp.current.inputInput.current.value;
      console.log('inputValue', inputValue);
    }
    if (this.form.current && this.form.current.dateComp.current && this.form.current.dateComp.current.dateInput.current) {
      const dateValue = this.form.current.dateComp.current.dateInput.current.value;
      console.log('dateValue', dateValue);
    }
  }

  render(): JSX.Element {
    return (
      <section className="form-page__section" onSubmit={this.getInputData}>
        <h2>React Forms</h2>
        <Form ref={this.form} />
        <AccountCardsDiv
        number={ this.state.cards }
      />
      </section>
    );
  }
}

export default FormPage;
