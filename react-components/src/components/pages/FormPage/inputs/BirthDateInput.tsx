import React, { ForwardedRef, forwardRef } from 'react';
import { ChangeHandler } from 'react-hook-form';

const BirthDateInput = forwardRef ((props: { onChange: ChangeHandler, onBlur: ChangeHandler, name: string }, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {

  return (
    <label className="date__label">
      <h4>Insert your birthday:</h4>
      <input
        className="date__input"
        type="date"
        name={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
        ref={ref}
        data-testid="birth-date-input"
      />
    </label>
  );
});

export default BirthDateInput;
