import React from 'react';

export default function ErrorMessage({ errors }) {
  return (
    <div className="review-errors-container">
      {errors.map((error) => (
        <div className="review-submit-errors">
          {error}
        </div>
      ))}
    </div>
  );
}
