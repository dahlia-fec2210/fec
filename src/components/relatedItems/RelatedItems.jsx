import React, { useState, useEffect } from 'react';
import axios from 'axios';

const serverRoute = `http://localhost:${process.env.PORT}`;

function RelatedItems({ currentProduct }) {
  console.log(currentProduct);

  return (
    <div>
      <h4>RelatedItems</h4>
    </div>
  );
}

export default RelatedItems;
