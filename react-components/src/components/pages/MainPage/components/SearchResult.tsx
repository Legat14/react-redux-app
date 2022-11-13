import React, { useContext } from 'react';
import { DetailType, IPhoto, IPhotos, IResponse } from 'types';
import isEmpty from 'helpers/isEmpty';
import Context from 'store/Context';
import PhotoCard from './PhotoCard';
import getDetailContent from '../functions/getDeteilContent';

function SearchResult(props: {}): JSX.Element {
  const responseObj = useContext(Context).states.photoCardState.responseObj;
  const dispatch = useContext(Context).dispatches.detailDispatch;

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
      photoCardsArr = photosArr.map((photo: IPhoto): JSX.Element => {
        const srcMedium = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`;
        const srcLarge = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`;
        return (
          <PhotoCard
            onClick={(event: React.MouseEvent<HTMLDivElement>) => {
              event.stopPropagation();
              const detailContent = getDetailContent(photo, srcLarge);
              dispatch({ type: DetailType.SaveDetailContent, newDetailState: detailContent });
            }}
            key={+photo.id}
            src={srcMedium}
            title={photo.title}
            owner={photo.owner}
          />
        );
      });
    }

    return photoCardsArr;
  };

  return <div className="search-result">{renderSearchResult()}</div>;
}

export default SearchResult;
