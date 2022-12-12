import React from 'react';

function MainImage({ photo, expanded, setExpanded . zoomed, setZoomed}) {
  const handleMainImageClick = () => {
    setExpanded(true);
  };

  let containerClass;
  if (expanded === false) {
    containerClass = 'default-image';
  } else if (expanded === true) {
    containerClass = 'expanded-image';
  } else if (zoomed === true) {
    containerClass = 'zoomed-image';
  }

  let imageClass;
  if (expanded === false) {
    imageClass = 'main-image';
  } else if (expanded === true) {
    imageClass = 'expanded-main-image';
  } else if (zoomed === true) {
    imageClass = 'zoomed-main-image';
  }

  return (
    <div className={containerClass} onClick={handleMainImageClick}>
      <img className={expanded === false ? 'main-image' : 'expanded-main-image'} src={photo.url} alt="" />
    </div>
  );
}

export default MainImage;
