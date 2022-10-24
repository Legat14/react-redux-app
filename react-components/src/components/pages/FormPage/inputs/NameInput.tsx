import React, { ForwardedRef, forwardRef } from 'react';

const NameInput = forwardRef ((props: {}, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {

  return (
    <label className="name__label">
      <h4>Type your name:</h4>
      <input
        className="name__input"
        name="name-input"
        type="input"
        ref={ref}
        data-testid="name-input"
      />
    </label>
  );
});

export default NameInput;
