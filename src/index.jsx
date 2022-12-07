/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';

import Overview from './components/overview/Overview.jsx';
import Reviews from './components/reviews/Reviews.jsx';
import Questions from './components/questions/Questions.jsx';
import RelatedItems from './components/relatedItems/RelatedItems.jsx';
import Star from './components/common/Star.jsx';

const serverRoute = `http://localhost:${process.env.PORT}`;
const container = document.getElementById('root');
const root = createRoot(container);

function App() {
<<<<<<< HEAD
  // const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(37319);
=======
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(37317);
>>>>>>> parent of f84abd5 (currently working on buttons)

  useEffect(() => {
    axios.get(`${serverRoute}/products`, { params: { count: 1000 } })
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Hello Dahlia</h1>
      <Overview />
      <Reviews />
      {/* <Questions currentProducts={products[0]} /> */}
      { currentProduct.id === null ? <div>Loading...</div>
        : <Questions currentProduct={currentProduct} setCurrentProduct={setCurrentProduct} /> }

      { currentProduct.id === null ? <div>Loading...</div>
        : <RelatedItems currentProduct={currentProduct} setCurrentProduct={setCurrentProduct} /> }
    </div>
  );
}

root.render(<App />);
