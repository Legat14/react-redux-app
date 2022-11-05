import React from 'react';
import { IModalContent, IPhoto, IPhotos, IResponse } from 'types';
import isEmpty from 'helpers/isEmpty';
import RenderPhoto from './RenderPhoto';

function SearchResult(props: {
  response: {} | IResponse;
  setModalContent: (modalContent: IModalContent) => void;
  setIsOpened: (isOpened: boolean) => void;
}): JSX.Element {

  const renderSearchResult = (): JSX.Element[] => {
    let photosArr: IPhoto[] = [];

    if (isEmpty(props.response)) {
      photosArr = [];
    } else if ((props.response as IResponse).photos) {
      photosArr = ((props.response as IResponse).photos as IPhotos).photo.slice(0, 20);
    } else {
      console.error("Didn't get photos");
    }

    let photoCardsArr: Array<JSX.Element> = [];
    if (photosArr.length > 0) {
      photoCardsArr = photosArr.map((photo: IPhoto | []): JSX.Element => {
        return RenderPhoto(photo as IPhoto, props.setModalContent, props.setIsOpened);
      });
    }

    return photoCardsArr;
  }

  return <div className="search-result">{renderSearchResult()}</div>;
}

export default SearchResult;
