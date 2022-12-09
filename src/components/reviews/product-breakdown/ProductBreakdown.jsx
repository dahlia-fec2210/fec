import React from 'react';
import RatingRecommend from './RatingRecommend.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';

export default function ProductBreakdown({ metaData, addFilter }) {
  return (
    <div className="review-pb-container">
      <RatingRecommend metaData={metaData} />
      <RatingBreakdown ratings={metaData.ratings} addFilter={addFilter} />
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
