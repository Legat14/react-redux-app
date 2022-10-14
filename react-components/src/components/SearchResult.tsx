import React from 'react';
import { IPhoto, IResponse } from 'types';
import PhotoCard from './PhotoCard';
import isNotEmpty from 'helpers/isNotEmpty';

class SearchResult extends React.Component<{response: {} | IResponse}> {
  constructor(props: {response: IResponse}) {
    super(props);
  }

  renderPhoto(photo: IPhoto): JSX.Element {
    const src = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`;
    return (
      <PhotoCard
        key={+photo.id}
        src={src}
        title={photo.title}
        owner={photo.owner}
       />
    )
  }

  render(): JSX.Element {
    let photosArr: Array<[] | IPhoto>;
    isNotEmpty(this.props.response) ? photosArr = ((this.props.response as IResponse).photos.photo).slice(0, 20) : photosArr = [];
    let photoCardsArr: Array<JSX.Element> = [];
    if (photosArr.length > 0) {
      photoCardsArr = photosArr.map((photo: IPhoto | []): JSX.Element => {
        return this.renderPhoto(photo as IPhoto);
      });
    } 
      
    return (
      <div className="search-result">{photoCardsArr}</div>
    )
  }
}

export default SearchResult;
