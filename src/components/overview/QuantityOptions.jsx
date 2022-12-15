import React from 'react';

function QuantityOptions({ value }) {
  // console.log('n in QuantityOptions:', n);
  return (
    <option value={value}>{value}</option>
  );
}

export default QuantityOptions;
