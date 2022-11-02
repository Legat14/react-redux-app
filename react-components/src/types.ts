import store from './model/store';
import { MouseEventHandler } from 'react';

export interface IAccountCard {
  key: number;
  name: string;
  birthDate: string;
  gender: string;
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

export interface IDetailContent {
  src: string;
  id: string;
  owner: string;
  server: string;
  title: string;
}

export interface IAllInputsData {
  nameInput: string;
  birthDateInput: string;
  genderInput: boolean;
  avatarInput: FileList;
  countryInput: string;
}

export interface IDevicesInputRefs {
  getCheckboxesData: () => ICheckboxesData;
}

export interface ICheckboxesData {
  pcCheckbox: boolean;
  ps5Checkbox: boolean;
  XboxCheckbox: boolean;
  switchCheckbox: boolean;
}

export enum sortOptions {
  None = 'none',
  DatePostedAsc = 'date-posted-asc',
  DatePostedDesc = 'date-posted-desc',
  DateTakenAsc = 'date-taken-asc',
  DateTakendDesc = 'date-taken-desc',
  InterestingnessAsc = 'interestingness-asc',
  InterestingnessDesc = 'interestingness-desc',
  Relevance = 'relevance',
}

export interface IPhotoCardState {
  responseObj: IResponse | {};
  inputSort: sortOptions;
  inputPhotosPerPage: number;
  inputPageNumber: number;
  lastPage: number;
}

export interface IPhotoCardDispatch {
  // type: string;
  responseObj: IResponse;
  inputSort: sortOptions;
  inputPhotosPerPage: number;
  inputPageNumber: number;
  lastPage: number;
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
