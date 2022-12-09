/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner';
import Photo from './Photo.jsx';
import Price from './Price.jsx';
import Star from '../common/Star.jsx';

const serverRoute = `http://localhost:${process.env.PORT}`;

function RelatedProduct({
  product, left, setCurrentProduct,
  setOpenModal, setModalProduct,
  averages, setAverages,
}) {
  const [productData, setProductData] = useState({});
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    axios.get(`${serverRoute}/products/${product}/styles`)
      .then((data) => {
        const styles = data.data.results;
        const photos = [];
        const thumbnails = [];
        styles.forEach((style) => {
          for (let i = 0; i < style.photos.length; i++) {
            if (!photos.includes(style.photos[i].url)) { photos.push(style.photos[i].url); }
            if (!thumbnails.includes(style.photos[i].thumbnail_url)) {
              thumbnails.push(style.photos[i].thumbnail_url);
            }
          }
        });

        setProductData({
          photos,
          thumbnails,
          price: data.data.results[0].original_price,
          salePrice: data.data.results[0].sale_price,
        });
      });
  }, []);

  useEffect(() => {
    axios.get(`${serverRoute}/products/${product}`)
      .then((data) => {
        setProductInfo(data.data);
      });
  }, []);

  useEffect(() => {
    axios.get(`${serverRoute}/reviews/meta/?product_id=${product}`)
      .then((data) => {
        const updatedAverages = averages;
        const reviews = data.data.ratings;
        const keys = Object.keys(reviews);
        let sum = 0;
        let numReviews = 0;
        keys.forEach((key) => {
          sum += (key * reviews[key]);
          numReviews += Number(reviews[key]);
        });
        updatedAverages[product] = sum / numReviews;
        setAverages(updatedAverages);
        axios.post(`${serverRoute}/average`, {
          id: product,
          average: averages[product],
        });
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

  console.log(productData);

  if (productData.price) {
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
          <div>
            <Photo changeProduct={changeProduct} product={product} productData={productData} />
            <div className="related-category">{productInfo.category}</div>
            <div className="related-name">{productInfo.name}</div>
            <Price
              price={productData.price}
              salesPrices={productData.salePrice}
            />
            {/* <div className="related-stars">
              <Star percentage={(averages[product] / 5) * 100} />
            </div> */}

          </div>

        </div>
      </div>
    );
  }
  return (
    <div>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible
      />
    </div>
  );
}

export default RelatedProduct;
