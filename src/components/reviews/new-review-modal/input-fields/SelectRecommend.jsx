import React from 'react';

export default function SelectRecommend({ setRecommend }) {
  const handleClick = (e) => {
    console.log(e.target.innerText || e.target.value);
    if (e.target.value === 'Yes') {
      setRecommend(true);
    } else {
      setRecommend(false);
    }
  };
  return (
    <div className="review-select-recommend">
      <div>Would you recommend this product?</div>
      <div className="review-radio-container">
        <div className="review-checkboxgroup">
          <label onClick={handleClick} htmlFor="yes-rec">Yes</label>
          <input onClick={handleClick} type="radio" name="recommend" id="yes-rec" value="Yes" />
        </div>
        <div className="review-checkboxgroup">
          <label onClick={handleClick} htmlFor="no-rec">No</label>
          <input onClick={handleClick} type="radio" name="recommend" id="no-rec" value="No" />
        </div>
      </div>
    </div>
  );
}
