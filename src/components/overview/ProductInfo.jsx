import React, { useState } from 'react';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import DisplayStar from '../common/Star.jsx';

function ProductInfo({
  productCategory, productName, productRating, originalPrice, salePrice,
  productStyles, currentStyleSkus, setCurrentStylePhotos,
}) {
  console.log('productStyles in ProductInfo:', productStyles);
  return (
    <div className="product-info-container">
      <DisplayStar percentage={(productRating / 5) * 100} />
      <span><small>Read all reviews</small></span>
      <h3 className="overview-category">{productCategory}</h3>
      <h3 className="overview-name">{productName}</h3>
      { !salePrice ? <p>{originalPrice}</p>
        : (
          <div>
            <span><s>{originalPrice}</s></span>
            <span style={{ color: 'red' }}>{salePrice}</span>
          </div>
        )}
      <StyleSelector
        productStyles={productStyles}
        setCurrentStylePhotos={setCurrentStylePhotos}
      />
      <AddToCart currentStyleSkus={currentStyleSkus} />
      <h3>Share on Social Media</h3>
      <button type="button">Facebook</button>
      <button type="button">Twitter</button>
      <button type="button">Pinterest</button>
    </div>
  );
}

export default ProductInfo;
