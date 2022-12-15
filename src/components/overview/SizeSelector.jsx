import React from 'react';
// import Select from 'react-select';
import SizeOptions from './SizeOptions.jsx';

function SizeSelector({
  handleSizeChange, selectedSize, sizeDropdown, inStockSizes, currentStyleSkus,
}) {
  return (
    <select id="select-size" onChange={handleSizeChange} value={selectedSize} ref={sizeDropdown}>
      <option value="">SELECT SIZE</option>
      {inStockSizes.map((sku, i) => (
        <SizeOptions key={Object.keys(currentStyleSkus)[i]} size={sku.size} />
      ))}
    </select>
  );
}

export default SizeSelector;
