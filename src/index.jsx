/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
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
  const [currentProduct, setCurrentProduct] = useState(37312);
  const [left, setLeft] = useState(0);

  const toggleStyle = {
    transform: `translate(${left}px, 0)`,
    transition: 'transform 700ms ease-in-out',
  };

  function toggle(event) {
    event.preventDefault();
    if (left === 0) {
      setLeft(left + 40);
      document.getElementById('light-mode').href = 'darkmode.css';
      document.getElementById('light-mode-related').href = 'related-dark-mode.css';
    } else {
      setLeft(0);
      document.getElementById('light-mode').href = 'style.css';
      document.getElementById('light-mode-related').href = 'related.css';
    }
  }

  return (
    <div>
      <div className="bulbastore-heading">
        <div className="logo">
          { left === 0 ? <img className="bulbastore-icon" src="bulbastore.png" alt="bulbsaur icon" /> : <img className="bulbastore-icon" src="old-bulbasaur.png" alt="bulbsaur icon" />}
          { left === 0 ? (
            <h1>
              Bulbastore
            </h1>
          ) : <h1>Venustore</h1>}
        </div>
        <i className="cart-icon fa-solid fa-cart-shopping fa-2x" />
        <div onClick={toggle} className="circle-toggle" style={toggleStyle} />
        <div className="night-mode-icon">
          <i className="moon fa-solid fa-moon fa-xl" />
          <i className="sun fa-solid fa-sun fa-xl" />
        </div>

      </div>
      <div className="widgets">
        {/* <Overview productId={currentProduct} serverRoute={serverRoute} /> */}
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
        {/* { currentProduct === null ? <div>Loading...</div>
          : <Reviews currentProduct={currentProduct} setCurrentProduct={setCurrentProduct} /> }
        { currentProduct === null ? <div>Loading...</div>
          : <Questions currentProduct={currentProduct} setCurrentProduct={setCurrentProduct} /> } */}
      </div>
    </div>
  );
}

root.render(<App />);
