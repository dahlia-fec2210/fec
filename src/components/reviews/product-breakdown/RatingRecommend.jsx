import React from 'react';
import _ from 'lodash';
import Star from '../../common/Star.jsx';

export default function RatingRecommend({ metaData }) {
  const findOverallRating = (allRatings) => {
    let count = 0;
    let ratingTotal = 0;
    _.each(allRatings, (numberOfRatingsStr, ratingStr) => {
      const numberOfRatings = Number(numberOfRatingsStr);
      const rating = Number(ratingStr);
      ratingTotal += (numberOfRatings * rating);
      count += numberOfRatings;
    });
    return _.round(ratingTotal / count, 1);
  };
  const findRecommendation = (recommendations) => {
    const truths = Number(recommendations.true);
    const falses = Number(recommendations.false);
    return _.round(truths / (truths + falses), 2) * 100;
  };

  const overallRating = findOverallRating(metaData.ratings);
  const recommendation = findRecommendation(metaData.recommended);
  return (
    <div>
      <div className="overall-and-star">
        <div className="pb-overall">{overallRating}</div>
        <div className="pb-star">
          <Star percentage={(overallRating / 5) * 100} />
        </div>
      </div>
      <div className="rating-recommendation">
        {recommendation}
        % of reviews recommended this item.
      </div>
    </div>
  );
}

// const metadata = {
//   characteristics: {
//     Comfort: {
//       id: 125054,
//       value: '3.63636363634',
//     },
//   },
//   product_id: '37317',
//   ratings: {
//     1: '2',
//     2: '2',
//   },
//   recommended: {
//     false: '4',
//     true: '59',
//   },

// };
