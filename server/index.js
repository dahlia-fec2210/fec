require('dotenv').config();

const express = require('express');
const path = require('path')
const app = express();
const cors = require('cors');

const controller = require('./controllers.js');


app.use(cors());
app.use(express.json());


// Routes go here:
app.get('/products', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  controller.getDatabaseInfo()
    .then((data) => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
});




app.listen(process.env.PORT);
console.log('Listening on port 3001');