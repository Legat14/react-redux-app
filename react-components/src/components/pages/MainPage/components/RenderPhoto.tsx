import React, { useContext } from 'react';
import PhotoCard from './PhotoCard';
import { IPhoto } from 'types';
import getDetailContent from '../functions/getDeteilContent';
import Context from 'model/Context';

function RenderPhoto(photo: IPhoto): JSX.Element {
  const srcMedium = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`;
  const srcLarge = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`;
  const dispatch = useContext(Context).dispatches.detailDispatch;

  const highliteLink = useContext(Context).functions.highliteLink;

  return (
    <PhotoCard
      onClick={(event) => {
        event.stopPropagation();
        const detailContent = getDetailContent(photo, srcLarge);
        dispatch({ type: 'save-detail-content', newDetailState: detailContent });
        highliteLink(1);
      }}
      key={+photo.id}
      src={srcMedium}
      title={photo.title}
      owner={photo.owner}
    />
  );
}

export default RenderPhoto;
