import { IAccountCard, IAllInputsData, ICheckboxesData } from 'types';
import getDevices from './getDevices';

export default function createAccountCard(
  key: number,
  inputsData: IAllInputsData,
  checkboxesData: ICheckboxesData
): IAccountCard {
  let gender = 'Male';
  if (inputsData.genderInput === true) {
    gender = 'Female';
  }

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
