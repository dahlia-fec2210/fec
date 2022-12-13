import React from 'react';
import _ from 'lodash';
import logInteraction from '../logInteraction.jsx';

const ratingList = ['5', '4', '3', '2', '1'];

export default function RatingBreakdown({ ratings, addFilter, currentProduct }) {
  const totalRatings = (() => {
    let count = 0;
    _.each(ratings, (ratingCount) => {
      count += Number(ratingCount);
    });
    return count;
  })();
  const getRatingPercentage = (ratingNumber) => {
    const numberOfRatings = ratings[ratingNumber];
    return _.round((numberOfRatings / totalRatings) * 100, 2);
  };

  const handleRatingClick = (e) => {
    const id = `filter-${e.target.innerHTML[0]}-stars-btn`;
    logInteraction(id, [currentProduct]);
    addFilter(e.target.innerHTML[0]);
  };

  return (
    <div className="rb-container">
      {ratingList.map((rating) => {
        const percentage = getRatingPercentage(rating);
        const fillerStyles = {
          width: `${percentage}%`,
        };
        return (
          <div className="rating-bar-container" key={rating}>
            <span className="rating-bar-label" onClick={handleRatingClick}>
              {rating}
              {' '}
              stars
              {' '}
            </span>
            <div className="rating-bar-padding">
              <div className="rating-outer-bar">
                <div className="rating-filler" style={fillerStyles} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
