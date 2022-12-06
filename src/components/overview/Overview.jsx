import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from './Image.jsx';
import ProductInfo from './ProductInfo.jsx';

function Overview({ productId, serverRoute }) {
  const [productInfo, setProductInfo] = useState(null);
  const [productStyles, setProductStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState(null);
  const [productImage, setProductImage] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productName, setProductName] = useState('');

  useEffect(() => {
    axios.get(`${serverRoute}/products/${productId}`)
      .then((info) => {
        setProductInfo(info.data);
        setProductCategory(info.data.category);
        setProductName(info.data.name);
      })
      .catch((err) => {
        console.log('Error getting product info\n', err);
      });
  }, []);

  useEffect(() => {
    axios.get(`${serverRoute}/products/${productId}/styles`)
      .then((styles) => {
        setProductStyles(styles.data.results);
        setCurrentStyle(styles.data.results[0]);
        setProductImage(styles.data.results[0].photos[0].url);
      })
      .catch((err) => {
        console.log('Error getting styles\n', err);
      });
  }, []);

  return (
    <div>
      <Image image={productImage} />
      <ProductInfo productCategory={productCategory} productName={productName} />
    </div>
  );
}

export default Overview;
