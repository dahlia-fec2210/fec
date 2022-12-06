import React from 'react';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';

function ProductInfo() {
  return (
    <div>
      <h2>&gt; Product Info</h2>
      <h3>&gt; ⭐⭐⭐⭐⭐Product Rating</h3>
      <h3>&gt; PRODUCT CATEGORY</h3>
      <h3>&gt; Product Name</h3>
      <h3>&gt; $0.00</h3>
      <StyleSelector />
      <AddToCart />
      <h3>&gt; Share on Social Media</h3>
    </div>
  );
}

export default ProductInfo;
