import React from 'react';
import NameInput from './inputs/Name-input';
import DateInput from './inputs/Birth-date-input';
import SwitcherInput from './inputs/Switcher-input';
import SelectInput from './inputs/Select-input';
import SubmitInput from './inputs/Submit-input';
import CheckboxInput from './inputs/Checkboks-input';
import FileInput from './inputs/File-input';

class Form extends React.Component {
  public nameInputComp: React.RefObject<NameInput>;
  public birthDateComp: React.RefObject<DateInput>;
  public switcherComp: React.RefObject<SwitcherInput>;
  public fileComp: React.RefObject<FileInput>;
  public selectComp: React.RefObject<SelectInput>;
  public checkboxComp: React.RefObject<CheckboxInput>;
  public submitComp: React.RefObject<SubmitInput>;
  public nameMistakeMessage: React.RefObject<HTMLParagraphElement>;
  public dateMistakeMessage: React.RefObject<HTMLParagraphElement>;

  constructor(props: {}) {
    super(props);
    this.nameInputComp = React.createRef();
    this.birthDateComp = React.createRef();
    this.switcherComp = React.createRef();
    this.fileComp = React.createRef();
    this.selectComp = React.createRef();
    this.checkboxComp = React.createRef();
    this.submitComp = React.createRef();
    this.nameMistakeMessage = React.createRef();
    this.dateMistakeMessage = React.createRef();
  }

  render(): JSX.Element {
    return (
    <form className='form'>
      <h3>Create your account</h3>
      <NameInput ref={this.nameInputComp} />
      <p className='form__mistake-message form__mistake-message_disabled' ref={this.nameMistakeMessage}>
        Name must be longer than one symbol and include at least one letter
      </p>
      <DateInput ref={this.birthDateComp} />
      <p className='form__mistake-message form__mistake-message_disabled' ref={this.dateMistakeMessage}>
        Date must be no newer than 18 years and no elder than 100 years ago
      </p>
      <SwitcherInput ref={this.switcherComp} />
      <FileInput ref={this.fileComp} />
      <SelectInput ref={this.selectComp} />
      <CheckboxInput ref={this.checkboxComp} />
      <SubmitInput ref={this.submitComp} />
    </form>
    )
  }
}

export default Form;
