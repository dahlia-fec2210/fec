import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Overview from './components/overview/Overview.jsx';
import Reviews from './components/reviews/Reviews.jsx';
import Questions from './components/questions/Questions.jsx';
import RelatedItems from './components/relatedItems/RelatedItems.jsx';
import Star from './components/common/Star.jsx'

import axios from 'axios';

const App = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then((response) => {
        console.log("hello!");
        console.log(response.data, "index.jsx");
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <div>
      <h1>Hello Dahlia</h1>
        <Overview />
        <Reviews />
        <Questions />
        <RelatedItems />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));