import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from './Image.jsx';
import ProductInfo from './ProductInfo.jsx';
import './overview.css';

function Overview({ productId, serverRoute }) {
  const [productInfo, setProductInfo] = useState({});
  const [productStyles, setProductStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({});
  const [currentStyleSkus, setCurrentStyleSkus] = useState({});
  const [productImage, setProductImage] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productName, setProductName] = useState('');
  const [productRating, setProductRating] = useState(0);
  const [originalPrice, setOriginalPrice] = useState(0);
  const [salePrice, setSalePrice] = useState(null);
  const [currentStylePhotos, setCurrentStylePhotos] = useState([]);
  const [productFeatures, setProductFeatures] = useState([]);

  useEffect(() => {
    axios.get(`${serverRoute}/products/${productId}`)
      .then((info) => {
        setProductInfo(info.data);
        setProductCategory(info.data.category);
        setProductName(info.data.name);
        setProductFeatures(info.data.features);
      })
      .catch((err) => {
        console.log('Error getting product info\n', err);
      });
  }, [productId]);

  useEffect(() => {
    axios.get(`${serverRoute}/products/${productId}/styles`)
      .then((styles) => {
        setProductStyles(styles.data.results);
        setCurrentStyle(styles.data.results[0]);
        setCurrentStylePhotos(styles.data.results[0].photos);
        setCurrentStyleSkus(styles.data.results[0].skus);
        setProductImage(styles.data.results[0].photos[0].url);
        setOriginalPrice(styles.data.results[0].original_price);
        setSalePrice(styles.data.results[0].sale_price);
      })
      .catch((err) => {
        console.log('Error getting styles\n', err);
      });
  }, [productId]);

  useEffect(() => {
    axios.get(`${serverRoute}/reviews/meta/?product_id=${productId}`)
      .then((data) => {
        const reviews = data.data.ratings;
        const keys = Object.keys(reviews);
        let sum = 0;
        let numReviews = 0;
        keys.forEach((key) => {
          sum += (key * reviews[key]);
          numReviews += Number(reviews[key]);
        });
        setProductRating(sum / numReviews);
      });
  }, [productId]);

  // console.log('product styles:', productStyles);
  // console.log('current style:', currentStyle);
  // console.log('product info:', productInfo);
  console.log('features:', productFeatures);

  return (
    <div className="overview-container">
      <Image currentStylePhotos={currentStylePhotos} />
      <ProductInfo
        productCategory={productCategory}
        productName={productName}
        productRating={productRating}
        originalPrice={originalPrice}
        salePrice={salePrice}
        productStyles={productStyles}
        currentStyleSkus={currentStyleSkus}
        setCurrentStylePhotos={setCurrentStylePhotos}
      />
      <div className="product-description">
        <div className="description">
          <h3>{productInfo.slogan}</h3>
          <p>{productInfo.description}</p>
        </div>
        <ul className="features">
          {productFeatures.map((feature, i) => (
            <li key={i}>
              <strong>✓</strong>
              {` ${feature.feature}: ${feature.value}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Overview;
