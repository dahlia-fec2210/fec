/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import MainImage from './MainImage.jsx';
import ImageSet from './ImageSet.jsx';

function Image({
  currentStylePhotos, expanded, setExpanded, zoomed, setZoomed,
}) {
  // console.log('current style photos in Image comp:', currentStylePhotos);

  const [currentMainImageIndex, setCurrentMainImageIndex] = useState(0);
  const { length } = currentStylePhotos;
  const [selected, setSelected] = useState(0);
  const [imageSetCarousel, setImageSetCarousel] = useState([0, 1, 2, 3, 4, 5]);

  const prevImage = () => {
    if (currentMainImageIndex === 0) {
      // do nothing
    }
    setCurrentMainImageIndex(currentMainImageIndex - 1);
  };

  const shiftUp = () => {
    if (currentMainImageIndex === 0) {
      // do nothing
    }
    setCurrentMainImageIndex(currentMainImageIndex - 1);
    if (imageSetCarousel[0] > 0) {
      const newCarousel = imageSetCarousel.map((n) => n - 1);
      setImageSetCarousel(newCarousel);
    }
  };

  const nextImage = () => {
    setCurrentMainImageIndex(currentMainImageIndex === length - 1 ? 0 : currentMainImageIndex + 1);
  };

  const shiftDown = () => {
    setCurrentMainImageIndex(currentMainImageIndex === length - 1 ? 0 : currentMainImageIndex + 1);
    if (imageSetCarousel[imageSetCarousel.length - 1] < currentStylePhotos.length - 1) {
      const newCarousel = imageSetCarousel.map((n) => n + 1);
      setImageSetCarousel(newCarousel);
    }
  };

  const handleThumbnailClick = (index) => {
    setSelected(index);
    setCurrentMainImageIndex(index);
  };

  let upArrow;
  if (currentMainImageIndex !== 0) {
    upArrow = <i className="arrow up-arrow fa-solid fa-chevron-up fa-2xl" onClick={shiftUp} />;
  } else {
    upArrow = null;
  }

  let downArrow;
  if (currentMainImageIndex !== length - 1) {
    downArrow = <i className="arrow down-arrow fa-solid fa-chevron-down fa-2xl" onClick={shiftDown} />;
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
    <div className={expanded === false ? 'style-images' : 'expand-style-images'}>
      <div className={expanded === false ? 'main-carousel' : 'expand-main-carousel'}>
        {leftArrow}
        <div className="main-set">
          {currentStylePhotos.map((photo, i) => (
            <div className={i === currentMainImageIndex ? 'slide-active' : 'slide'} key={i}>
              {i === currentMainImageIndex && (
                <MainImage
                  key={i}
                  photo={photo}
                  expanded={expanded}
                  setExpanded={setExpanded}
                  zoomed={zoomed}
                  setZoomed={setZoomed}
                />
              )}
            </div>
          ))}
        </div>
        {rightArrow}
      </div>

      {zoomed === false ? (
        <div className="image-set">
          {upArrow}
          <ImageSet
            currentStylePhotos={currentStylePhotos}
            selected={selected}
            imageSetCarousel={imageSetCarousel}
            handleThumbnailClick={handleThumbnailClick}
          />
          {downArrow}
        </div>
      ) : null}
    </div>
  );
}

export default Image;
