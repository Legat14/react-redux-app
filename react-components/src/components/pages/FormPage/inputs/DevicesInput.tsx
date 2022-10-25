import React, { ForwardedRef, forwardRef, useImperativeHandle } from 'react';
import { useForm } from 'react-hook-form';
import { ICheckboxesData, IDevicesInputRefs } from 'types';

function DevicesInput(props: {}, ref: ForwardedRef<IDevicesInputRefs>): JSX.Element {
  const { register, watch } = useForm();

  useImperativeHandle(ref, () => {
    return {
      getCheckboxesData: (): ICheckboxesData => {
        return {
          pcCheckbox: watch('pcCheckbox'),
          ps5Checkbox: watch('ps5Checkbox'),
          XboxCheckbox: watch('XboxCheckbox'),
          switchCheckbox: watch('switchCheckbox'),
        };
      },
    };
  });

  return (
    <div className="devices">
      <h4>What gaming devices do you have?</h4>
      <div className="devices__div">
        <label className="devices__label">
          <input
            className="devices__checkbox"
            type="checkbox"
            {...register('pcCheckbox')}
            data-testid="pc-input"
          />
          <div className="devices__mark"></div>
          PC
        </label>
        <label className="devices__label">
          <input
            className="devices__checkbox"
            type="checkbox"
            {...register('ps5Checkbox')}
            data-testid="ps5-input"
          />
          <div className="devices__mark"></div>
          PS5
        </label>
        <label className="devices__label">
          <input
            className="devices__checkbox"
            type="checkbox"
            {...register('XboxCheckbox')}
            data-testid="xbox-input"
          />
          <div className="devices__mark"></div>
          Xbox series X
        </label>
        <label className="devices__label">
          <input
            className="devices__checkbox"
            type="checkbox"
            {...register('switchCheckbox')}
            data-testid="switch-input"
          />
          <div className="devices__mark"></div>
          Switch
        </label>
      </div>
    </div>
  );
}

export default forwardRef(DevicesInput);
