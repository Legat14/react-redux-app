import React, { FormEvent } from 'react';
import InputInput from './inputs/Input-input';
import DateInput from './inputs/Date-input';
import SwitcherInput from './inputs/Switcher-input';
import SelectInput from './inputs/Select-input';
import SubmitInput from './inputs/Submit-input';
import CheckboxInput from './inputs/Checkboks-input';

class Form extends React.Component {
  public inputComp: React.RefObject<InputInput>;
  public dateComp: React.RefObject<DateInput>;
  public switcherComp: React.RefObject<SwitcherInput>;
  public selectComp: React.RefObject<SelectInput>;
  public checkboxComp: React.RefObject<CheckboxInput>;
  public submitComp: React.RefObject<SubmitInput>;

  constructor(props: {}) {
    super(props);
    this.inputComp = React.createRef();
    this.dateComp = React.createRef();
    this.switcherComp = React.createRef();
    this.selectComp = React.createRef();
    this.checkboxComp = React.createRef();
    this.submitComp = React.createRef();
  }

  render(): JSX.Element {
    return (
    <form>
      <h3>Create your account</h3>
      <InputInput ref={this.inputComp} />
      <DateInput ref={this.dateComp} />
      <SwitcherInput ref={this.switcherComp} />
      <SelectInput ref={this.selectComp} />
      <CheckboxInput ref={this.checkboxComp} />
      <SubmitInput ref={this.submitComp} />
    </form>
    )
  }
}

  export default Form;
