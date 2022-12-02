require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();
const cors = require('cors');
const morgan = require('morgan');
// const bodyParser = require('body-parser');

const products = require('../database/controllers/products');
const reviews = require('../database/controllers/reviews');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// Routes go here:

// Product routes:
app.get('/products', (req, res) => {
  products.getAllProducts()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/products/:product_id', (req, res) => {
  products.getOneProduct(req.params.product_id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/products/:product_id/styles', (req, res) => {
  products.getProductStyles(req.params.product_id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/products/:product_id/related', (req, res) => {
  products.getRelatedProducts(req.params.product_id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/reviews', (req, res) => {
  console.log('we are here hello nick');
  // res.send('korea won');
  reviews.getAllReviews(req.originalUrl)
    .then((data) => {
      console.log(data.data, '123');
      res.status(200).send(data.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/reviews/meta', (req, res) => {
  reviews.getReviewsMetadata(req.originalUrl)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.post('/reviews', (req, res) => {
  console.log(req.body);
  res.send('hi');
  // reviews.postReview(req.body)
  //   .then((data) => {
  //     // NOTE for Aaron: do you want a get request back after posting
  //     res.status(201).send(data);
  //   })
  //   .catch((err) => {
  //     res.status(404).send(err);
  //   });
});

app.listen(process.env.PORT);
console.log('Listening on port 3001');
