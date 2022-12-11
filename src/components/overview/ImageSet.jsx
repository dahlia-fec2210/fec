/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
import React from 'react';

function ImageSet({ imageSetCarousel, handleThumbnailClick, currentStylePhotos }) {
  // let indicator;
  // if (index === selected) {
  //   indicator = <div className="thumbnail-overlay" />;
  // } else {
  //   indicator = null;
  // }

  return (
    <div className="image-thumbnails">
      <div className="thumbnails-container">
        <img
          className="thumbnails"
          src={currentStylePhotos[imageSetCarousel[0]].thumbnail_url}
          alt=""
          onClick={() => handleThumbnailClick(imageSetCarousel[0])}
        />
      </div>
      <div className="thumbnails-container">
        <img
          className="thumbnails"
          src={currentStylePhotos[imageSetCarousel[1]].thumbnail_url}
          alt=""
          onClick={() => handleThumbnailClick(imageSetCarousel[1])}
        />
      </div>
      <div className="thumbnails-container">
        <img
          className="thumbnails"
          src={currentStylePhotos[imageSetCarousel[2]].thumbnail_url}
          alt=""
          onClick={() => handleThumbnailClick(imageSetCarousel[2])}
        />
      </div>
      <div className="thumbnails-container">
        <img
          className="thumbnails"
          src={currentStylePhotos[imageSetCarousel[3]].thumbnail_url}
          alt=""
          onClick={() => handleThumbnailClick(imageSetCarousel[3])}
        />
      </div>
      <div className="thumbnails-container">
        <img
          className="thumbnails"
          src={currentStylePhotos[imageSetCarousel[4]].thumbnail_url}
          alt=""
          onClick={() => handleThumbnailClick(imageSetCarousel[4])}
        />
      </div>
      <div className="thumbnails-container">
        <img
          className="thumbnails"
          src={currentStylePhotos[imageSetCarousel[5]].thumbnail_url}
          alt=""
          onClick={() => handleThumbnailClick(imageSetCarousel[5])}
        />
      </div>
    </div>
  );
}

export default ImageSet;
