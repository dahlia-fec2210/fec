import React from 'react';
import ImageModal from './ImageModal.jsx';

const { useState } = React;

function ReviewPhotos({ photos }) {
  const [modal, setModal] = useState(false);
  const [imgUrl, setImgUrl] = useState(null);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleImgClick = (e) => {
    setImgUrl(e.target.currentSrc);
    toggleModal();
  };

  return (
    <div className="review-thumbnails">
      {photos.map((photo) => (
        <>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,
        jsx-a11y/no-noninteractive-element-interactions  */}
          <img
            className="review-photo-thumbnail"
            alt="review item"
            src={photo.url}
            key={photo.id}
            onClick={handleImgClick}
          />
        </>
      ))}
      {modal && <ImageModal imgUrl={imgUrl} toggleModal={toggleModal} />}
    </div>
  );
}

export default ReviewPhotos;
