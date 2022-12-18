import { IDetailContent, IPhoto } from 'types';

function getDetailContent(photo: IPhoto, src: string): IDetailContent {
  return {
    src: src,
    id: photo.id,
    owner: photo.owner,
    server: photo.server,
    title: photo.title,
  };
}

export default getDetailContent;
