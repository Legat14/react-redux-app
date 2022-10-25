import React, { ForwardedRef, forwardRef } from 'react';
import { ChangeHandler } from 'react-hook-form';

const NameInput = forwardRef(
  (
    props: { onChange: ChangeHandler; onBlur: ChangeHandler; name: string },
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <label className="name__label">
        <h4>Type your name:</h4>
        <input
          className="name__input"
          type="input"
          name={props.name}
          onChange={props.onChange}
          onBlur={props.onBlur}
          ref={ref}
          data-testid="name-input"
        />
      </label>
    );
  }
);

export default NameInput;
