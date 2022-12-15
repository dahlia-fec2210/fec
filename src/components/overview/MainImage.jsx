/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */

import React, { useRef } from 'react';

function MainImage({
  photo, expanded, setExpanded, zoomed, setZoomed,
}) {
  const zoomedImageRef = useRef(null);
  const zoomedImageAreaRef = useRef(null);

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
      const minX = zoomedImageAreaRef.current.offsetWidth;
      const minY = zoomedImageAreaRef.current.offsetHeight;

      const { clientX } = event;
      const { clientY } = event;

      const mWidth = zoomedImageAreaRef.current.offsetWidth;
      const mHeight = zoomedImageAreaRef.current.offsetHeight;

      const xPercentage = ((clientX - minX) / mWidth);
      const xTransform = (xPercentage * 100) - 50;

      const yPercentage = ((clientY - minY) / mHeight);
      const yTransform = (yPercentage * 100) + 25;

      zoomedImageRef.current.style.transform = `translate(${xTransform * -1}%, ${yTransform * -1}%) scale(2.5)`;
    }
  };

  const handleMouseLeave = (event) => {
    if (zoomed === true) {
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
    <div
      className={containerClass}
      ref={zoomedImageAreaRef}
      onClick={handleMainImageClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img className={imageClass} ref={zoomedImageRef} src={photo.url} alt="" />
    </div>
  );
}

export default MainImage;
