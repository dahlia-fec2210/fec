/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable-next-line max-len */

import React from 'react';

function ImageSet({
  imageSetCarousel, handleThumbnailClick, currentStylePhotos, selectedThumbnail, selectedDot, expanded, left,
}) {
  const handleClick = (index) => {
    handleThumbnailClick(index);
  };

  let selectedThumbnailStyle;
  if (left === 0) {
    selectedThumbnailStyle = {
      border: '4px solid rgba(125, 172, 145, 1)',
    };
  } else {
    selectedThumbnailStyle = {
      border: '4px solid rgba(191, 109, 160, 1)',
    };
  }

  const thumbnailStyle = {
    border: '2px solid white',
  };

  return (
    <div className="image-thumbnails">
      <div className="thumbnails-container">
        <img
          className="thumbnails"
          style={selectedThumbnail === imageSetCarousel[0] ? selectedThumbnailStyle : thumbnailStyle}
          src={currentStylePhotos[imageSetCarousel[0]].thumbnail_url}
          alt=""
          onClick={() => handleClick(imageSetCarousel[0])}
        />
      </div>
      <div className="thumbnails-container">
        <img
          className="thumbnails"
          style={selectedThumbnail === imageSetCarousel[1] ? selectedThumbnailStyle : thumbnailStyle}
          src={currentStylePhotos[imageSetCarousel[1]].thumbnail_url}
          alt=""
          onClick={() => handleClick(imageSetCarousel[1])}
        />
      </div>
      <div className="thumbnails-container">
        <img
          className="thumbnails"
          style={selectedThumbnail === imageSetCarousel[2] ? selectedThumbnailStyle : thumbnailStyle}
          src={currentStylePhotos[imageSetCarousel[2]].thumbnail_url}
          alt=""
          onClick={() => handleClick(imageSetCarousel[2])}
        />
      </div>
      <div className="thumbnails-container">
        <img
          className="thumbnails"
          style={selectedThumbnail === imageSetCarousel[3] ? selectedThumbnailStyle : thumbnailStyle}
          src={currentStylePhotos[imageSetCarousel[3]].thumbnail_url}
          alt=""
          onClick={() => handleClick(imageSetCarousel[3])}
        />
      </div>
      <div className="thumbnails-container">
        <img
          className="thumbnails"
          style={selectedThumbnail === imageSetCarousel[4] ? selectedThumbnailStyle : thumbnailStyle}
          src={currentStylePhotos[imageSetCarousel[4]].thumbnail_url}
          alt=""
          onClick={() => handleClick(imageSetCarousel[4])}
        />
      </div>
      <div className="thumbnails-container">
        <img
          className="thumbnails"
          style={selectedThumbnail === imageSetCarousel[5] ? selectedThumbnailStyle : thumbnailStyle}
          src={currentStylePhotos[imageSetCarousel[5]].thumbnail_url}
          alt=""
          onClick={() => handleClick(imageSetCarousel[5])}
        />
      </div>
    </div>
  );
}

export default ImageSet;
