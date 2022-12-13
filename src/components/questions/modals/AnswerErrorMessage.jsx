import React from 'react';

export default function QuestionErrorMessage({ errors }) {
  return (
    <div className="question-errors-container">
      {errors.map((error, index) => (
        <div key={index} className="review-submit-errors">
          {error}
        </div>
      ))}
    </div>
  );
}
