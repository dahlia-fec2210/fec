/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Price from '../relatedItems/Price.jsx';
import Star from '../common/Star.jsx';

const serverRoute = `http://localhost:${process.env.PORT}`;

function ClothingPiece({
  clothingPiece, left, outfit, setOutfit,
}) {
  const [photo, setPhoto] = useState(null);
  const [price, setPrice] = useState(null);
  const [salesPrice, setSalesPrice] = useState(null);
  const [average, setAverage] = useState(0);

  useEffect(() => {
    axios.get(`${serverRoute}/products/${clothingPiece.id}/styles`)
      .then((data) => {
        setPhoto(data.data.results[0].photos[0].url);
        setPrice(data.data.results[0].original_price);
        setSalesPrice(data.data.results[0].sale_price);
      });
  }, [outfit]);

  useEffect(() => {
    axios.get(`${serverRoute}/reviews/meta/?product_id=${clothingPiece.id}`)
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
            <img className="related-photo" src={photo || 'https://img.ltwebstatic.com/images3_pi/2022/04/06/16492430704a5786a3329d6838490cfcc903aa6996_thumbnail_600x.webp'} alt={clothingPiece.name} />
            <div className="related-category">{clothingPiece.category}</div>
            <div className="related-name">{clothingPiece.name}</div>
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

export default ClothingPiece;