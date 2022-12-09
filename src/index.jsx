/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import Overview from './components/overview/Overview.jsx';
import Reviews from './components/reviews/Reviews.jsx';
import Questions from './components/questions/Questions.jsx';
import RelatedItems from './components/relatedItems/RelatedItems.jsx';
import OutfitList from './components/OutfitList/OutfitList.jsx';
import Star from './components/common/Star.jsx';

const serverRoute = `http://localhost:${process.env.PORT}`;
const container = document.getElementById('root');
const root = createRoot(container);

function App() {
  const [currentProduct, setCurrentProduct] = useState(37311);
  return (
    <div>
      <h1>Hello Dahlia</h1>
      <Overview productId={currentProduct} serverRoute={serverRoute} />
      <Reviews />
      <Questions />
      { currentProduct === null ? <div>Loading...</div>
        : <RelatedItems currentProduct={currentProduct} setCurrentProduct={setCurrentProduct} /> }
      {/* { currentProduct === null ? <div>Loading...</div>
        : <Reviews currentProduct={currentProduct} setCurrentProduct={setCurrentProduct} /> } */}
      <OutfitList currentProduct={currentProduct} />
    </div>
  );
}

root.render(<App />);
