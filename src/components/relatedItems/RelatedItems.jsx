import React, { useState, useEffect } from 'react';
import axios from 'axios';

const serverRoute = `http://localhost:${process.env.PORT}`;

function RelatedItems({ currentProduct }) {
  if (currentProduct.id) {
    console.log(currentProduct.id);
  }

  return (
    <div>
      <h4>RelatedItems</h4>
    </div>
  );
}

export default RelatedItems;
