import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from './Image.jsx';
import ProductInfo from './ProductInfo.jsx';

function Overview({ productId, serverRoute }) {
  const [productInfo, setProductInfo] = useState(null);
  const [productStyles, setProductStyles] = useState([]);
  const [productImage, setProductImage] = useState('https://static.wikia.nocookie.net/kingdom-keymasters-database/images/2/27/001Bulbasaur_XY_anime.png/revision/latest?cb=20160927122032');

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
      <Image image={productImage} />
      <ProductInfo />
    </div>
  );
}

export default Overview;
