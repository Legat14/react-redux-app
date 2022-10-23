import React, { ForwardedRef, useRef } from 'react';

const SubmitInput = React.forwardRef((props: {}, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {

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
