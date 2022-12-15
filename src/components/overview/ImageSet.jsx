/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

function ImageSet({
  // eslint-disable-next-line max-len
  imageSetCarousel, handleThumbnailClick, currentStylePhotos, selectedThumbnail, left,
}) {
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
  // const [selectedIndex, setSelectedIndex] = useState(null);
  const handleClick = (index) => {
    // setSelectedIndex(index);
    handleThumbnailClick(index);
  };

  let selectedThumbnailStyle;
  if (left === 0) {
    selectedThumbnailStyle = {
      border: '4px solid rgba(156, 60, 68, 1)',
    };
  } else {
    selectedThumbnailStyle = {
      border: '4px solid rgba(191, 109, 160, 1)',
    };
  }

  const thumbnailStyle = {
    border: '1px solid white',
  };

  // console.log('==============================================================================');
  // console.log('currentMainImageIndex:', currentMainImageIndex);
  // console.log('selectedThumbnail:', selectedThumbnail);
  // console.log('imageSetCarousel:', imageSetCarousel);
  // console.log('selectedImageCondition0:', selectedImageCondition0);
  // console.log('selectedImageCondition1:', selectedImageCondition1);

  // If in the expanded view, changed thumbnails to little dots and change its position
  // to be underneath the main image
  // For the differentiation, make the dots bigger

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
