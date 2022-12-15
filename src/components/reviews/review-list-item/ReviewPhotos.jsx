/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import ImageModal from './ImageModal.jsx';
import logInteraction from '../logInteraction.jsx';

const { useState } = React;

function ReviewPhotos({ photos, reviewId }) {
  const [modal, setModal] = useState(false);
  const [imgUrl, setImgUrl] = useState(null);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleImgClick = (e) => {
    setImgUrl(e.target.currentSrc);
    logInteraction('click-user-review-image', [reviewId, e.target.currentSrc]);
    toggleModal();
  };

  return (
    <div className="review-thumbnails">
      {photos.map((photo) => (
        <img
          className="review-photo-thumbnail"
          alt="review item"
          src={photo.url}
          key={photo.id}
          onClick={handleImgClick}
        />
      ))}
      {modal && (
      <ImageModal
        imgUrl={imgUrl}
        toggleModal={toggleModal}
        reviewId={reviewId}
      />
      )}
    </div>
  );
}

export default ReviewPhotos;
