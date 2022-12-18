export interface IGameCard {
  key: number;
  title: string;
  price: string;
  platform: string;
  release: string;
  img: string;
}

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
