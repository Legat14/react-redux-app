import React from 'react';
import PhotoCard from 'components/PhotoCard';
import { IPhoto, IPhotos, IResponse } from 'types';
import isEmpty from 'helpers/isEmpty';

class SearchResult extends React.Component<{
  response: {} | IResponse;
  getModalContent: (photo: IPhoto, src: string) => void;
}> {
  renderPhoto(photo: IPhoto): JSX.Element {
    const srcMedium = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`;
    const srcLarge = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`;
    return (
      <PhotoCard
        onClick={(event) => {
          event.stopPropagation();
          this.props.getModalContent(photo, srcLarge);
        }}
        key={+photo.id}
        src={srcMedium}
        title={photo.title}
        owner={photo.owner}
      />
    );
  }

  renderSearchResult(): JSX.Element[] {
    let photosArr: IPhoto[] = [];

    if (isEmpty(this.props.response)) {
      photosArr = [];
    } else if ((this.props.response as IResponse).photos) {
      photosArr = ((this.props.response as IResponse).photos as IPhotos).photo.slice(0, 20);
    } else {
      console.error("Didn't get photos");
    }

    let photoCardsArr: Array<JSX.Element> = [];
    if (photosArr.length > 0) {
      photoCardsArr = photosArr.map((photo: IPhoto | []): JSX.Element => {
        return this.renderPhoto(photo as IPhoto);
      });
    }

    return photoCardsArr;
  }

  render(): JSX.Element {
    const photoCardsArr = this.renderSearchResult();

    return <div className="search-result">{photoCardsArr}</div>;
  }
}

export default SearchResult;
