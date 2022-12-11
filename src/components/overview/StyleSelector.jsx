/* eslint-disable import/extensions */
import React, { useState } from 'react';
import Styles from './Styles.jsx';

function StyleSelector({ productStyles, setCurrentStylePhotos }) {
  const [selected, setSelected] = useState(0);
  const [styleName, setStyleName] = useState(productStyles[0].name);

  const handleStyleClick = (index, style) => {
    setSelected(index);
    setCurrentStylePhotos(style.photos);
    setStyleName(style.name);
  };

  return (
    <div>
      <h4>
        STYLE &gt;
        {' '}
        {styleName}
      </h4>
      <div className="styles-selector">
        {productStyles.map((style, i) =>
          // console.log('style in StylesSelector:', style);
          // eslint-disable-next-line implicit-arrow-linebreak
          (
            <Styles
              key={style.style_id}
              index={i}
              style={style}
              selected={selected}
              handleStyleClick={handleStyleClick}
            />
          ))}
      </div>
    </div>
  );
}

export default StyleSelector;
