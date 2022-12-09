import React from 'react';

const { useRef } = React;
function MoreReviewsButton({ addTwoItems }) {
  const bottomRef = useRef(null);
  const handleClick = (e) => {
    e.preventDefault();
    addTwoItems();
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <button type="button" onClick={handleClick}>
        More Reviews
      </button>
      <div ref={bottomRef} />
    </>
  );
}

export default MoreReviewsButton;
