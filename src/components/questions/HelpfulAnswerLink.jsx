import React, { useState, useEffect } from 'react';

function HelpfulAnswerLink({ answer }) {
  const helpfulClicked = () => {
    console.log('clicked');
  };

  return (
    <div>
      <div onClick={helpfulClicked}>
        Helpful?
        {' '}
        Yes
        {' ('}
        {answer.helpfulness}
        {') '}
      </div>
    </div>
  );
}

export default HelpfulAnswerLink;
