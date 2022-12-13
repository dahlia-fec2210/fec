/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import axios from 'axios';

const serverRoute = `http://localhost:${process.env.PORT}`;

function Photo({ product, productData, changeProduct }) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [left, setLeft] = useState(0);

  const carouselStyle = {
    transform: `translate(-${left}px, 0)`,
    transition: 'transform 600ms ease-in-out',
  };

  function shiftRight(event) {
    event.preventDefault();
    setLeft(left + 60.5);
    axios.post('/interactions', { element: event.target.id, widget: 'Related Products', time: new Date().toTimeString() });
  }

  function shiftLeft(event) {
    event.preventDefault();
    event.preventDefault();
    setLeft(left - 60.5);
    axios.post('/interactions', { element: event.target.id, widget: 'Related Products', time: new Date().toTimeString() });
  }

  if (productData) {
    return (
      <div className="related-photo">
        { productData.photos[photoIndex] ? <img className="related-photo" src={productData.photos[photoIndex]} alt={product} />
          : <img onClick={changeProduct} className="related-photo" src="https://img.ltwebstatic.com/images3_pi/2022/04/06/16492430704a5786a3329d6838490cfcc903aa6996_thumbnail_600x.webp" alt={product} />}
        {productData.thumbnails[0] !== null
          ? (
            <div className="related-thumbnails" onClick={changeProduct}>
              { productData.thumbnails.map((thumbnail, index) => (
                <img
                  onClick={(event) => {
                    event.stopPropagation();
                    setPhotoIndex(index);
                    axios.post('/interactions', { element: `related-thumbnail-photo:${product}, ${thumbnail}`, widget: 'Related Products', time: new Date().toTimeString() });
                  }}
                  src={productData.thumbnails[index]}
                  alt=""
                  style={carouselStyle}
                />
              ))}
            </div>
          )
          : null}
        { productData.thumbnails[0] !== null
          ? (
            <div className="mini-left-arrow" onClick={shiftLeft}>
              { left !== 0 ? (
                <div className="related-stack fa-stack" style={{ verticalAlign: 'top' }}>
                  <i className="related-circle fa-solid fa-regular fa-circle fa-stack-2x" />
                  <i id={`related-thumbnails-carousel-left-arrow:${product}`} className="related-star fa-solid fa-chevron-left fa-stack-1x" />
                </div>
              ) : null}
            </div>
          )
          : null}
        { productData.thumbnails[0] !== null
          ? (
            <div className="mini-right-arrow" onClick={shiftRight}>
              { left < (productData.thumbnails.length - 4) * 60.5 ? (
                <div className="related-stack fa-stack" style={{ verticalAlign: 'top' }}>
                  <i className="related-circle fa-solid fa-regular fa-circle fa-stack-2x" />
                  <i id={`related-thumbnails-carousel-right-arrow:${product}`} className="related-star fa-solid fa-chevron-right fa-stack-1x" />
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
