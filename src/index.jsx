import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Overview from './components/overview/Overview.jsx';
import Reviews from './components/reviews/Reviews.jsx';
import Questions from './components/questions/Questions.jsx';
import RelatedItems from './components/relatedItems/RelatedItems.jsx';
import Star from './components/common/Star.jsx'


const serverRoute = `http://localhost:${process.env.PORT}`

const App = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios.get(serverRoute + '/products')
      .then(response => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch(err => console.log(err))
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