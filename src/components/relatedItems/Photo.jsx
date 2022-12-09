import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

function Photo({ product, productData }) {
  if (productData) {
    return (
      <img className="related-photo" src={productData[product].photo || 'https://img.ltwebstatic.com/images3_pi/2022/04/06/16492430704a5786a3329d6838490cfcc903aa6996_thumbnail_600x.webp'} alt={product} />
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
