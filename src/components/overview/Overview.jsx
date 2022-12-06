import React, { useState } from 'react';
import axios from 'axios';
import Image from './Image.jsx';
import ProductInfo from './ProductInfo.jsx';

function Overview({ productId, serverRoute }) {
  const [productInfo, setProductInfo] = useState(null);

  axios.get(`${serverRoute}/products/${productId}`)
    .then((info) => setProductInfo(info))
    .then(() => console.log('product info in Overview:', productInfo));

  return (
    <div>
      <h1>Overview</h1>
      <Image />
      <ProductInfo />
    </div>
  );
}

export default Overview;
