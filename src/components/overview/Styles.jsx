import React from 'react';

function Styles({ style }) {
  const handleStyleClick = () => {
    //
  };

  return (
    <div>
      <img className="styles" src={style.photos[0].thumbnail_url} alt="" onClick={handleStyleClick} />
    </div>
  );
}

export default Styles;
