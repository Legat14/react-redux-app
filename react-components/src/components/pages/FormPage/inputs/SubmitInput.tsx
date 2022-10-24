import React, { forwardRef, ForwardedRef } from 'react';

const SubmitInput = forwardRef((props: {}, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {

  return (
    <input
      className="submit__input"
      type="submit"
      disabled={true}
      ref={ref}
      data-testid="submit-input"
    />
  );
});

export default SubmitInput;
