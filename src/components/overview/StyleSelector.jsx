import React from 'react';
import Styles from './Styles.jsx';

function StyleSelector({ productStyles }) {
  return (
    <div>
      <h4>STYLE &gt; SELECTED STYLE</h4>
      <div className="styles-selector">
        {productStyles.map((style, i) => (
          <Styles key={i} style={style} />
        ))}
      </div>
    </div>
  );
}

export default StyleSelector;
