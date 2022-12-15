import React from 'react';
import logInteraction from '../logInteraction.js';

export default function ImageModal({ imgUrl, toggleModal, reviewId }) {
  const handleClick = (e) => {
    logInteraction('close-user-review-img-btn', [reviewId, imgUrl]);
    toggleModal();
  };
  return (
    <div className="review-image-modal">
      <div onClick={handleClick} className="review-image-overlay" />
      <div className="review-image-modal-content">
        <img className="review-modal-image" src={imgUrl} alt="expanded item view" />

        <i className="fa-solid fa-xmark review-image-close-modal" onClick={handleClick} />
      </div>
    </div>
  );
}
