import React from 'react';
import PhotoCard from 'components/PhotoCard';
import { IPhoto } from 'types';

function RenderPhoto(photo: IPhoto, getModalContent: (photo: IPhoto, src: string) => void): JSX.Element {
  const srcMedium = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`;
  const srcLarge = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`;
  return (
    <PhotoCard
      onClick={(event) => {
        event.stopPropagation();
        getModalContent(photo, srcLarge);
      }}
      key={+photo.id}
      src={srcMedium}
      title={photo.title}
      owner={photo.owner}
    />
  );
}

export default RenderPhoto;
