/* eslint-disable import/extensions */
require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();
const cors = require('cors');
const morgan = require('morgan');
const sessionHandler = require('./session-handler');

const products = require('../database/controllers/products');
const reviews = require('../database/controllers/reviews');
const questions = require('../database/controllers/questions');
const db = require('../database/index.js');

// app.use(cors());
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, // access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(sessionHandler);
app.use(express.json());

// Routes go here:

// Outfit Routes:
app.post('/piece', (req, res) => {
  db.savePiece({
    cookie: req.session_id, category: req.body.category, id: req.body.id, name: req.body.name,
  })
    .then((response) => {
      res.send(response);
    });
});

app.get('/outfit', (req, res) => {
  db.getOutfit(req.session_id)
    .then((response) => {
      res.send(response);
    });
});

app.post('/delete', (req, res) => {
  db.deletePiece(req.body.id)
    .then((outfit) => {
      res.send(outfit);
    });
});

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
  // console.log(req.originalUrl, 'inside app.get');
  questions.getQuestionsForProduct(req.originalUrl)
    .then((data) => {
      // console.log(data, 'is data printing');
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/qa/questions/:question_id/answers', (req, res) => {
  questions.getAnswersForQuestion(req.originalUrl)
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
      // console.log(data, 'data has been created');

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

app.put('/qa/answers/:answer_id/helpful', (req, res) => {
  console.log(req.params.answer_id, 'inside helpful answer');
  console.log(req.originalUrl, 'inside helpful answer');
  questions.markAnswerHelpful(req.params.answer_id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.put('/qa/questions/:question_id/report', (req, res) => {
  questions.reportQuestion(req.params.question_id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.put('/qa/answers/:answer_id/report', (req, res) => {
  questions.reportAnswer(req.params.answer_id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.listen(process.env.PORT);
console.log('Listening on port 3001');
