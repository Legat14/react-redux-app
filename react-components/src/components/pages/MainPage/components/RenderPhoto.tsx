import React, { useContext } from 'react';
import PhotoCard from './PhotoCard';
import { DetailType, IPhoto } from 'types';
import getDetailContent from '../functions/getDeteilContent';
import Context from 'store/Context';
import { highliteLink } from '../functions/highliteLink';

function RenderPhoto(photo: IPhoto): JSX.Element {
  const srcMedium = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`;
  const srcLarge = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`;
  const dispatch = useContext(Context).dispatches.detailDispatch;
  const nav = useContext(Context).elements.nav;

  return (
    <PhotoCard
      onClick={(event) => {
        event.stopPropagation();
        const detailContent = getDetailContent(photo, srcLarge);
        dispatch({ type: DetailType.SaveDetailContent, newDetailState: detailContent });
        highliteLink(1, nav);
      }}
      key={+photo.id}
      src={srcMedium}
      title={photo.title}
      owner={photo.owner}
    />
  );
}

export default RenderPhoto;
