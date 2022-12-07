import React, { useState, useEffect } from 'react';

function LoadAnswerButton({ handleClick }) {
  return (
    <button onClick={handleClick}>
      More Answers
    </button>
  );
}

export default LoadAnswerButton;
