/* eslint-disable import/extensions */
/* eslint-disable implicit-arrow-linebreak */

import React, { useState } from 'react';
import Styles from './Styles.jsx';

function StyleSelector({
  productStyles, setCurrentStylePhotos, setCurrentStyle, setSelectedSize, setSelectedQuanity,
  setCurrentStyleSkus,
}) {
  const [selectedStyle, setSelectedStyle] = useState(0);
  const [styleName, setStyleName] = useState(productStyles[0].name);

  const handleStyleClick = (index, style) => {
    setSelectedStyle(index);
    setCurrentStylePhotos(style.photos);
    setStyleName(style.name);
    setCurrentStyle(style);
    setSelectedSize('');
    setSelectedQuanity('');
    setCurrentStyleSkus(style.skus);
  };

  return (
    <div>
      <span className="style-name-indicator">
        STYLE &gt;
      </span>
      <span className="style-name">
        {styleName}
      </span>
      <div className="styles-selector">
        {productStyles.map((style, i) =>
          (
            <Styles
              key={style.style_id}
              index={i}
              style={style}
              selectedStyle={selectedStyle}
              handleStyleClick={handleStyleClick}
            />
          ))}
      </div>
    </div>
  );
}

export default StyleSelector;
