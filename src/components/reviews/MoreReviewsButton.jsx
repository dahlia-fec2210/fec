import React from 'react';

function MoreReviewsButton({ addTwoItems }) {
  const handleClick = (e) => {
    e.preventDefault();
    addTwoItems();
  };
  return (
    <button type="button" onClick={handleClick}>
      More Reviews
    </button>
  );
}

export default MoreReviewsButton;
