/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';
import './index.css';

import Overview from './components/overview/Overview.jsx';
import Reviews from './components/reviews/Reviews.jsx';
import Questions from './components/questions/Questions.jsx';
import RelatedItems from './components/relatedItems/RelatedItems.jsx';
import OutfitList from './components/relatedItems/OutfitList.jsx';
import Star from './components/common/Star.jsx';

const serverRoute = `http://localhost:${process.env.PORT}`;
const container = document.getElementById('root');
const root = createRoot(container);

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${serverRoute}/products`, { params: { count: 10 } })
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (products.length > 0) {
    return (
      <div>
        <h1
          className="text-primary text-center text-2xl font-bold text-blue-400 animate-pulse"
        >
          Welcome to Tailwind!
        </h1>
        <h1>Hello Dahlia</h1>
        <Overview />
        <Reviews />
        <Questions />
        <RelatedItems currentProduct={products[0]} />
        <OutfitList />
      </div>
    );
  }
  return (
    <div>
      Loading...
    </div>
  );
}

root.render(<App />);
