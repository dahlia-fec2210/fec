/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
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
    axios.get(`${serverRoute}/products`, { params: { count: 1000 } })
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Hello Dahlia</h1>
      <Overview />
      <Reviews />
      <Questions />
      { products === null ? <div>Loading...</div> : <RelatedItems currentProduct={products[6]} /> }
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
