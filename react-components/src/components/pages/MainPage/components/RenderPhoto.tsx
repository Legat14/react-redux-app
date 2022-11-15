import React, { useContext } from 'react';
import PhotoCard from './PhotoCard';
import { IPhoto } from 'types';
import getDetailContent from '../functions/getDeteilContent';
import Context from 'store/Context';
import { useDispatch } from 'react-redux';
import { saveDetailContent } from 'store/slices/detailSlice';

function RenderPhoto(photo: IPhoto): JSX.Element {
  const srcMedium = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`;
  const srcLarge = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`;

  const dispatch = useDispatch();
  const highliteLink = useContext(Context).functions.highliteLink;

  return (
    <PhotoCard
      onClick={(event) => {
        event.stopPropagation();
        const detailContent = getDetailContent(photo, srcLarge);
        dispatch(saveDetailContent({ newDetailState: detailContent }));
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
