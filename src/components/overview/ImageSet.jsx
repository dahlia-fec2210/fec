/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

function ImageSet({
  imageSetCarousel, handleThumbnailClick, currentStylePhotos, selectedThumbnail,
}) {
  const [indicator, setIndicator] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // const handleClick = (index) => {
  //   console.log('index in handleClick:', index);
  //   setSelectedIndex(index);
  //   handleThumbnailClick(index);
  //   if (index === selectedThumbnail) {
  //     setIndicator(<div className="thumbnail-overlay" />);
  //   } else {
  //     setIndicator(null);
  //   }
  // };

  const handleClick = (index) => {
    console.log('about to be selectedIndex:', index);
    setSelectedIndex(index);
    handleThumbnailClick(index);
  };

  // let thumbnailStyle;
  // if (selectedIndex) {
  //   selectedThumbnailStyle = {
  //     border: '2px solid rgba(125, 172, 145, 1)',
  //   };
  // } else {
  //   thumbnailStyle = {
  //     border: 'border: 1px solid white;',
  //   };
  // }

  const selectedThumbnailStyle = {
    border: '3px solid rgba(125, 172, 145, 1)',
  };

  const thumbnailStyle = {
    border: '1px solid white;',
  };

  return (
    <div className="image-thumbnails">
      <div className="thumbnails-container">
        <img
          className="thumbnails thumbnail-0"
          style={selectedIndex === imageSetCarousel[0] ? selectedThumbnailStyle : thumbnailStyle}
          src={currentStylePhotos[imageSetCarousel[0]].thumbnail_url}
          alt=""
          onClick={() => handleClick(imageSetCarousel[0])}
        />
      </div>
      <div className="thumbnails-container">
        <img
          className="thumbnails thumbnail-1"
          style={selectedIndex === imageSetCarousel[1] ? selectedThumbnailStyle : thumbnailStyle}
          src={currentStylePhotos[imageSetCarousel[1]].thumbnail_url}
          alt=""
          onClick={() => handleClick(imageSetCarousel[1])}
        />
        {/* {indicator} */}
      </div>
      <div className="thumbnails-container">
        <img
          className="thumbnails thumbnail-2"
          style={selectedIndex === imageSetCarousel[2] ? selectedThumbnailStyle : thumbnailStyle}
          src={currentStylePhotos[imageSetCarousel[2]].thumbnail_url}
          alt=""
          onClick={() => handleClick(imageSetCarousel[2])}
        />
      </div>
      <div className="thumbnails-container">
        <img
          className="thumbnails thumbnail-3"
          style={selectedIndex === imageSetCarousel[3] ? selectedThumbnailStyle : thumbnailStyle}
          src={currentStylePhotos[imageSetCarousel[3]].thumbnail_url}
          alt=""
          onClick={() => handleClick(imageSetCarousel[3])}
        />
        {/* {indicator} */}
      </div>
      <div className="thumbnails-container">
        <img
          className="thumbnails thumbnail-4"
          style={selectedIndex === imageSetCarousel[4] ? selectedThumbnailStyle : thumbnailStyle}
          src={currentStylePhotos[imageSetCarousel[4]].thumbnail_url}
          alt=""
          onClick={() => handleClick(imageSetCarousel[4])}
        />
        {/* {indicator} */}
      </div>
      <div className="thumbnails-container">
        <img
          className="thumbnails thumbnail-5"
          style={selectedIndex === imageSetCarousel[5] ? selectedThumbnailStyle : thumbnailStyle}
          src={currentStylePhotos[imageSetCarousel[5]].thumbnail_url}
          alt=""
          onClick={() => handleClick(imageSetCarousel[5])}
        />
        {/* {indicator} */}
      </div>
    </div>
  );
}

export default ImageSet;
