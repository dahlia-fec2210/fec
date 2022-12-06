import React from 'react';
import MainImage from './MainImage.jsx';
import ImageSet from './ImageSet.jsx';

function Image({ image }) {
  return (
    <div>
      <h2>&gt; Image</h2>
      <MainImage />
      <ImageSet />
    </div>
  );
}

export default Image;
