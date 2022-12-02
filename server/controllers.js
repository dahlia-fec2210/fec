require('dotenv').config();
const axios = require('axios');
const path = require('path');

function getDatabaseInfo (callback) {
  axios.get(path.join(process.env.DATABASE_URL, '/products'), { headers: {
    Authorization: `${process.env.TOKEN}`
  } })

    .then(response => {
      callback(response.data);
    });
}

module.exports = {
  getDatabaseInfo: getDatabaseInfo
}

