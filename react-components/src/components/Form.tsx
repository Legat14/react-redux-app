import React from 'react';
import NameInput from './inputs/Name-input';
import DateInput from './inputs/Birth-date-input';
import GenderInput from './inputs/Gender-input';
import CountryInput from './inputs/Country-input';
import DevicesInput from './inputs/Devices-input';
import AvatarInput from './inputs/Avatar-input';
import SubmitInput from './inputs/Submit-input';

class Form extends React.Component {
  public nameInputComp: React.RefObject<NameInput>;
  public birthDateInputComp: React.RefObject<DateInput>;
  public genderInputComp: React.RefObject<GenderInput>;
  public avatarInputComp: React.RefObject<AvatarInput>;
  public countryInputComp: React.RefObject<CountryInput>;
  public devicesInputComp: React.RefObject<DevicesInput>;
  public submitComp: React.RefObject<SubmitInput>;
  public nameMistakeMessage: React.RefObject<HTMLParagraphElement>;
  public dateMistakeMessage: React.RefObject<HTMLParagraphElement>;
  public avatarMistakeMessage: React.RefObject<HTMLParagraphElement>;

  constructor(props: {}) {
    super(props);
    this.nameInputComp = React.createRef();
    this.birthDateInputComp = React.createRef();
    this.genderInputComp = React.createRef();
    this.avatarInputComp = React.createRef();
    this.countryInputComp = React.createRef();
    this.devicesInputComp = React.createRef();
    this.submitComp = React.createRef();
    this.nameMistakeMessage = React.createRef();
    this.dateMistakeMessage = React.createRef();
    this.avatarMistakeMessage = React.createRef();
  }

  render(): JSX.Element {
    return (
    <form className='form' data-testid="form">
      <h3>Create your account</h3>
      <NameInput ref={this.nameInputComp} />
      <p className='form__mistake-message form__mistake-message_hidden' ref={this.nameMistakeMessage}>
        Name must be longer than one symbol and include at least one letter
      </p>
      <DateInput ref={this.birthDateInputComp} />
      <p className='form__mistake-message form__mistake-message_hidden' ref={this.dateMistakeMessage}>
        Date must be no newer than 18 years and no elder than 100 years
      </p>
      <GenderInput ref={this.genderInputComp} />
      <AvatarInput ref={this.avatarInputComp} />
      <p className='form__mistake-message form__mistake-message_hidden' ref={this.avatarMistakeMessage}>
        You must choose picture for your avatar
      </p>
      <CountryInput ref={this.countryInputComp} />
      <DevicesInput ref={this.devicesInputComp} />
      <SubmitInput ref={this.submitComp} />
    </form>
    )
  }
}

export default Form;
