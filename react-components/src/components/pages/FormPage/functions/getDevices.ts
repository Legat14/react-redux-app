import { ICheckboxesData } from 'types';

export default function getDevices(checkboxesData: ICheckboxesData): string {
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
}
