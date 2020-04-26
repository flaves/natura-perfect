import { ImageType } from './image';

export default interface ServiceEntity {
  name: string;
  description: string;
  image: ImageType;
  images: ImageType[];
}
