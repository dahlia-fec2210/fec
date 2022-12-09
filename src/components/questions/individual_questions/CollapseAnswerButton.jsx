import React, { useState, useEffect } from 'react';

function CollapseAnswerButton({ handleClick }) {
  return (
    <button onClick={handleClick}>
      Collapse Answers
    </button>
  );
}

export default CollapseAnswerButton;
