import React from 'react';
import RatingRecommend from './RatingRecommend.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import CharacteristicBreakdown from './CharacteristicBreakdown.jsx';

export default function ProductBreakdown({ metaData, addFilter }) {
  return (
    <div className="review-pb-container">
      <div className="section-title">RATINGS & REVIEWS</div>
      <RatingRecommend metaData={metaData} />
      <RatingBreakdown
        ratings={metaData.ratings}
        addFilter={addFilter}
        currentProduct={metaData.product_id}
      />
      <CharacteristicBreakdown characteristics={metaData.characteristics} />
    </div>
  );
}
