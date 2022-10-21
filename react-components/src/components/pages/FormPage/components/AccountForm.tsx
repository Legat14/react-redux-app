import React from 'react';
import NameInput from '../inputs/NameInput';
import BirthDateInput from '../inputs/BirthDateInput';
import GenderInput from '../inputs/GenderInput';
import CountryInput from '../inputs/CountryInput';
import DevicesInput from '../inputs/DevicesInput';
import AvatarInput from '../inputs/AvatarInput';
import SubmitInput from '../inputs/SubmitInput';
import { IAccountFormRefs } from 'types';

const AccountForm = (props: {ref: React.RefObject<IAccountFormRefs>}): JSX.Element => {
  const nameInputComp = React.useRef<NameInput>(null);
  const birthDateInputComp = React.useRef<BirthDateInput>(null);
  const genderInputComp = React.useRef<GenderInput>(null);
  const avatarInputComp = React.useRef<AvatarInput>(null);
  const countryInputComp = React.useRef<CountryInput>(null);
  const devicesInputComp = React.useRef<DevicesInput>(null);
  const submitComp = React.useRef<SubmitInput>(null);
  const nameMistakeMessage = React.useRef<HTMLParagraphElement>(null);
  const dateMistakeMessage = React.useRef<HTMLParagraphElement>(null);
  const avatarMistakeMessage = React.useRef<HTMLParagraphElement>(null);

  return (
    <form className="form" data-testid="form">
      <h3>Create your account</h3>
      <NameInput ref={nameInputComp} />
      <div className="form__mistake-message-div">
        <p
          className="form__mistake-message form__mistake-message_hidden"
          ref={nameMistakeMessage}
          data-testid="mistake-message"
        >
          Name must be longer than one symbol and include at least one letter
        </p>
      </div>
      <BirthDateInput ref={birthDateInputComp} />
      <div className="form__mistake-message-div">
        <p
          className="form__mistake-message form__mistake-message_hidden"
          ref={dateMistakeMessage}
          data-testid="mistake-message"
        >
          Date must be no newer than 18 years and no elder than 100 years
        </p>
      </div>
      <GenderInput ref={genderInputComp} />
      <AvatarInput ref={avatarInputComp} />
      <div className="form__mistake-message-div">
        <p
          className="form__mistake-message form__mistake-message_hidden"
          ref={avatarMistakeMessage}
          data-testid="mistake-message"
        >
          You must choose picture for your avatar
        </p>
      </div>
      <CountryInput ref={countryInputComp} />
      <DevicesInput ref={devicesInputComp} />
      <SubmitInput ref={submitComp} />
    </form>
  );
}

export default AccountForm;
