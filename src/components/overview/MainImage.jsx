import React from 'react';

function MainImage({
  photo, expanded, setExpanded, zoomed, setZoomed,
}) {
  const handleMainImageClick = () => {
    if (expanded === true) {
      setZoomed(true);
      setExpanded(false);
    } else {
      setZoomed(false);
      setExpanded(true);
    }
  };

  let containerClass;
  if (expanded === false && zoomed === false) {
    containerClass = 'default-image';
  } else if (expanded === true) {
    containerClass = 'expanded-image';
  } else if (zoomed === true) {
    containerClass = 'zoomed-image';
  }

  let imageClass;
  if (expanded === false && zoomed === false) {
    imageClass = 'main-image';
  } else if (expanded === true) {
    imageClass = 'expanded-main-image';
  } else if (zoomed === true) {
    imageClass = 'zoomed-main-image';
  }

  return (
    <div className={containerClass} onClick={handleMainImageClick}>
      <img className={imageClass} src={photo.url} alt="" />
    </div>
  );
}

export default MainImage;
