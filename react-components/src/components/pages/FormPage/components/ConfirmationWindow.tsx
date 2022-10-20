import React, { ForwardedRef } from 'react';

export const ConfirmationWindow = React.forwardRef((props: {}, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {

    return (
      <div className="confirmation__div confirmation__div_disabled" ref={ref}>
        <h3>Congratulations!</h3>
        <p>Your account was created</p>
      </div>
    );
  }
)

export default ConfirmationWindow;
