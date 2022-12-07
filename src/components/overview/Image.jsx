import React from 'react';
import MainImage from './MainImage.jsx';
import ImageSet from './ImageSet.jsx';

function Image({ image, currentStylePhotos }) {
  console.log('current style in Image comp:', currentStylePhotos);
  // console.log('current style photos:', currentStyle.photos);
  return (
    <div>
      <MainImage mainImage={image} />
      {currentStylePhotos.map((photo, i) => (
        <ImageSet key={i} photo={photo} />
      ))}
    </div>
  );
}

export default Image;
