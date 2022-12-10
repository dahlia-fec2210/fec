import React, { useState } from 'react';
import MainImage from './MainImage.jsx';
import ImageSet from './ImageSet.jsx';

function Image({ currentStylePhotos }) {
  console.log('current style photos in Image comp:', currentStylePhotos);

  const [currentMainImageIndex, setCurrentMainImageIndex] = useState(0);
  const { length } = currentStylePhotos;
  const [selected, setSelected] = useState(0);

  // Refactor so that the carousel is not circular:
  // Create states for first and last images in carousel

  const prevImage = () => {
    if (currentMainImageIndex === 0) {
      // do nothing
    }
    setCurrentMainImageIndex(currentMainImageIndex - 1);
  };

  const nextImage = () => {
    setCurrentMainImageIndex(currentMainImageIndex === length - 1 ? 0 : currentMainImageIndex + 1);
  };

  const handleThumbnailClick = (index) => {
    setSelected(index);
    setCurrentMainImageIndex(index);
  };

  let upArrow;
  if (currentMainImageIndex !== 0) {
    upArrow = <i className="arrow up-arrow fa-solid fa-chevron-up fa-2xl" onClick={prevImage} />;
  } else {
    upArrow = null;
  }

  let downArrow;
  if (currentMainImageIndex !== length - 1) {
    downArrow = <i className="arrow down-arrow fa-solid fa-chevron-down fa-2xl" onClick={nextImage} />;
  } else {
    downArrow = null;
  }

  let leftArrow;
  if (currentMainImageIndex !== 0) {
    leftArrow = <i className="arrow left-arrow fa-solid fa-chevron-left fa-2xl" onClick={prevImage} />;
  } else {
    leftArrow = null;
  }

  let rightArrow;
  if (currentMainImageIndex !== length - 1) {
    rightArrow = <i className="arrow right-arrow fa-solid fa-chevron-right fa-2xl" onClick={nextImage} />;
  } else {
    rightArrow = null;
  }

  return (
    <div className="style-images">
      <div className="main-carousel">
        {leftArrow}
        <div className="main-set">
          {currentStylePhotos.map((photo, i) => (
            <div className={i === currentMainImageIndex ? 'slide-active' : 'slide'} key={i}>
              {i === currentMainImageIndex && (
                <MainImage key={i} photo={photo} />
              )}
            </div>
          ))}
        </div>
        {rightArrow}
      </div>

      <div className="image-set">
        {upArrow}
        {currentStylePhotos.map((photo, i) => (
          <ImageSet
            key={i}
            index={i}
            photo={photo}
            selected={selected}
            handleThumbnailClick={handleThumbnailClick}
          />
        ))}
        {downArrow}
      </div>
    </div>
  );
}

export default Image;
