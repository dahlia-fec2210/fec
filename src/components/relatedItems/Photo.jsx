/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';

function Photo({ product, productData, changeProduct }) {
  const [photoIndex, setPhotoIndex] = useState(0);

  if (productData) {
    return (
      <div className="related-photo">
        <img className="related-photo" src={productData.photos[photoIndex] || 'https://img.ltwebstatic.com/images3_pi/2022/04/06/16492430704a5786a3329d6838490cfcc903aa6996_thumbnail_600x.webp'} alt={product} />
        <div className="related-thumbnails" onClick={changeProduct}>
          { productData.thumbnails[0] !== null
            ? productData.thumbnails.map((thumbnail, index) => (
              <img
                onClick={(event) => {
                  event.stopPropagation();
                  setPhotoIndex(index);
                }}
                key={index}
                src={productData.thumbnails[index]}
                alt=""
              />
            ))
            : null}
        </div>
      </div>
    );
  }
  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible
    />
  );
}

export default Photo;
