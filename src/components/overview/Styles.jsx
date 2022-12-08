import React from 'react';

function Styles({ style }) {
  // console.log('style.photos[0] in Style component:', style.photos[0]);
  return (
    <img src={style.photos[0].thumbnail_url} alt="" />
  );
}

export default Styles;
