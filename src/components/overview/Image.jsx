import React, { useState } from 'react';
import MainImage from './MainImage.jsx';
import ImageSet from './ImageSet.jsx';

function Image({ image, currentStylePhotos }) {
  // console.log('current style photos in Image comp:', currentStylePhotos);

  const [currentMainImageIndex, setCurrentMainImageIndex] = useState(0);
  const [currentMainImage, setCurrentMainImage] = useState({});
  const { length } = currentStylePhotos;

  // Refactor so that the carousel is not circular:
  // Create states for first and last images in carousel

  const prevImage = () => {
    setCurrentMainImageIndex(currentMainImageIndex === 0 ? length - 1 : currentMainImageIndex - 1);
  };

  const nextImage = () => {
    setCurrentMainImageIndex(currentMainImageIndex === length - 1 ? 0 : currentMainImageIndex + 1);
  };

  // console.log('current main image index:', currentMainImageIndex);

  const handleImageSetClick = (index) => {
    setCurrentMainImageIndex(index);
  };

  return (
    <div className="style-images">
      <div className="main-carousel">
        <i className="arrow left-arrow fa-solid fa-chevron-left fa-2xl" onClick={prevImage} />
        <i className="arrow right-arrow fa-solid fa-chevron-right fa-2xl" onClick={nextImage} />

        {currentStylePhotos.map((photo, i) => (
          <div className={i === currentMainImageIndex ? 'slide-active' : 'slide'} key={i}>
            {i === currentMainImageIndex && (
              <MainImage key={i} photo={photo} />
            )}
          </div>
        ))}
      </div>

      <div className="image-set">
        <i className="arrow up-arrow fa-solid fa-chevron-up fa-2xl" onClick={prevImage} />
        {currentStylePhotos.map((photo, i) => (
          <div className="image-thumbnails" key={i} onClick={() => handleImageSetClick(i)}>
            <ImageSet key={i} photo={photo} />
          </div>
        ))}
        <i className="arrow down-arrow fa-solid fa-chevron-down fa-2xl" onClick={nextImage} />
      </div>
    </div>
  );
}

export default Image;
