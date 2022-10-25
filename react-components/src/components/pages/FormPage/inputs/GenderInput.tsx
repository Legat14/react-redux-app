import React, { ForwardedRef, forwardRef } from 'react';
import { ChangeHandler } from 'react-hook-form';

const GenderInput = forwardRef((props: { onChange: ChangeHandler, onBlur: ChangeHandler, name: string }, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {

  return (
    <div className="gender__div">
      <h4>Choose youre gender</h4>
      <label className="gender__label">
        <span>Male</span>
        <input
          className="gender__input"
          type="checkbox"
          name={props.name}
          onChange={props.onChange}
          onBlur={props.onBlur}
          ref={ref}
          data-testid="gender-input"
        />
        <div className="gender__control"></div>
        <span>Female</span>
      </label>
    </div>
  );
});

export default GenderInput;
