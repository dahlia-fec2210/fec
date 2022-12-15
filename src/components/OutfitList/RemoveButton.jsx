/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

function RemoveButton({ removeFromOutfit, clothingPiece }) {
  return (
    <div className="related-stack" onClick={removeFromOutfit}>
      <div className="fa-stack" style={{ verticalAlign: 'top' }}>
        <i className="related-circle fa-solid fa-regular fa-circle fa-stack-2x" />
        <i id={`outfit-list-remove-button:${clothingPiece}`} className="related-star fa-solid fa-x fa-stack-1x" />
      </div>
    </div>
  );
}

export default RemoveButton;
