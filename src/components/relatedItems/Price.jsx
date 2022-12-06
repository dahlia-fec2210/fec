import React, { useState, useEffect } from 'react';

function Price({ price, salesPrice }) {
  if (salesPrice === null) {
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
