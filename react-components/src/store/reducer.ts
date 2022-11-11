import { IAccountCard, IDetailContent, IPhotoCardDispatch, IPhotoCardState } from "types";

export const accountCardReducer = (
  state: { accountCards: IAccountCard[] },
  action: { type: string; newAccountCard: IAccountCard }
): { accountCards: IAccountCard[] | [] } => {
  let newState = state;
  switch (action.type) {
    case 'add-account-card':
      // TODO: Создать enum для возможных команд
      if (action.newAccountCard) {
        const newAccountCards = [...state.accountCards, action.newAccountCard];
        newState = { ...state, accountCards: newAccountCards as IAccountCard[] };
      }
      break;
    case 'delete-all-account-cards':
      newState = { ...state, accountCards: [] };
      break;
  }
  return newState;
};

export const photoCardReducer = (state: IPhotoCardState, action: IPhotoCardDispatch): IPhotoCardState => {
  // TODO: Добавить возможность очистки страницы
  switch (action.type) {
    case 'render-photo-cards': return { ...state, responseObj: action.responseObj };
    case 'save-sort-option': return { ...state, inputSort: action.inputSort };
    case 'save-photo-per-page': return { ...state, inputPhotosPerPage: action.inputPhotosPerPage };
    case 'save-page-number': return { ...state, inputPageNumber: action.inputPageNumber };
    case 'save-last-page': return { ...state, lastPage: action.lastPage };
    default: return state;
  }
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