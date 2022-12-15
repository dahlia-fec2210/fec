/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import SizeOptions from './SizeOptions.jsx';
import QuantityOptions from './QuantityOptions.jsx';

function AddToCart({
  currentStyle, currentStyleSkus, productName, selectedSize, setSelectedSize,
  selectedQuantity, setSelectedQuanity,
}) {
  const [sizeQuantity, setSizeQuantity] = useState(0);
  const [currentSku, setCurrentSku] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert(
      `Added to cart:\n${productName}\n${currentStyle.name}\nSize: ${selectedSize}   Quantity: ${selectedQuantity}`,
    );
  };

  // console.log('current style:', currentStyle);
  // console.log('current style skus:', currentStyleSkus);

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const k in currentStyleSkus) {
      // console.log('current sku:', currentStyleSkus[k]);
      // console.log('sku quantity:', currentStyleSkus[k].quantity);
      // console.log('sku size:', currentStyleSkus[k].size);
      if (currentStyleSkus[k].size === e.target.value) {
        // console.log('UNGA BUNGA SIZE MATCH');
        setCurrentSku(k);
        setSizeQuantity(currentStyleSkus[k].quantity <= 15 ? currentStyleSkus[k].quantity : 15);
        break;
      }
    }
  };

  const handleQuantityChange = (e) => {
    setSelectedQuanity(e.target.value);
  };

  // console.log('selected size:', selectedSize);
  // console.log('size quantity:', sizeQuantity);
  // console.log('selected quantity:', selectedQuantity);
  // console.log('current style name:', currentStyle.name);
  // console.log('current style:', currentStyle);
  console.log('SKUS:', currentStyleSkus);

  const styleAvailabilities = Object.values(currentStyleSkus);
  // eslint-disable-next-line max-len
  const styleQuantities = styleAvailabilities.reduce((availableQuantities, style) => availableQuantities + style.quantity, 0);

  const inStockSizes = styleAvailabilities.filter((style) => style.quantity > 0);

  return (
    <form onSubmit={handleSubmit}>
      {styleQuantities === 0 && (
      <select disabled>
        <option value="">OUT OF STOCK</option>
      </select>
      )}

      <select id="select-size" onChange={handleSizeChange} value={selectedSize}>
        <option value="">SELECT SIZE</option>
        {inStockSizes.map((sku, i) => (
          <SizeOptions key={Object.keys(currentStyleSkus)[i]} size={sku.size} />
        ))}
      </select>

      {selectedSize === ''
        ? (
          <select disabled>
            <option value="">-</option>
          </select>
        )
        : (
          <select onChange={handleQuantityChange} value={selectedQuantity}>
            <option value="">1</option>
            {[...Array(sizeQuantity + 1).keys()].slice(1).map((n, i) => <QuantityOptions key={i} value={n} />)}
          </select>
        )}

      <button type="submit">Add to Cart</button>
    </form>
  );
}

export default AddToCart;
