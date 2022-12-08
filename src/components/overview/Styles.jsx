import React from 'react';

function Styles({ style }) {
  return (
    <div>
      <img className="styles" src={style.photos[0].thumbnail_url} alt="" />
    </div>
  );
}

export default Styles;
