import React from 'react';
import logInteraction from './logInteraction.jsx';

const { useRef } = React;
function MoreReviewsButton({ addTwoItems, bottomReviewsRef, currentProduct }) {
  const buttonRef = useRef(null);
  const handleClick = (e) => {
    e.preventDefault();
    logInteraction(e.target.id, [currentProduct]);
    addTwoItems();
    setTimeout(() => {
      buttonRef.current.scrollIntoView({ behavior: 'smooth' });
      bottomReviewsRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };
  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="more-reviews-btn"
        id="show-more-reviews-btn"
      >
        More Reviews
      </button>
      <div ref={buttonRef} />
    </>
  );
}

export default MoreReviewsButton;
