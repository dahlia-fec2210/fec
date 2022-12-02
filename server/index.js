require('dotenv').config();

const express = require('express');
const path = require('path')
const app = express();

const controller = require('./controllers.js');

// app.use(express.static(path.join(__dirname, '../public/index.html')));

app.use(express.json());
// app.use(express(urlencoded({ extended: true })));

// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// Routes go here:
app.get('/products', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  controller.getDatabaseInfo()
    .then((data) => {
      console.log(data)
      res.send(JSON.stringify(data));
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
});




app.listen(process.env.PORT);
console.log('Listening on port 3001');