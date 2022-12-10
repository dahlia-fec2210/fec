import React from 'react';

function Styles({
  index, style, selected, handleStyleClick,
}) {
  let indicator;
  if (index === selected) {
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
