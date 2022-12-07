import React, { useState } from 'react';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import DisplayStar from '../common/Star.jsx';

function ProductInfo({
  productCategory, productName, productRating, originalPrice, salePrice, productStyles,
}) {
  return (
    <div>
      <h2>&gt; Product Info</h2>
      <DisplayStar percentage={(productRating / 5) * 100} />
      <h3>{productCategory}</h3>
      <h3>{productName}</h3>
      { !salePrice ? <p>{originalPrice}</p>
        : (
          <div>
            <span><s>{originalPrice}</s></span>
            <span style={{ color: 'red' }}>{salePrice}</span>
          </div>
        )}
      <StyleSelector productStyles={productStyles} />
      <AddToCart />
      <h3>Share on Social Media</h3>
      <button type="button">Facebook</button>
      <button type="button">Twitter</button>
      <button type="button">Pinterest</button>
    </div>
  );
}

export default ProductInfo;
