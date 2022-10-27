import { MouseEventHandler } from 'react';

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

export interface IAccountFormInputs {
  'name-input': HTMLInputElement,
  'date-input': HTMLInputElement,
  'gender-input': HTMLInputElement,
  'avatar-input': HTMLInputElement,
  'country-input': HTMLSelectElement,
  'pc': HTMLInputElement,
  'ps5': HTMLInputElement,
  'Xbox': HTMLInputElement,
  'switch': HTMLInputElement,
  'submit-input': HTMLInputElement,
}
