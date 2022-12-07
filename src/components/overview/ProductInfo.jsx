import React, { useState } from 'react';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import DisplayStar from '../common/Star.jsx';

function ProductInfo({ productCategory, productName, productRating }) {
  // const [productRating, setProductRating] = useState(''); // get from ???
  // const [productName, setProductName] = useState('');
  const [stylePrice, setStylePrice] = useState(''); // get from styles API
  // setProductRating(Math.round(productRating));

  return (
    <div>
      <h2>&gt; Product Info</h2>
      <h3>{productRating}</h3>
      <DisplayStar percentage={(productRating / 5) * 100} />
      <h3>{productCategory}</h3>
      <h3>{productName}</h3>
      <h3>&gt; $0.00</h3>
      <StyleSelector />
      <AddToCart />
      <h3>Share on Social Media</h3>
      <button type="button">Facebook</button>
      <button type="button">Twitter</button>
      <button type="button">Pinterest</button>
    </div>
  );
}

export default ProductInfo;
