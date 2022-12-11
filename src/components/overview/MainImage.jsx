import React from 'react';

function MainImage({ photo, expanded, setExpanded }) {
  const handleMainImageClick = () => {
    setExpanded(true);
  };
  return (
    <div className={expanded === false ? 'default-image' : 'expanded-image'} onClick={handleMainImageClick}>
      <img className="main-image" src={photo.url} alt="" />
    </div>
  );
}

export default MainImage;
