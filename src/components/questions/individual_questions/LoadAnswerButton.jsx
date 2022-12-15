import React, { useState, useEffect } from 'react';
// import './AddAnswer.css';

function LoadAnswerButton({ handleClick }) {
  return (
    <button className="general-button" onClick={handleClick}>
      More Answers
    </button>
  );
}

export default LoadAnswerButton;
