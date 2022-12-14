import React, { useState, useEffect } from 'react';
// import './AddAnswer.css';

function LoadQuestionButton({ handleClick }) {
  return (
    <button className="load-question-button" onClick={handleClick}>
      More Answered Questions
    </button>
  );
}

export default LoadQuestionButton;
