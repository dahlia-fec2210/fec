import React from 'react';

function QuantityOptions({ n }) {
  // console.log('n in QuantityOptions:', n);
  return (
    <option value={n}>{n}</option>
  );
}

export default QuantityOptions;
