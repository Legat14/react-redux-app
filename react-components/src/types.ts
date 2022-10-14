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

export interface IPhoto {
  farm: number,
  id: string,
  isfamily: number,
  isfreind: number,
  ispublic: number,
  owner: string,
  secret: string,
  server: string,
  title: string,
}

interface IPhotos {
  page: number,
  pages: number,
  perpage: number,
  photo: Array<IPhoto>,
  total: number,
}

export interface IResponse {
  photos: IPhotos,
  stat: string,
}

export interface IPhotoCard {
  key: number,
  src: string,
  title: string,
  owner: string,
}
