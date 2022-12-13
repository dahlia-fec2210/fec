/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

function Styles({
  index, style, selectedStyle, handleStyleClick,
}) {
  let indicator;
  if (index === selectedStyle) {
    indicator = <div className="overlay" />;
  } else {
    indicator = null;
  }

  return (
    <div className="styles-container">
      <img className="styles" src={style.photos[0].thumbnail_url} alt="" onClick={() => handleStyleClick(index, style)} />
      {indicator}
    </div>
  );
}

export default Styles;
