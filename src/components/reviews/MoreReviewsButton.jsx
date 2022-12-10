import React from 'react';

const { useRef } = React;
function MoreReviewsButton({ addTwoItems, bottomReviewsRef }) {
  const buttonRef = useRef(null);
  const handleClick = (e) => {
    e.preventDefault();
    addTwoItems();
    setTimeout(() => {
      buttonRef.current.scrollIntoView({ behavior: 'smooth' });
      bottomReviewsRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };
  return (
    <>
      <button type="button" onClick={handleClick}>
        More Reviews
      </button>
      <div ref={buttonRef} />
    </>
  );
}

export default MoreReviewsButton;
