import React from 'react';
import Styles from './Styles.jsx';

function StyleSelector({ productStyles, setCurrentStylePhotos }) {
  return (
    <div>
      <h4>STYLE &gt; SELECTED STYLE</h4>
      <div className="styles-selector">
        {productStyles.map((style) => {
          console.log('style in StylesSelector:', style);
          return (
            <Styles
              key={style.style_id}
              style={style}
              setCurrentStylePhotos={setCurrentStylePhotos}
            />
          );
        })}
      </div>
    </div>
  );
}

export default StyleSelector;
