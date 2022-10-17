import React from 'react';
import { IPhoto, IResponse } from 'types';
import PhotoCard from './PhotoCard';
import isNotEmpty from 'helpers/isNotEmpty';

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

  render(): JSX.Element {
    let photosArr: Array<[] | IPhoto>;
    console.log(this.props.response);
    isNotEmpty(this.props.response)
      ? (photosArr = (this.props.response as IResponse).photos.photo.slice(0, 20))
      : (photosArr = []);
    let photoCardsArr: Array<JSX.Element> = [];
    if (photosArr.length > 0) {
      photoCardsArr = photosArr.map((photo: IPhoto | []): JSX.Element => {
        return this.renderPhoto(photo as IPhoto);
      });
    }

    return <div className="search-result">{photoCardsArr}</div>;
  }
}

export default SearchResult;
