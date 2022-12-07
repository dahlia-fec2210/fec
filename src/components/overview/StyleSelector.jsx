import React from 'react';
import Styles from './Styles.jsx';

function StyleSelector({ productStyles }) {
  return (
    <div>
      <h4>STYLE &gt; SELECTED STYLE</h4>
      {productStyles.map((style, i) => (
        <Styles key={i} style={style} />
      ))}
    </div>
  );
}

export default StyleSelector;
