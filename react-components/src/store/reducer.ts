import { IAccountCard, IDetailContent, IPhotoCardDispatch, IPhotoCardState } from "types";

export const accountCardReducer = (
  state: { accountCards: IAccountCard[] },
  action: { type: string; newAccountCard: IAccountCard }
): { accountCards: IAccountCard[] | [] } => {
  if (action.type === 'add-account-card') {
    // TODO: Создать enum для возможных команд
    if (action.newAccountCard) {
      const newAccountCards = [...state.accountCards, action.newAccountCard];
      return { ...state, accountCards: newAccountCards as IAccountCard[] };
    }
  }
  if (action.type === 'delete-all-account-cards') {
    return { ...state, accountCards: [] };
  }
  return state;
};

export const photoCardReducer = (state: IPhotoCardState, action: IPhotoCardDispatch): IPhotoCardState => {
  // TODO: Добавить возможность очистки страницы
  if (action.type === 'render-photo-cards') {
    return { ...state, responseObj: action.responseObj };
  }
  if (action.type === 'save-sort-option') {
    return { ...state, inputSort: action.inputSort };
  }
  if (action.type === 'save-photo-per-page') {
    return { ...state, inputPhotosPerPage: action.inputPhotosPerPage };
  }
  if (action.type === 'save-page-number') {
    return { ...state, inputPageNumber: action.inputPageNumber };
  }
  if (action.type === 'save-last-page') {
    return { ...state, lastPage: action.lastPage };
  }
  return state;
};

export const detailReducer = (
  state: IDetailContent,
  action: {
    type: string;
    newDetailState: IDetailContent;
  }
): IDetailContent => {
  if (action.type === 'save-detail-content') {
    return action.newDetailState;
  }
  return state;
};