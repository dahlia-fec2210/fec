require('dotenv').config();
const axios = require('axios');
const path = require('path');

const headers = {
  headers: {
    Authorization: `${process.env.TOKEN}`,
  },
};

function postInteraction(interaction) {
  return axios.post(path.join(process.env.DATABASE_URL, '/interactions'), interaction, headers)
    .then((response) => response.data);
}

module.exports = {
  postInteraction,
};
