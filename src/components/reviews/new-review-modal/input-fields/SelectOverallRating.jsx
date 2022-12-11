import React from 'react';
import { IoStar } from 'react-icons/io5';

const { useState } = React;
const ratings = ['Poor', 'Fair', 'Average', 'Good', 'Great'];

export default function SelectOverallRating({ overallRating, setOverallRating }) {
  const [hover, setHover] = useState(null);

  const handleClick = (e) => {
    setOverallRating(Number(e.target.value));
  };
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
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={handleClick}

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
