import React, { useState } from 'react';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import DisplayStar from '../common/Star.jsx';

function ProductInfo({
  productCategory, productName, productRating, originalPrice, salePrice,
  productStyles, currentStyleSkus, setCurrentStylePhotos,
}) {
  // console.log('productStyles in ProductInfo:', productStyles);
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
      <div className="social-media">

        <a className="twitter-share-button" href="https://twitter.com/intent/tweet" data-size="large">
          <i className="fa-brands fa-twitter" />
          <span className="twitter-label">Tweet</span>
        </a>

        <div className="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore" rel="noreferrer">Share</a></div>

        <a className="pinterest-share-button" href="https://www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark" data-pin-tall="true"> </a>
      </div>
    </div>
  );
}

export default ProductInfo;
