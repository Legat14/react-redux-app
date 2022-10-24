import React, { ForwardedRef, forwardRef } from 'react';

const SwitcherInput = forwardRef((props: {}, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {

  return (
    <div className="gender__div">
      <h4>Choose youre gender</h4>
      <label className="gender__label">
        <span>Male</span>
        <input
          className="gender__input"
          name="gender"
          type="checkbox"
          ref={ref}
          data-testid="gender-input"
        />
        <div className="gender__control"></div>
        <span>Female</span>
      </label>
    </div>
  );
});

export default SwitcherInput;
