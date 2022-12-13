import React from 'react';
import logInteraction from '../../logInteraction.jsx';

export default function SelectRecommend({ setRecommend, productId }) {
  const handleClick = (e) => {
    if (e.target.id !== '') {
      logInteraction(e.target.id, [productId]);
    }
    if (e.target.value === 'Yes') {
      setRecommend(true);
    } else {
      setRecommend(false);
    }
  };
  return (
    <div className="review-select-recommend">
      <div>Would you recommend this product?</div>
      <div className="review-radio-group">
        <input onClick={handleClick} type="radio" name="recommend" id="yes-rec" value="Yes" />
        <label onClick={handleClick} htmlFor="yes-rec">Yes</label>
        <input onClick={handleClick} type="radio" name="recommend" id="no-rec" value="No" />
        <label onClick={handleClick} htmlFor="no-rec">No</label>
      </div>
    </div>
  );
}
