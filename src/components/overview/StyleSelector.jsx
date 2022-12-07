import React from 'react';
import Styles from './Styles.jsx';

function StyleSelector({ productStyles }) {
  return (
    <div>
      <h3>&gt; Style Selector comp</h3>
      <h4>&gt; STYLE &gt; SELECTED STYLE</h4>
      {productStyles.map((style, i) => (
        <Styles key={i} style={style} />
      ))}
    </div>
  );
}

export default StyleSelector;
