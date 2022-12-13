/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import { RotatingLines } from 'react-loader-spinner';
import Overview from './components/overview/Overview.jsx';
import Reviews from './components/reviews/Reviews.jsx';
import Questions from './components/questions/Questions.jsx';
import RelatedItems from './components/relatedItems/RelatedItems.jsx';
import Star from './components/common/Star.jsx';

const serverRoute = `http://localhost:${process.env.PORT}`;
const container = document.getElementById('root');
const root = createRoot(container);

function App() {
  const [currentProduct, setCurrentProduct] = useState(37311);

  return (
    <div>
      <div className="bulbastore-heading">
        <div className="logo">
          <img className="bulbastore-icon" src="bulbastore.png" alt="bulbsaur icon" />
          <h1>
            Bulbastore
          </h1>
        </div>
        <i className="cart-icon fa-solid fa-cart-shopping fa-2x" />
      </div>
      <div className="widgets">
        <Overview productId={currentProduct} serverRoute={serverRoute} />
        { currentProduct === {} ? (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible
          />
        )
          : (
            <RelatedItems
              currentProduct={currentProduct}
              setCurrentProduct={setCurrentProduct}
            />
          ) }
        { currentProduct === null ? <div>Loading...</div>
          : <Reviews currentProduct={currentProduct} setCurrentProduct={setCurrentProduct} /> }
      </div>
    </div>
  );
}

root.render(<App />);
