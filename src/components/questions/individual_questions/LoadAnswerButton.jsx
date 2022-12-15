import React, { useState, useEffect } from 'react';
// import './AddAnswer.css';

function LoadAnswerButton({ handleClick, answersButtonRef }) {
  return (
    <button className="general-button" onClick={handleClick} ref={answersButtonRef}>
      More Answers
    </button>
  );
}

export default LoadAnswerButton;
