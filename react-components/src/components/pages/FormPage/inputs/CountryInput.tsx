import React, { forwardRef, ForwardedRef } from 'react';
import { ChangeHandler } from 'react-hook-form';

const CountryInput = forwardRef((props: { onChange: ChangeHandler, onBlur: ChangeHandler, name: string }, ref: ForwardedRef<HTMLSelectElement>): JSX.Element => {

  return (
    <label className="country__label">
      <h4>Choose your country:</h4>
      <select
        className="country__input"
        name={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
        ref={ref}
        data-testid="country-input"
      >
        <option value={'Russia'}>Russia</option>
        <option value={'Ukraine'}>Ukraine</option>
        <option value={'Belarus'}>Belarus</option>
        <option value={'Kazakhstan'}>Kazakhstan</option>
        <option value={'Finland'}>Finland</option>
      </select>
    </label>
  );
});

export default CountryInput;
