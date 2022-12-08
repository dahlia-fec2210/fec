import React, { useState } from 'react';
import MainImage from './MainImage.jsx';
import ImageSet from './ImageSet.jsx';

function Image({ image, currentStylePhotos }) {
  // console.log('current style photos in Image comp:', currentStylePhotos);

  const [currentMainImage, setCurrentMainImage] = useState(0);
  const { length } = currentStylePhotos;

  const prevImage = () => {
    setCurrentMainImage(currentMainImage === 0 ? length - 1 : currentMainImage - 1);
  };

  const nextImage = () => {
    setCurrentMainImage(currentMainImage === length - 1 ? 0 : currentMainImage + 1);
  };

  console.log('current main image index:', currentMainImage);

  return (
    <div>
      <div className="main-carousel">
        <i className="left-arrow fa-solid fa-chevron-left fa-2xl" onClick={prevImage} />
        <i className="right-arrow fa-solid fa-chevron-right fa-2xl" onClick={nextImage} />

        {currentStylePhotos.map((photo, i) => (
          <div className={i === currentMainImage ? 'slide-active' : 'slide'} key={i}>
            {i === currentMainImage && <MainImage key={i} mainImage={image} photo={photo} />}
          </div>
        ))}
      </div>

      {currentStylePhotos.map((photo, i) => (
        <ImageSet key={i} photo={photo} />
      ))}
    </div>
  );
}

export default Image;
