import React, { FormEvent, LegacyRef } from 'react';
import Input from './inputs/Input';
import Submit from './inputs/Submit';

class Form extends React.Component {
  public inputComp: React.RefObject<Input>;

  constructor(props: {}) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputComp = React.createRef();
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Submited');
    const inputInstance = this.inputComp.current;
    if (inputInstance && inputInstance.input && inputInstance.input.current) {
      const inputValue = inputInstance.input.current.value;
      console.log(inputValue);
    }
  }

  render(): JSX.Element {
    return (
    <form onSubmit={this.handleSubmit}>
      <h3>Create your account</h3>
      <Input ref={this.inputComp} />
      <Submit />
    </form>
    )
  }
}

  export default Form;
