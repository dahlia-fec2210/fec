/* eslint-disable import/extensions */
/* eslint-disable no-alert */
/* eslint-disable-next-line no-restricted-syntax, guard-for-in */
/* eslint-disable-next-line max-len */
import React, { useState, useRef } from 'react';
// import Select from 'react-select';
import QuantityOptions from './QuantityOptions.jsx';
import SizeSelector from './SizeSelector.jsx';

function AddToCart({
  currentStyle, currentStyleSkus, productName, selectedSize, setSelectedSize,
  selectedQuantity, setSelectedQuanity,
}) {
  const [sizeQuantity, setSizeQuantity] = useState(0);
  const [currentSku, setCurrentSku] = useState(0);
  const [noSizeSelected, setNoSizeSelected] = useState(false);
  const sizeDropdown = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSize === '') {
      sizeDropdown.current.focus();
      setNoSizeSelected(true);
    } else {
      alert(
        `Added to cart:\n${productName}\n${currentStyle.name}\nSize: ${selectedSize}   Quantity: ${selectedQuantity}`,
      );
    }
  };

  const handleSizeChange = (e) => {
    setNoSizeSelected(false);
    setSelectedSize(e.target.value);
    for (const k in currentStyleSkus) {
      if (currentStyleSkus[k].size === e.target.value) {
        setCurrentSku(k);
        setSizeQuantity(currentStyleSkus[k].quantity <= 15 ? currentStyleSkus[k].quantity : 15);
        break;
      }
    }
  };

  const handleQuantityChange = (e) => {
    setSelectedQuanity(e.target.value);
  };

  const styleAvailabilities = Object.values(currentStyleSkus);
  const styleQuantities = styleAvailabilities.reduce((availableQuantities, style) => availableQuantities + style.quantity, 0);

  const inStockSizes = styleAvailabilities.filter((style) => style.quantity > 0);

  console.log('selected quantity:', selectedQuantity);

  return (
    <form onSubmit={handleSubmit}>
      {styleQuantities === 0 && (
      <select className="size-dropdown" disabled>
        <option value="">OUT OF STOCK</option>
      </select>
      )}

      {noSizeSelected === true ? <p style={{ color: 'red' }}>Please select size</p> : null}

      <SizeSelector
        // eslint-disable-next-line react/jsx-boolean-value
        openMenuOnFocus={true}
        handleSizeChange={handleSizeChange}
        selectedSize={selectedSize}
        sizeDropdown={sizeDropdown}
        inStockSizes={inStockSizes}
        currentStyleSkus={currentStyleSkus}
      />

      {selectedSize === ''
        ? (
          <select className="quantity-dropdown" disabled>
            <option value="">-</option>
          </select>
        )
        : (
          <select className="quantity-dropdown" onChange={handleQuantityChange} value={selectedQuantity}>
            <option value="">1</option>
            {[...Array(sizeQuantity + 1).keys()].slice(2).map((n, i) => <QuantityOptions key={i} value={n} />)}
          </select>
        )}

      {styleQuantities === 0 ? null : <button type="submit">Add to Cart</button>}
    </form>
  );
}

export default AddToCart;
