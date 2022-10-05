import React, { FormEvent } from 'react';
import DateInput from './inputs/Date-input';
import Input from './inputs/Input-input';
import SubmitInput from './inputs/Submit-input';

class Form extends React.Component {
  public inputComp: React.RefObject<Input>;
  public dateComp: React.RefObject<DateInput>;
  public submitComp: React.RefObject<SubmitInput>;

  constructor(props: {}) {
    super(props);
    this.inputComp = React.createRef();
    this.dateComp = React.createRef();
    this.submitComp = React.createRef();
  }

  render(): JSX.Element {
    return (
    <form>
      <h3>Create your account</h3>
      <Input ref={this.inputComp} />
      <DateInput ref={this.dateComp} />
      <SubmitInput ref={this.submitComp} />
    </form>
    )
  }
}

  export default Form;
