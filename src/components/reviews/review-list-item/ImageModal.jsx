import React, { useState } from 'react';

export default function ImageModal({ imgUrl, toggleModal }) {
  return (

    <div className="review-image-modal">
      <div onClick={toggleModal} className="review-image-overlay" />
      <div className="review-image-modal-content">
        <img className="review-modal-image" src={imgUrl} alt="expanded item view" />

        <i className="fa-solid fa-xmark review-image-close-modal" onClick={toggleModal} />
      </div>
    </div>
  );
}
