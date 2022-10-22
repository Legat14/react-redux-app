import React from 'react';
import { IPhoto, IPhotos, IResponse } from 'types';
import isNotEmpty from 'helpers/isNotEmpty';
import RenderPhoto from './RenderPhoto';

function SearchResult(props: {
  response: {} | IResponse,
  getModalContent: (photo: IPhoto, src: string) => void;
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
      return RenderPhoto(photo as IPhoto, props.getModalContent);
    });
  }

  return <div className="search-result">{photoCardsArr}</div>;
}

// class SearchResult extends React.Component<{
//   response: {} | IResponse;
//   getModalContent: (photo: IPhoto, src: string) => void;
// }> {
//   renderPhoto(photo: IPhoto): JSX.Element {
//     const srcMedium = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`;
//     const srcLarge = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`;
//     return (
//       <PhotoCard
//         onClick={(event) => {
//           event.stopPropagation();
//           this.props.getModalContent(photo, srcLarge);
//         }}
//         key={+photo.id}
//         src={srcMedium}
//         title={photo.title}
//         owner={photo.owner}
//       />
//     );
//   }

//   render(): JSX.Element {
//     let photosArr: Array<[] | IPhoto> = [];
//     isNotEmpty(this.props.response)
//       ? (this.props.response as IResponse).photos
//         ? (photosArr = ((this.props.response as IResponse).photos as IPhotos).photo.slice(0, 20))
//         : console.error("Didn't get photos")
//       : (photosArr = []);
//     let photoCardsArr: Array<JSX.Element> = [];
//     if (photosArr.length > 0) {
//       photoCardsArr = photosArr.map((photo: IPhoto | []): JSX.Element => {
//         return this.renderPhoto(photo as IPhoto);
//       });
//     }

//     return <div className="search-result">{photoCardsArr}</div>;
//   }
// }

export default SearchResult;
