import React from 'react';

export default function ErrorMessage({ errors }) {
  return (
    <div>
      {errors.map((error) => (
        <div className="review-submit-errors">
          {error}
        </div>
      ))}
    </div>
  );
}
