import React from 'react';

function Styles({ style }) {
  return (
    <img className="styles" src={style.photos[0].thumbnail_url} alt="" />
  );
}

export default Styles;
