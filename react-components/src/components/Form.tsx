import React, { FormEvent } from 'react';
import DateInput from './inputs/Date-input';
import Input from './inputs/Input-input';
import Submit from './inputs/Submit';

class Form extends React.Component {
  public inputComp: React.RefObject<Input>;
  public dateComp: React.RefObject<DateInput>;

  constructor(props: {}) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputComp = React.createRef();
    this.dateComp = React.createRef();
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Submited');
    const inputInstance = this.inputComp.current;
    if (inputInstance && inputInstance.inputInput && inputInstance.inputInput.current) {
      const inputValue = inputInstance.inputInput.current.value;
      console.log(inputValue);
    }
    const dateInstance = this.dateComp.current;
    if (dateInstance && dateInstance.dateInput && dateInstance.dateInput.current) {
      const dateValue = dateInstance.dateInput.current.value;
      console.log(dateValue);
    }
  }

  render(): JSX.Element {
    return (
    <form onSubmit={this.handleSubmit}>
      <h3>Create your account</h3>
      <Input ref={this.inputComp} />
      <DateInput ref={this.dateComp} />
      <Submit />
    </form>
    )
  }
}

  export default Form;
