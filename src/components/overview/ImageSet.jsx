import React from 'react';

function ImageSet({ photo }) {
  return (
    <img src={photo.thumbnail_url} alt="" />
  );
}

export default ImageSet;
