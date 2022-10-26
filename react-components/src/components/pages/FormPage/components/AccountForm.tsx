import React, { ForwardedRef, useRef, forwardRef, useState, useEffect } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import NameInput from '../inputs/NameInput';
import BirthDateInput from '../inputs/BirthDateInput';
import GenderInput from '../inputs/GenderInput';
import CountryInput from '../inputs/CountryInput';
import DevicesInput from '../inputs/DevicesInput';
import AvatarInput from '../inputs/AvatarInput';
import SubmitInput from '../inputs/SubmitInput';
import { IAllInputsData, ICheckboxesData, IDevicesInputRefs } from 'types';
import { ErrorMessage } from '@hookform/error-message';
import { validateDate } from '../functions/validateDate';

function AccountForm(
  props: {
    handleSubmit: (inputsData: IAllInputsData, checkboxesData: ICheckboxesData) => void;
  },
  ref: ForwardedRef<HTMLElement>
): JSX.Element {
  const {
    register,
    handleSubmit,
    reset,
    resetField,
    formState: { errors },
  } = useForm();

  const [isSubmited, setIsSubmited] = useState(false);

  useEffect((): void => {
    if (isSubmited === true) {
      reset();
      setIsSubmited(false);
    }
  });

  const devicesInputComp = useRef<IDevicesInputRefs>(null);

  const nameInputReg = register('nameInput', {
    onBlur: (): void => {
      if (errors.nameInput) {
        resetField('nameInput', { keepError: true });
      }
    },
    required: true,
    minLength: 2,
    pattern: /[a-zA-Zа-яА-Я]/,
  });
  const birthDateInputReg = register('birthDateInput', {
    onBlur: (event): void => {
      event.preventDefault();
      if (errors.birthDateInput) {
        resetField('birthDateInput', { keepError: true });
      }
    },
    required: true,
    validate: (value) => {
      return validateDate(value);
    },
  });
  const genderInputReg = register('genderInput');
  const avatarInputReg = register('avatarInput', {
    onBlur: (event): void => {
      event.preventDefault();
      if (errors.avatarInput) {
        resetField('avatarInput', { keepError: true });
      }
    },
    required: true,
  });
  const countryInputReg = register('countryInput');

  const getAllInputsData: SubmitHandler<FieldValues> = (inputsData): void => {
    if (errors.birthDateInput) {
      resetField('birthDateInput', { keepError: true });
    }
    if (devicesInputComp.current) {
      const checkboxesData = devicesInputComp.current.getCheckboxesData();
      props.handleSubmit(inputsData as IAllInputsData, checkboxesData);
      setIsSubmited(true);
    }
  };

  return (
    <form className="form" data-testid="form" onSubmit={handleSubmit(getAllInputsData)}>
      <h3>Create your account</h3>
      <NameInput
        name={nameInputReg.name}
        onChange={nameInputReg.onChange}
        onBlur={nameInputReg.onBlur}
        ref={nameInputReg.ref}
      />
      <div className="form__mistake-message-div">
        <ErrorMessage
          errors={errors}
          name="nameInput"
          render={() => {
            return (
              <p className="form__mistake-message" data-testid="mistake-message">
                Name must be longer than one symbol and include at least one letter
              </p>
            );
          }}
        />
      </div>
      <BirthDateInput
        name={birthDateInputReg.name}
        onChange={birthDateInputReg.onChange}
        onBlur={birthDateInputReg.onBlur}
        ref={birthDateInputReg.ref}
      />
      <div className="form__mistake-message-div">
        <ErrorMessage
          errors={errors}
          name="birthDateInput"
          render={() => {
            return (
              <p className="form__mistake-message" data-testid="mistake-message">
                Date must be no newer than 18 years and no elder than 100 years
              </p>
            );
          }}
        />
      </div>
      <GenderInput
        name={genderInputReg.name}
        onChange={genderInputReg.onChange}
        onBlur={genderInputReg.onBlur}
        ref={genderInputReg.ref}
      />
      <AvatarInput
        name={avatarInputReg.name}
        onChange={avatarInputReg.onChange}
        onBlur={avatarInputReg.onBlur}
        ref={avatarInputReg.ref}
      />
      <div className="form__mistake-message-div">
        <ErrorMessage
          errors={errors}
          name="avatarInput"
          render={() => {
            return (
              <p className="form__mistake-message" data-testid="mistake-message">
                You must choose picture for your avatar
              </p>
            );
          }}
        />
      </div>
      <CountryInput
        name={countryInputReg.name}
        onChange={countryInputReg.onChange}
        onBlur={countryInputReg.onBlur}
        ref={countryInputReg.ref}
      />
      <DevicesInput ref={devicesInputComp} />
      <SubmitInput />
    </form>
  );
}

export default forwardRef(AccountForm);
