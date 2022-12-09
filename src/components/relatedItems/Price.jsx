import React from 'react';

function Price({ price, salePrice }) {
  if (!salePrice) {
    return (
      <div className="related-price">
        $
        {price}
      </div>
    );
  }
  return (
    <div className="related-price">
      <span className="related-sale-price">
        $
        {salePrice}
        {' '}
      </span>
      <span className="related-price-strike">
        $
        {price}
      </span>
    </div>
  );
}

export default Price;
