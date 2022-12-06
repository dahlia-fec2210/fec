/* eslint-disable react/prop-types */
import React from 'react';

function RelatedProduct({ product, left }) {
  return (
    <div>
      <div className="related-product-card" style={{ left }}>{product}</div>
    </div>
  );
}

export default RelatedProduct;
