import React from 'react';
import { IModalContent, IPhoto, IPhotos, IResponse } from 'types';
import isNotEmpty from 'helpers/isNotEmpty';
import RenderPhoto from './RenderPhoto';

function SearchResult(props: {
  response: {} | IResponse;
  setModalContent: (modalContent: IModalContent) => void;
  setIsOpened: (isOpened: boolean) => void;
}): JSX.Element {
  let photosArr: Array<[] | IPhoto> = [];
  isNotEmpty(props.response)
    ? (props.response as IResponse).photos
      ? (photosArr = ((props.response as IResponse).photos as IPhotos).photo.slice(0, 20))
      : console.error("Didn't get photos")
    : (photosArr = []);
  let photoCardsArr: Array<JSX.Element> = [];
  if (photosArr.length > 0) {
    photoCardsArr = photosArr.map((photo: IPhoto | []): JSX.Element => {
      return RenderPhoto(photo as IPhoto, props.setModalContent, props.setIsOpened);
    });
  }

  return <div className="search-result">{photoCardsArr}</div>;
}

export default SearchResult;
