require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();
const cors = require('cors');
const morgan = require('morgan');
// const bodyParser = require('body-parser');

const products = require('../database/controllers/products');
const reviews = require('../database/controllers/reviews');
const questions = require('../database/controllers/questions');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// Routes go here:

// Product routes:
app.get('/products', (req, res) => {
  products.getAllProducts(req.originalUrl)
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
  reviews.getAllReviews(req.originalUrl)
    .then((data) => {
      console.log(data);
      res.status(200).send(data);
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
  reviews.postReview(req.body)
    .then((data) => {
      // data will be the word 'Created'
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.put('/reviews/:review_id/helpful', (req, res) => {
  reviews.markReviewHelpful(req.params.review_id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.put('/reviews/:review_id/report', (req, res) => {
  reviews.reportReview(req.params.review_id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/qa/questions', (req, res) => {
  questions.getQuestionsForProduct(req.originalUrl)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/qa/questions/:question_id/answers', (req, res) => {
  questions.getAnswersForQuestion(req.params.question_id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.post('/qa/questions', (req, res) => {
  questions.postQuestion(req.body)
    .then((data) => {
      // data will be the word 'Created'
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.post('/qa/questions/:question_id/answers', (req, res) => {
  questions.postAnswerToQuestion(req.params.question_id, req.body)
    .then((data) => {
      // data will be the word 'Created'
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.put('/qa/questions/:question_id/helpful', (req, res) => {
  questions.markQuestionHelpful(req.params.question_id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.listen(process.env.PORT);
console.log('Listening on port 3001');
