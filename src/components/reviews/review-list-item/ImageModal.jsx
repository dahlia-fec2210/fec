import React, { useState } from 'react';

export default function ImageModal({ imgUrl, toggleModal }) {
  return (

    <div className="review-modal">
      <div onClick={toggleModal} className="review-overlay" />
      <div className="review-modal-content">
        <img className="review-modal-image" src={imgUrl} alt="expanded item view" />

        <i className="fa-solid fa-xmark review-close-modal" onClick={toggleModal} />
      </div>
    </div>
  );
}
