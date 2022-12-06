import React, { useState } from 'react';
import axios from 'axios';
import Image from './Image.jsx';
import ProductInfo from './ProductInfo.jsx';

function Overview({ productId }) {
  const [productInfo, setProductInfo] = useState(null);
  return (
    <div>
      <h1>Overview</h1>
      <Image />
      <ProductInfo />
    </div>
  );
}

export default Overview;
