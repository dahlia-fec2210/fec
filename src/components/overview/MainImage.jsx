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
      // const maxWidth = window.innerWidth;
      const minX = zoomedImageAreaRef.current.offsetWidth;
      const minY = zoomedImageAreaRef.current.offsetHeight;
      // console.log('minX:', minX);

      const { clientX } = event;
      const { clientY } = event;
      // console.log('clientX:', clientX);
      // console.log('clientY:', clientY);

      const mWidth = zoomedImageAreaRef.current.offsetWidth;
      const mHeight = zoomedImageAreaRef.current.offsetHeight;

      const xPercentage = ((clientX - minX) / mWidth);
      const xTransform = (xPercentage * 100) - 50;

      const yPercentage = ((clientY - minY) / mHeight);
      const yTransform = (yPercentage * 100) + 25;

      // console.log('xTransform:', xTransform);
      // console.log('xPercentage:', xPercentage);
      // console.log('yTransform:', yTransform);
      // console.log('yPercentage:', yPercentage);
      // console.log('clientX percentage:', clientX);
      // console.log('clientY percentage:', clientY);
      // console.log('mWidth:', mWidth);
      // console.log('mHeight:', mHeight);

      zoomedImageRef.current.style.transform = `translate(${xTransform * -1}%, ${yTransform * -1}%) scale(2.5)`;
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
    <div
      className={containerClass}
      ref={zoomedImageAreaRef}
      onClick={handleMainImageClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img id="main-image" className={imageClass} ref={zoomedImageRef} src={photo.url} alt="" />
    </div>
  );
}

export default MainImage;
