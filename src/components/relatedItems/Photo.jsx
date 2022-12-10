/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';

function Photo({ product, productData, changeProduct }) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [left, setLeft] = useState(0);
  const [carousel, setCarousel] = useState([0, 1, 2, 3]);

  function shiftUp(event) {
    event.preventDefault();
    const newCarousel = carousel.map((index) => index + 1);
    setCarousel(newCarousel);
  }

  function shiftDown(event) {
    event.preventDefault();
    const newCarousel = carousel.map((index) => index - 1);
    console.log(newCarousel);
    setCarousel(newCarousel);
  }

  if (productData) {
    return (
      <div className="related-photo">
        { productData.photos[photoIndex] ? <img className="related-photo" src={productData.photos[photoIndex]} alt={product} />
          : <img onClick={changeProduct} className="related-photo" src="https://img.ltwebstatic.com/images3_pi/2022/04/06/16492430704a5786a3329d6838490cfcc903aa6996_thumbnail_600x.webp" alt={product} />}
        {productData.thumbnails[0] !== null
          ? (
            <div className="related-thumbnails" onClick={changeProduct}>
              <img
                onClick={(event) => {
                  event.stopPropagation();
                  setPhotoIndex(carousel[0]);
                }}
                src={productData.thumbnails[carousel[0]]}
                alt=""
              />
              <img
                onClick={(event) => {
                  event.stopPropagation();
                  setPhotoIndex(carousel[1]);
                }}
                src={productData.thumbnails[carousel[1]]}
                alt=""
              />
              <img
                onClick={(event) => {
                  event.stopPropagation();
                  setPhotoIndex(carousel[2]);
                }}
                src={productData.thumbnails[carousel[2]]}
                alt=""
              />
              <img
                onClick={(event) => {
                  event.stopPropagation();
                  setPhotoIndex(carousel[3]);
                }}
                src={productData.thumbnails[carousel[3]]}
                alt=""
              />
            </div>
          )
          : null}
        { productData.thumbnails[0] !== null
          ? (
            <div className="mini-left-arrow" onClick={shiftDown}>
              {carousel[0] > 0 ? (
                <div className="related-stack fa-stack" style={{ verticalAlign: 'top' }}>
                  <i className="related-circle fa-solid fa-regular fa-circle fa-stack-2x" />
                  <i className="related-star fa-solid fa-chevron-left fa-stack-1x" />
                </div>
              ) : null}
            </div>
          )
          : null}
        { productData.thumbnails[0] !== null
          ? (
            <div className="mini-right-arrow" onClick={shiftUp}>
              {carousel[3] < productData.thumbnails.length - 1 ? (
                <div className="related-stack fa-stack" style={{ verticalAlign: 'top' }}>
                  <i className="related-circle fa-solid fa-regular fa-circle fa-stack-2x" />
                  <i className="related-star fa-solid fa-chevron-right fa-stack-1x" />
                </div>
              ) : null}
            </div>
          )
          : null}
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
