import React from 'react';

function ImageSet({
  photo, index, selected, handleThumbnailClick,
}) {
  let indicator;
  if (index === selected) {
    indicator = <div className="thumbnail-overlay" />;
  } else {
    indicator = null;
  }

  return (
    <div className="image-thumbnails">
      <img
        className="thumbnails"
        src={photo.thumbnail_url}
        alt=""
        onClick={() => handleThumbnailClick(index)}
      />
      {/* {indicator} */}
    </div>
  );
}

export default ImageSet;
