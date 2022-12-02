require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();
const cors = require('cors');
const morgan = require('morgan');

const controller = require('./controllers');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes go here:
app.get('/products', (req, res) => {
  controller.getDatabaseInfo()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
    });
});

app.listen(process.env.PORT);
console.log('Listening on port 3001');
