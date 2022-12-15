/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner';
import Price from '../relatedItems/Price.jsx';
import Star from '../common/Star.jsx';
import RemoveButton from './RemoveButton.jsx';
import OutfitCardPhoto from './OutfitCardPhoto.jsx';

const serverRoute = `http://localhost:${process.env.PORT}`;

function ClothingPiece({
  clothingPiece, outfit, setOutfit, left,
}) {
  const [price, setPrice] = useState(0);
  const [photo, setPhoto] = useState(null);
  const [salePrice, setSalePrice] = useState(0);
  const [productInfo, setProductInfo] = useState({});
  const [average, setAverage] = useState(0);

  const carouselStyle = {
    transform: `translate(-${left}px, 0)`,
    transition: 'transform 900ms ease-in-out',
  };

  useEffect(() => {
    const cache = JSON.parse(localStorage.getItem(`productInfo-${clothingPiece}`));
    if (cache === null) {
      axios.get(`${serverRoute}/products/${clothingPiece}`)
        .then((data) => {
          localStorage.setItem(`productInfo-${clothingPiece}`, data.data);
          setProductInfo(data.data);
        });
    } else {
      setProductInfo(cache);
    }
  }, []);

  useEffect(() => {
    const cache = JSON.parse(localStorage.getItem(`productData-${clothingPiece}`));
    if (cache === null) {
      axios.get(`${serverRoute}/products/${clothingPiece}/styles`)
        .then((response) => {
          cache.photos = response.data.results[0].photos[0].url;
          cache.price = response.data.results[0].original_price;
          cache.salePrice = response.data.results[0].sale_price;
          localStorage.setItem(`productData-${clothingPiece}`, JSON.stringify(cache));
          setPhoto(response.data.results[0].photos[0].url);
          setPrice(response.data.results[0].original_price);
          setSalePrice(response.data.results[0].sale_price);
        });
    } else {
      setPhoto(cache.photos[0]);
      setPrice(cache.price);
      setSalePrice(cache.salePrice);
    }
  }, [outfit]);

  useEffect(() => {
    const cache = JSON.parse(localStorage.getItem('averageReview')) || {};
    if (!cache[clothingPiece]) {
      axios.get(`${serverRoute}/reviews/meta/?product_id=${clothingPiece}`)
        .then((data) => {
          const reviews = data.data.ratings;
          const keys = Object.keys(reviews);
          let sum = 0;
          let numReviews = 0;
          keys.forEach((key) => {
            sum += (key * reviews[key]);
            numReviews += Number(reviews[key]);
          });
          cache[clothingPiece] = sum / numReviews;
          localStorage.setItem('averageReview', JSON.stringify(cache));
          setAverage(sum / numReviews);
        });
    } else {
      setAverage(cache[clothingPiece]);
    }
  }, []);

  function removeFromOutfit(event) {
    event.preventDefault();
    const newOutfit = outfit.filter((piece) => piece !== clothingPiece);
    setOutfit(newOutfit);
    localStorage.setItem('outfit', JSON.stringify(newOutfit));
    axios.post(`${serverRoute}/interactions`, { element: event.target.id, widget: 'Related Products', time: new Date().toTimeString() });
  }

  if (clothingPiece !== null && productInfo !== {}) {
    return (
      <div>
        <div className="related-product-card" style={carouselStyle}>
          <RemoveButton removeFromOutfit={removeFromOutfit} clothingPiece={clothingPiece} />
          <div>
            <OutfitCardPhoto photo={photo} clothingPiece={clothingPiece} />
            <div className="related-category">{productInfo.category}</div>
            <div className="related-name">{productInfo.name}</div>
            <Price
              price={price}
              salesPrices={salePrice}
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
