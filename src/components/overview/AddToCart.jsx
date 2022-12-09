import React, { useState, useEffect } from 'react';
import SizeOptions from './SizeOptions.jsx';
import QuantityOptions from './QuantityOptions.jsx';

function AddToCart({ currentStyleSkus }) {
  const [selectedSize, setSelectedSize] = useState('');
  const [sizeQuantity, setSizeQuantity] = useState(0);
  const [currentSku, setCurrentSku] = useState(0);
  const [selectedQuantity, setSelectedQuanity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  console.log('current style skus:', currentStyleSkus);

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
    // eslint-disable-next-line no-restricted-syntax
    for (const k in currentStyleSkus) {
      // console.log('current sku:', currentStyleSkus[k]);
      // console.log('sku quantity:', currentStyleSkus[k].quantity);
      // console.log('sku size:', currentStyleSkus[k].size);
      if (currentStyleSkus[k].size === e.target.value) {
        // console.log('UNGA BUNGA SIZE MATCH');
        setCurrentSku(k);
        setSizeQuantity(currentStyleSkus[k].quantity);
        break;
      }
    }
  };

  const handleQuantityChange = (e) => {
    setSelectedQuanity(e.target.value);
  };

  console.log('selected size:', selectedSize);
  console.log('size quantity:', sizeQuantity);
  console.log('selected quantity:', selectedQuantity);

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(currentStyleSkus).length === 0 && (
      <select disabled>
        <option value="">OUT OF STOCK</option>
      </select>
      )}

      <select id="select-size" onChange={handleSizeChange} value={selectedSize}>
        <option value="">SELECT SIZE</option>
        {Object.values(currentStyleSkus).map((sku, i) => (
          <SizeOptions key={Object.keys(currentStyleSkus)[i]} size={sku.size} />
        ))}
      </select>

      <select onChange={handleQuantityChange} value={selectedQuantity}>
        <option value="">---</option>
        {[...Array(sizeQuantity + 1).keys()].slice(1).map((n, i) => {
          console.log('n:', n);
          return <QuantityOptions key={i} value={n} />;
        })}
      </select>

      <button type="submit">Add to Cart/Bag</button>
    </form>
  );
}

export default AddToCart;
