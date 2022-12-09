import React, { useState, useEffect } from 'react';

function CollapseQuestionButton({ handleClick }) {
  return (
    <button onClick={handleClick}>
      Collapse Answered Questions
    </button>
  );
}

export default CollapseQuestionButton;
