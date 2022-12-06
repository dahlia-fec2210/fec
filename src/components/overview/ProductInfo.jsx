import React, { useState } from 'react';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';

function ProductInfo({ productCategory, productName }) {
  const [productRating, setProductRating] = useState(''); // get from ???
  // const [productName, setProductName] = useState('');
  const [stylePrice, setStylePrice] = useState(''); // get from styles API

  return (
    <div>
      <h2>&gt; Product Info</h2>
      <h3>&gt; ⭐⭐⭐⭐⭐Product Rating</h3>
      <h3>{productCategory}</h3>
      <h3>{productName}</h3>
      <h3>&gt; $0.00</h3>
      <StyleSelector />
      <AddToCart />
      <h3>&gt; Share on Social Media</h3>
    </div>
  );
}

export default ProductInfo;
