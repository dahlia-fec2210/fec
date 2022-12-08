import React, { useState } from 'react';
import CloudinaryWidget from './CloudinaryWidget.jsx';

export default function NewReviewModal({ toggleModal }) {
  const [imageUrls, setImageUrls] = useState([]);

  const updateImgUrls = (url) => {
    console.log(url);
  };
  return (

    <div className="review-modal">
      <div className="review-overlay" />
      <div className="review-modal-content">
        <i className="fa-solid fa-xmark review-close-modal" onClick={toggleModal} />
        <CloudinaryWidget setImageUrls={setImageUrls} />
      </div>
    </div>
  );
}
