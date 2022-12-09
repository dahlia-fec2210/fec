import React from 'react';
import { IoStar } from 'react-icons/io5';

function DisplayStar({ percentage }) {
  const style = {
    width: `${percentage}%`,
  };

  return (
    <div className="ratings">
      <div className="empty-stars">{displayFiveStars()}</div>
      <div className="full-stars" style={style}>{displayFiveStars()}</div>
    </div>
  );
}

export default DisplayStar;
