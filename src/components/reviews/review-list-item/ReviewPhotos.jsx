import React from 'react';

function ReviewPhotos({ photos }) {
  return (
    <div className="review-thumbnails">
      {photos.map((photo) => <img className="review-photo-thumbnail" alt="review item" src={photo.url} />)}
    </div>
  );
}

export default ReviewPhotos;
