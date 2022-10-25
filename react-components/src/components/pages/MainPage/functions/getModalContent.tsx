import { IModalContent, IPhoto } from 'types';

function getModalContent(photo: IPhoto, src: string): IModalContent {
  return {
    src: src,
    id: photo.id,
    owner: photo.owner,
    server: photo.server,
    title: photo.title,
  };
}

export default getModalContent;
