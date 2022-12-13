import React, { useState, useEffect } from 'react';
import './AddAnswer.css';

function LoadQuestionButton({ handleClick }) {
  return (
    <button className="general-button" onClick={handleClick}>
      More Answered Questions
    </button>
  );
}

export default LoadQuestionButton;
