import React from 'react';
import PhotoCard from './PhotoCard';
import { IModalContent, IPhoto } from 'types';
import getModalContent from '../functions/getModalContent';

function RenderPhoto(
  photo: IPhoto,
  setModalContent: (modalContent: IModalContent) => void,
  setIsOpened: (value: boolean) => void
): JSX.Element {
  const srcMedium = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`;
  const srcLarge = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`;

  return (
    <PhotoCard
      onClick={(event) => {
        event.stopPropagation();
        const modalContent = getModalContent(photo, srcLarge);
        setModalContent(modalContent);
        setIsOpened(true);
      }}
      key={+photo.id}
      src={srcMedium}
      title={photo.title}
      owner={photo.owner}
    />
  );
}

export default RenderPhoto;
