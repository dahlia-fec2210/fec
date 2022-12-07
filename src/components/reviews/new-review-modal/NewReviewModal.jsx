import React, { useState } from 'react';

export default function NewReviewModal({ toggleModal }) {
  return (

    <div className="review-modal">
      <div className="review-overlay" />
      <div className="review-modal-content">
        <i className="fa-solid fa-xmark review-close-modal" onClick={toggleModal} />
      </div>
    </div>
  );
}
