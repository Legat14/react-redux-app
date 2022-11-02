import React, { useContext } from 'react';
import { IPhoto, IPhotoCardState, IPhotos, IResponse, RootState } from 'types';
import isEmpty from 'helpers/isEmpty';
import RenderPhoto from './RenderPhoto';
import Context from 'model/Context';
import { useSelector } from 'react-redux';

function SearchResult(): JSX.Element {
  const responseObj = useSelector((state: RootState) => state.photoCard.responseObj);
  // const responseObj = useContext(Context).states.photoCardState.responseObj;
  const renderSearchResult = (): JSX.Element[] => {
    let photosArr: IPhoto[] = [];

    if (isEmpty(responseObj)) {
      photosArr = [];
    } else if ((responseObj as IResponse).photos) {
      photosArr = ((responseObj as IResponse).photos as IPhotos).photo;
    } else {
      console.error("Didn't get photos");
    }

    let photoCardsArr: Array<JSX.Element> = [];
    if (photosArr.length > 0) {
      photoCardsArr = photosArr.map((photo: IPhoto | []): JSX.Element => {
        return RenderPhoto(photo as IPhoto);
      });
    }

    return photoCardsArr;
  };

  return <div className="search-result">{renderSearchResult()}</div>;
}

export default SearchResult;
