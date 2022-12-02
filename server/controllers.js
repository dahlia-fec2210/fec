require('dotenv').config();
const axios = require('axios');
const path = require('path');

function getDatabaseInfo () {
  console.log('hi')
  return axios.get(path.join(process.env.DATABASE_URL, '/products'), { headers: {
    Authorization: `${process.env.TOKEN}`
  } })
    .then(response => {
      console.log(response)
      return response;
    });
}

module.exports = {
  getDatabaseInfo: getDatabaseInfo
}

