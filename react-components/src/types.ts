import { MouseEventHandler } from 'react';
import AvatarInput from './components/pages/FormPage/inputs/AvatarInput';
import BirthDateInput from './components/pages/FormPage/inputs/BirthDateInput';
import GenderInput from './components/pages/FormPage/inputs/GenderInput';
import CountryInput from './components/pages/FormPage/inputs/CountryInput';
import DevicesInput from './components/pages/FormPage/inputs/DevicesInput';
import NameInput from './components/pages/FormPage/inputs/NameInput';
import SubmitInput from './components/pages/FormPage/inputs/SubmitInput';

export interface IAccountCard {
  key: number;
  name: string;
  birthDate: string;
  gender: string;
  avatar: string;
  avatarUrl: string;
  country: string;
  devices: string;
}

export interface IPhoto {
  farm: number;
  id: string;
  isfamily: number;
  isfreind: number;
  ispublic: number;
  owner: string;
  secret: string;
  server: string;
  title: string;
}

export interface IPhotos {
  page: number;
  pages: number;
  perpage: number;
  photo: Array<IPhoto>;
  total: number;
}

export interface IResponse {
  stat: string;
  photos?: IPhotos;
  code?: number;
  message?: string;
}

export interface IPhotoCard {
  onClick: MouseEventHandler<HTMLDivElement>;
  key: number;
  src: string;
  title: string;
  owner: string;
}

export interface IModalContent {
  src: string;
  id: string;
  owner: string;
  server: string;
  title: string;
}

export interface IAccountFormRefs {
  nameInputComp: NameInput,
  birthDateInputComp: BirthDateInput,
  genderInputComp: GenderInput,
  avatarInputComp: AvatarInput,
  countryInputComp: CountryInput,
  devicesInputComp: DevicesInput,
  submitComp: SubmitInput,
  nameMistakeMessage: HTMLParagraphElement,
  dateMistakeMessage: HTMLParagraphElement,
  avatarMistakeMessage: HTMLParagraphElement,
}
