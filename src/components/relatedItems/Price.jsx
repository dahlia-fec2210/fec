import React from 'react';

function Price({ price, salePrice }) {
  if (!salePrice) {
    return (
      <div data-testid="price" className="related-price">
        $
        {price}
      </div>
    );
  }
  return (
    <div className="related-price">
      <span data-testid="sale-price" className="related-sale-price">
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
