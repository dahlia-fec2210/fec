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
  setOpenModal, setModalProduct, productData, setProductData,
  averages, setAverages,
}) {
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    axios.get(`${serverRoute}/products/${product}`)
      .then((data) => {
        setProductInfo(data.data);
      });
  }, []);

  useEffect(() => {
    if (!productData[product]) {
      axios.get(`${serverRoute}/getProduct/${product}`)
        .then((data) => {
          if (data.data.length > 0) {
            const updatedProductData = productData;
            updatedProductData[product] = {
              photos: data.data[0].photos,
              thumbnails: data.data[0].thumbnails,
              price: data.data[0].price,
              salePrice: data.data[0].salePrice,
            };
            setProductData(updatedProductData);
          } else {
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
                const updatedProductData = productData;
                updatedProductData[product] = {
                  photos,
                  thumbnails,
                  price: data.data.results[0].original_price,
                  salePrice: data.data.results[0].sale_price,
                };
                setProductData(updatedProductData);

                axios.post(`${serverRoute}/productData`, {
                  id: product,
                  photos,
                  thumbnails,
                  price: data.data.results[0].original_price,
                  salePrice: data.data.results[0].sale_price,
                });
              });
          }
        });
    }
  }, []);

  useEffect(() => {
    if (!averages[product]) {
      axios.get(`${serverRoute}/average/${product}`)
        .then((data) => {
          if (data.data.length > 0) {
            const updatedAverages = averages;
            updatedAverages[product] = data.data[0].average;
            setAverages(updatedAverages);
          } else {
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
          }
        });
    }
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

  if (productInfo && productData[product]) {
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
            <Photo product={product} productData={productData} />
            <div className="related-category">{productInfo.category}</div>
            <div className="related-name">{productInfo.name}</div>
            <Price
              price={productData[product].price}
              salesPrices={productData[product].salePrice}
            />
            <div className="related-stars">
              <Star percentage={(averages[product] / 5) * 100} />
            </div>

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
