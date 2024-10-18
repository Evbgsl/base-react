import './PhotoGallery.css';
import { Counter } from 'features';
import { Photos } from 'features';
/**
 * @typedef {import('./types').PhotoGalleryProps} PhotoGalleryProps
 */

/**
 * @function PhotoGallery
 * @param { PhotoGalleryProps } props
 * @returns {JSX.Element}
 */

export const PhotoGallery = (props) => {
  return (
    <div className='photo-gallery'>
      <Counter name={props.counterName}
        count={props.count}
        setCount={props.setCount}
      />
      <Photos photos={props.photos} />
    </div>
  );
};
