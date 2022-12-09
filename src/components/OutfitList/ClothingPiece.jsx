/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner';
import Price from '../relatedItems/Price.jsx';
import Photo from '../relatedItems/Photo.jsx';
import Star from '../common/Star.jsx';

const serverRoute = `http://localhost:${process.env.PORT}`;

function ClothingPiece({
  clothingPiece, left, outfit, setOutfit, productData, setProductData, averages, setAverages,
}) {
  useEffect(() => {
    if (!productData[clothingPiece]) {
      axios.get(`${serverRoute}/getProduct/${clothingPiece}`)
        .then((data) => {
          if (data.data.length > 0) {
            const updatedProductData = productData;
            updatedProductData[clothingPiece] = {
              photo: data.data[0].photo,
              price: data.data[0].price,
              salePrice: data.data[0].salePrice,
            };
            setProductData(updatedProductData);
          } else {
            axios.get(`${serverRoute}/products/${clothingPiece}/styles`)
              .then((response) => {
                const updatedProductData = productData;
                updatedProductData[clothingPiece] = {
                  photo: response.data.results[0].photos[0].url,
                  price: response.data.results[0].original_price,
                  salePrice: response.data.results[0].sale_price,
                };
                setProductData(updatedProductData);

                axios.post(`${serverRoute}/productData`, {
                  id: clothingPiece,
                  photo: data.data.results[0].photos[0].url,
                  price: data.data.results[0].original_price,
                  salePrice: data.data.results[0].sale_price,
                });
              });
          }
        });
    }
  }, [outfit]);

  useEffect(() => {
    if (!averages[clothingPiece]) {
      axios.get(`${serverRoute}/average/${clothingPiece}`)
        .then((data) => {
          if (data.data.length > 0) {
            const updatedAverages = averages;
            updatedAverages[clothingPiece] = data.data[0].average;
            setAverages(updatedAverages);
          } else {
            axios.get(`${serverRoute}/reviews/meta/?product_id=${clothingPiece}`)
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
                updatedAverages[clothingPiece] = sum / numReviews;
                setAverages(updatedAverages);
                axios.post(`${serverRoute}/average`, {
                  id: clothingPiece,
                  average: averages[clothingPiece],
                });
              });
          }
        });
    }
  }, []);

  function removeFromOutfit(event) {
    event.preventDefault();

    axios.post(`${serverRoute}/delete`, clothingPiece, { withCredentials: true })
      .then(() => {
        axios.get(`${serverRoute}/outfit`, { withCredentials: true })
          .then((data) => {
            setOutfit(data.data);
          });
      });
  }

  if (clothingPiece !== null) {
    return (
      <div>
        <div className="related-product-card" style={{ left }}>
          <div className="related-stack" onClick={removeFromOutfit}>
            <div className="fa-stack" style={{ verticalAlign: 'top' }}>
              <i className="related-circle fa-solid fa-regular fa-circle fa-stack-2x" />
              <i className="related-star fa-solid fa-x fa-stack-1x" />
            </div>
          </div>
          <div>
            <Photo product={clothingPiece} productData={productData} />
            <div className="related-category">{clothingPiece.category}</div>
            <div className="related-name">{clothingPiece.name}</div>
            <Price
              price={productData[clothingPiece].price}
              salesPrices={productData[clothingPiece].salePrice}
            />
            <div className="related-stars">
              <Star percentage={(average / 5) * 100} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible
    />
  );
}

export default ClothingPiece;
