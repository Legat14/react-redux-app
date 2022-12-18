import { IAccountCard, IAllInputsData, ICheckboxesData } from 'types';

export default function createAccountCard(
  key: number,
  inputsData: IAllInputsData,
  checkboxesData: ICheckboxesData
): IAccountCard {
  let gender = 'Male';
  if (inputsData.genderInput) {
    gender = 'Female';
  }

  const getDevices = (checkboxesData: ICheckboxesData): string => {
    let devices = ['none :-('];

    if (
      checkboxesData.pcCheckbox ||
      checkboxesData.ps5Checkbox ||
      checkboxesData.XboxCheckbox ||
      checkboxesData.switchCheckbox
    ) {
      devices = [];
    }

    if (checkboxesData.pcCheckbox) {
      devices.push('PC');
    }

    if (checkboxesData.ps5Checkbox) {
      devices.push('PS5');
    }

    if (checkboxesData.XboxCheckbox) {
      devices.push('Xbox series X');
    }

    if (checkboxesData.switchCheckbox) {
      devices.push('Switch');
    }

    const devicesStr = devices.join(', ');

    return devicesStr;
  };

  const devices = getDevices(checkboxesData);

  const avatarUrl = URL.createObjectURL(inputsData.avatarInput[0]);

  return {
    key,
    name: inputsData.nameInput,
    birthDate: inputsData.birthDateInput,
    gender,
    avatarUrl,
    country: inputsData.countryInput,
    devices,
  };
}
