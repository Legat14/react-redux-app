import React, { useContext } from 'react';
import { IModalContent, IPhoto, IPhotos, IResponse } from 'types';
import isEmpty from 'helpers/isEmpty';
import RenderPhoto from './RenderPhoto';
import Context from 'model/Context';

function SearchResult(props: {
  setModalContent: (modalContent: IModalContent) => void;
  setIsOpened: (isOpened: boolean) => void;
}): JSX.Element {

  const responseObj = useContext(Context).states.photoCardState.responseObj;
  const renderSearchResult = (): JSX.Element[] => {
    let photosArr: IPhoto[] = [];

    if (isEmpty(responseObj)) {
      photosArr = [];
    } else if ((responseObj as IResponse).photos) {
      photosArr = ((responseObj as IResponse).photos as IPhotos).photo.slice(0, 20);
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
