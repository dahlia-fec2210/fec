import React from 'react';
import MainImage from './MainImage.jsx';
import ImageSet from './ImageSet.jsx';

function Image({ image }) {
  return (
    <div>
      <MainImage mainImage={image} />
      <ImageSet />
    </div>
  );
}

export default Image;
