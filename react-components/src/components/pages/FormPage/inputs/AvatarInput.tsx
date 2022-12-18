import React, { useRef, forwardRef, ForwardedRef } from 'react';
import { ChangeHandler } from 'react-hook-form';

const AvatarInput = forwardRef(
  (
    props: { onChange: ChangeHandler; onBlur: ChangeHandler; name: string },
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    const avatarLabel = useRef<HTMLLabelElement | null>(null);

    const clickAvatarInput = () => {
      if (avatarLabel.current) {
        avatarLabel.current.click();
      }
    };

    return (
      <label className="avatar__label" ref={avatarLabel}>
        <h4>Load your avatar:</h4>
        <input
          className="avatar__input"
          type="file"
          accept="image/*"
          name={props.name}
          onChange={props.onChange}
          onBlur={props.onBlur}
          ref={ref}
          data-testid="avatar-input"
        />
        <button onClick={clickAvatarInput} className="avatar__button" type="button">
          Choose image file
        </button>
      </label>
    );
  }
);

export default AvatarInput;
