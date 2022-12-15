import React from 'react';
import logInteraction from './logInteraction.jsx';

function MoreReviewsButton({
  addTwoItems, bottomReviewsRef, buttonRef, currentProduct,
}) {
  const handleClick = (e) => {
    e.preventDefault();
    logInteraction(e.target.id, [currentProduct]);
    addTwoItems();
    setTimeout(() => {
      bottomReviewsRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      setTimeout(() => {
        buttonRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
      }, 350);
      bottomReviewsRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      setTimeout(() => {
        buttonRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
      }, 350);
    }, 200);
  };
  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="more-reviews-btn"
        id="show-more-reviews-btn"
        data-testid="add-more-reviews"
      >
        More Reviews
      </button>
      <div ref={buttonRef} />
    </>
  );
}

export default MoreReviewsButton;
