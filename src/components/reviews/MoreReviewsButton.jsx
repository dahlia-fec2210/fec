import React from 'react';

const { useRef } = React;
function MoreReviewsButton({ addTwoItems, bottomReviewsRef }) {
  const buttonRef = useRef(null);
  const handleClick = (e) => {
    e.preventDefault();
    addTwoItems();
    buttonRef.current.scrollIntoView({ behavior: 'smooth' });
    bottomReviewsRef.current.scrollIntoView({ behavior: 'smooth' });
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
