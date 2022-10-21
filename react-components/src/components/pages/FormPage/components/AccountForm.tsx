import React, { FormEvent } from 'react';
import NameInput from '../inputs/NameInput';
import DateInput from '../inputs/BirthDateInput';
import GenderInput from '../inputs/GenderInput';
import CountryInput from '../inputs/CountryInput';
import DevicesInput from '../inputs/DevicesInput';
import AvatarInput from '../inputs/AvatarInput';
import SubmitInput from '../inputs/SubmitInput';

class AccountForm extends React.Component<{onSubmit: (event: FormEvent<HTMLFormElement>) => void}> {
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

  constructor(props: {onSubmit: (event: FormEvent<HTMLFormElement>) => void}) {
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
      <form className="form" data-testid="form" onSubmit={this.props.onSubmit}>
        <h3>Create your account</h3>
        <NameInput ref={this.nameInputComp} />
        <div className="form__mistake-message-div">
          <p
            className="form__mistake-message form__mistake-message_hidden"
            ref={this.nameMistakeMessage}
            data-testid="mistake-message"
          >
            Name must be longer than one symbol and include at least one letter
          </p>
        </div>
        <DateInput ref={this.birthDateInputComp} />
        <div className="form__mistake-message-div">
          <p
            className="form__mistake-message form__mistake-message_hidden"
            ref={this.dateMistakeMessage}
            data-testid="mistake-message"
          >
            Date must be no newer than 18 years and no elder than 100 years
          </p>
        </div>
        <GenderInput ref={this.genderInputComp} />
        <AvatarInput ref={this.avatarInputComp} />
        <div className="form__mistake-message-div">
          <p
            className="form__mistake-message form__mistake-message_hidden"
            ref={this.avatarMistakeMessage}
            data-testid="mistake-message"
          >
            You must choose picture for your avatar
          </p>
        </div>
        <CountryInput ref={this.countryInputComp} />
        <DevicesInput ref={this.devicesInputComp} />
        <SubmitInput ref={this.submitComp} />
      </form>
    );
  }
}

export default AccountForm;
