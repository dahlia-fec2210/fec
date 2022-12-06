/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import axios from 'axios';

import Overview from './components/overview/Overview.jsx';
import Reviews from './components/reviews/Reviews.jsx';
import Questions from './components/questions/Questions.jsx';
import RelatedItems from './components/relatedItems/RelatedItems.jsx';
import Star from './components/common/Star.jsx';

const serverRoute = `http://localhost:${process.env.PORT}`;

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios.get(`${serverRoute}/products`, { params: { count: 10 } })
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (products) {
    return (
      <div>
        {/* <Overview /> */}
        <Reviews currentProduct={products[0]} />
        {/* <Questions />
        <RelatedItems /> */}

      </div>
    );
  }
  return <div>Loading...</div>;
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
