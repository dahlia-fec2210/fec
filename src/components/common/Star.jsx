import React from 'react';

function DisplayStar({ percentage }) {
  const style = {
    width: `${percentage}%`,
  };
  return (
    <div className="ratings">
      <div className="empty-stars" />
      <div className="full-stars" style={style} />
    </div>
  );
}

export default DisplayStar;
