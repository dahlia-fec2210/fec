import React, { useState } from 'react';
import Styles from './Styles.jsx';

function StyleSelector({ productStyles, setCurrentStylePhotos }) {
  const [selected, setSelected] = useState(0);

  const handleStyleClick = (index, style) => {
    setSelected(index);
    setCurrentStylePhotos(style.photos);
  };

  return (
    <div>
      <h4>STYLE &gt; SELECTED STYLE</h4>
      <div className="styles-selector">
        {productStyles.map((style, i) => {
          console.log('style in StylesSelector:', style);
          return (
            <Styles
              key={style.style_id}
              index={i}
              style={style}
              selected={selected}
              handleStyleClick={handleStyleClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default StyleSelector;
