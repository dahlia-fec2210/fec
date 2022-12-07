import React, { useState, useEffect } from 'react';

function LoadQuestionButton({ handleClick }) {
  return (
    <button onClick={handleClick}>
      More Answered Questions
    </button>
  );
}

export default LoadQuestionButton;
