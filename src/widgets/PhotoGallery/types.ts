import type { PhotoDetails } from '../../features/Photos/types';

export type PhotoGalleryProps = {
  counterName: string;
  count: number;
  setCount: (count: number) => void;
  photos: PhotoDetails[];
};
