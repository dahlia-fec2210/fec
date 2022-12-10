import React from 'react';
import { VscTriangleDown } from 'react-icons/vsc';

export default function ProgressBar({ percentage }) {
  const fillerStyles = {
    width: `${percentage}%`,
  };

  return (
    <div className="bar-padding">
      <div className="char-outer-bar">
        <div className="char-filler" style={fillerStyles}>
          <VscTriangleDown size={24} className="triangle-down" />
        </div>
      </div>
    </div>
  );
}
