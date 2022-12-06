import React, { useState, useEffect } from 'react';

function Price({ price, salesPrice }) {
  if (salesPrice === null) {
    return (
      <div>
        $
        {price}
      </div>
    );
  }
  return (
    <div>
      <span className="related-sale-price">
        $
        {salesPrice}
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
