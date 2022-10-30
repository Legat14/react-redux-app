import React, { useContext } from 'react';
import PhotoCard from './PhotoCard';
import { IModalContent, IPhoto } from 'types';
import getModalContent from '../functions/getModalContent';
import getDetailContent from '../functions/getDeteilContent';
import Context from 'model/Context';

function RenderPhoto(
  photo: IPhoto,
  setModalContent: (modalContent: IModalContent) => void,
  setIsOpened: (value: boolean) => void
): JSX.Element {
  const srcMedium = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`;
  const srcLarge = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`;
  const dispatch = useContext(Context).dispatches.detailDispatch;

  return (
    <PhotoCard
      onClick={(event) => {
        event.stopPropagation();
        const detailContent = getDetailContent(photo, srcLarge);
        dispatch({ type: 'save-detail-content', newDetailState: detailContent });

        const modalContent = getModalContent(photo, srcLarge); // TODO: Удалить это после удаления модального окна
        setModalContent(modalContent); // TODO: Удалить это после удаления модального окна
        setIsOpened(true); // TODO: Удалить это после удаления модального окна
      }}
      key={+photo.id}
      src={srcMedium}
      title={photo.title}
      owner={photo.owner}
    />
  );
}

export default RenderPhoto;
