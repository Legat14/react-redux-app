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
    const target = event.target;
    console.log(target);
    let newObj = {};
    this.setState((previous: { cards: number[] }) => {
      const cards = [...previous.cards];
      cards.push(1);
      newObj = { cards: cards };
      console.log('Previous:', previous);
      console.log('NewObject: ', newObj);
      return newObj;
    });
    console.log('NewObject: ', newObj);
  }

  render(): JSX.Element {
    return (
      <section className="form-page__section" onClick={this.getInputData}>
        <h2>React Forms</h2>
        <Form />
        <AccountCardsDiv
        number={ this.state.cards }
      />
      </section>
    );
  }
}

export default FormPage;
