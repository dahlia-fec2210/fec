/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Price from './Price.jsx';
import Star from '../common/Star.jsx';

const serverRoute = `http://localhost:${process.env.PORT}`;

function RelatedProduct({
  product, left, setCurrentProduct, setOpenModal, setModalProduct,
}) {
  const [productInfo, setProductInfo] = useState(null);
  const [photo, setPhoto] = useState('');
  const [price, setPrice] = useState(null);
  const [salesPrice, setSalesPrice] = useState(null);
  const [average, setAverage] = useState(0);

  useEffect(() => {
    axios.get(`${serverRoute}/products/${product}`)
      .then((data) => {
        setProductInfo(data.data);
      });
  }, []);

  useEffect(() => {
    axios.get(`${serverRoute}/products/${product}/styles`)
      .then((data) => {
        console.log(data.data);
        setPrice(data.data.results[0].original_price);
        setSalesPrice(data.data.results[0].sale_price);
        setPhoto(data.data.results[0].photos[0].url);
      });
  }, []);

  useEffect(() => {
    axios.get(`${serverRoute}/reviews/meta/?product_id=${product}`)
      .then((data) => {
        const reviews = data.data.ratings;
        const keys = Object.keys(reviews);
        let sum = 0;
        let numReviews = 0;
        keys.forEach((key) => {
          sum += (key * reviews[key]);
          numReviews += Number(reviews[key]);
        });
        setAverage(sum / numReviews);
      });
  }, []);

  function changeProduct(event) {
    event.preventDefault();
    setCurrentProduct(product);
  }

  function openModal(event) {
    event.preventDefault();
    setOpenModal(true);
    setModalProduct(product);
  }

  if (productInfo !== null) {
    return (
      <div>
        <div className="related-product-card" style={{ left }}>
          <div
            className="related-stack"
            onClick={openModal}
          >
            <div className="fa-stack" style={{ verticalAlign: 'top' }}>
              <i className="related-circle fa-solid fa-regular fa-circle fa-stack-2x" />
              <i className="related-star fa-solid fa-star fa-stack-1x" />
            </div>
          </div>
          <div onClick={changeProduct}>
            <img className="related-photo" src={photo || 'https://img.ltwebstatic.com/images3_pi/2022/04/06/16492430704a5786a3329d6838490cfcc903aa6996_thumbnail_600x.webp'} alt={productInfo.name} />
            <div className="related-category">{productInfo.category}</div>
            <div className="related-name">{productInfo.name}</div>
            <Price price={price} salesPrice={salesPrice} />
            <div className="related-stars">
              <Star percentage={(average / 5) * 100} />
            </div>

          </div>

        </div>
      </div>
    );
  }
  return (
    <div>Loading...</div>
  );
}

export default RelatedProduct;
