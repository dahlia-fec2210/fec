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
const interactions = require('../database/controllers/interactions');

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
app.use(express.static(path.join(__dirname, '/../public')));

const productInfo = {};
const productData = {};
const relatedProducts = {};

// Routes go here:

// interaction route:
app.post('/interactions', (req, res) => {
  interactions.postInteraction(req.body)
    .then((response) => {
      res.send(response);
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
  if (!productInfo[req.params.product_id]) {
    products.getOneProduct(req.params.product_id)
      .then((data) => {
        productInfo[req.params.product_id] = data;
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  } else {
    res.status(200).send(productInfo[req.params.product_id]);
  }
});

app.get('/products/:product_id/styles', (req, res) => {
  if (!productData[req.params.product_id]) {
    products.getProductStyles(req.params.product_id)
      .then((data) => {
        productData[req.params.product_id] = data;
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  } else {
    res.status(200).send(productData[req.params.product_id]);
  }
});

app.get('/products/:product_id/related', (req, res) => {
  if (!relatedProducts[req.params.product_id]) {
    products.getRelatedProducts(req.params.product_id)
      .then((data) => {
        relatedProducts[req.params.product_id] = data;
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  } else {
    res.status(200).send(relatedProducts[req.params.product_id]);
  }
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
  questions.getQuestionsForProduct(req.originalUrl)
    .then((data) => {
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
console.log(`Listening on port ${process.env.PORT}`);
