import React from 'react';

function MainImage({ photo }) {
  return (
    <div>
      <img className="main-image" src={photo.url} alt="" />
    </div>
  );
}

export default MainImage;
