import { AccountCardActionType, DetailType, IAccountCard, IDetailContent, IPhotoCardDispatch, IPhotoCardState, PhotoCardActionType } from "types";

export const accountCardReducer = (
  state: { accountCards: IAccountCard[] },
  action: { type: AccountCardActionType; newAccountCard?: IAccountCard }
): { accountCards: IAccountCard[] | [] } => {
  let newState = state;
  switch (action.type) {
    case AccountCardActionType.AddAccountCard:
      if (action.newAccountCard) {
        const newAccountCards = [...state.accountCards, action.newAccountCard];
        newState = { ...state, accountCards: newAccountCards as IAccountCard[] };
      }
      break;
    case AccountCardActionType.DeleteAccountCard:
      newState = { ...state, accountCards: [] };
      break;
  }
  return newState;
};

export const photoCardReducer = (state: IPhotoCardState, action: IPhotoCardDispatch): IPhotoCardState => {
  // TODO: Добавить возможность очистки страницы
  switch (action.type) {
    case PhotoCardActionType.RenderPhotoCards: return { ...state, responseObj: action.responseObj };
    case PhotoCardActionType.SaveSortOption: return { ...state, inputSort: action.inputSort };
    case PhotoCardActionType.SavePhotoPerPage: return { ...state, inputPhotosPerPage: action.inputPhotosPerPage };
    case PhotoCardActionType.SavePageNumber: return { ...state, inputPageNumber: action.inputPageNumber };
    case PhotoCardActionType.SaveLastPage: return { ...state, lastPage: action.lastPage };
    default: return state;
  }
};

export const detailReducer = (
  state: IDetailContent,
  action: {
    type: DetailType;
    newDetailState: IDetailContent;
  }
): IDetailContent => {
  if (action.type === DetailType.SaveDetailContent) {
    return action.newDetailState;
  }
  return state;
};