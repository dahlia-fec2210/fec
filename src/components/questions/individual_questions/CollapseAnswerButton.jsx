import React, { useState, useEffect } from 'react';

function CollapseAnswerButton({ handleClick }) {
  return (
    <button className="general-button" onClick={handleClick}>
      Collapse Answers
    </button>
  );
}

export default CollapseAnswerButton;
