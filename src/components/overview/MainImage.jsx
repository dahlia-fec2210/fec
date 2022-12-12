import React, { useRef } from 'react';

function MainImage({
  photo, expanded, setExpanded, zoomed, setZoomed,
}) {
  const zoomedImageRef = useRef(null);

  const handleMainImageClick = () => {
    if (expanded === true) {
      setZoomed(true);
      setExpanded(false);
    } else {
      setZoomed(false);
      setExpanded(true);
    }
  };

  const handleMouseMove = (event) => {
    if (zoomed === true) {
      // alert('Mouse was moved!');
      zoomedImageRef.current.style.transform = 'translate(-50%, -50%) scale(2.5)';
    }
  };

  const handleMouseLeave = (event) => {
    if (zoomed === true) {
      // alert('Mouse was moved!');
      zoomedImageRef.current.style.transform = 'translate(0%, 0%) scale(1)';
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
    <div className={containerClass} onClick={handleMainImageClick} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <img className={imageClass} ref={zoomedImageRef} src={photo.url} alt="" />
    </div>
  );
}

export default MainImage;
