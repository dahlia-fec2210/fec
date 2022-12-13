/* eslint-disable no-plusplus */
import React from 'react';
import { IoStar } from 'react-icons/io5';
import logInteraction from '../../logInteraction.jsx';

const { useState } = React;
const ratings = ['Poor', 'Fair', 'Average', 'Good', 'Great'];

export default function SelectOverallRating({ overallRating, setOverallRating, productId }) {
  const [hover, setHover] = useState(null);
  let key = 0;
  const handleClick = (e) => {
    logInteraction(e.target.id, [productId]);
    setOverallRating(Number(e.target.value));
  };
  const getKey = () => key++;
  return (
    <div className="select-overall-rating">
      <div>
        Overall Rating:
        {' '}
        <span className="rating-description">{overallRating ? ratings[overallRating - 1] : null}</span>
      </div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={getKey()}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={handleClick}
              id={`select-rating-${ratingValue}`}

            />
            <IoStar
              className="overall-star"
              color={ratingValue <= (hover || overallRating) ? '#ffc107' : '#d4d5d9'}
              size={20}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}

            />
          </label>
        );
      })}
    </div>
  );
}
