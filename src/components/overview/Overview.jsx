import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from './Image.jsx';
import ProductInfo from './ProductInfo.jsx';

function Overview({ productId, serverRoute }) {
  const [productInfo, setProductInfo] = useState(null);
  const [productStyles, setProductStyles] = useState(null);

  useEffect(() => {
    axios.get(`${serverRoute}/products/${productId}`)
      .then((info) => {
        setProductInfo(info.data);
      })
      .catch((err) => {
        console.log('Error getting product info\n', err);
      });
  }, []);

  useEffect(() => {
    axios.get(`${serverRoute}/products/${productId}/styles`)
      .then((styles) => {
        setProductStyles(styles.data);
      })
      .catch((err) => {
        console.log('Error getting styles\n', err);
      });
  }, []);

  console.log('product styles:', productStyles);

  return (
    <div>
      <h1>Overview</h1>
      <Image />
      <ProductInfo />
    </div>
  );
}

export default Overview;
