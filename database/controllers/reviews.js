require('dotenv').config();
const axios = require('axios');
const path = require('path');

const headers = {
  headers: {
    Authorization: `${process.env.TOKEN}`,
  },
};

function getAllReviews(url) {
  return axios.get(path.join(process.env.DATABASE_URL, url), headers)
    .then((response) => response.data);
}

function getReviewsMetadata(url) {
  return axios.get(path.join(process.env.DATABASE_URL, url), headers)
    .then((response) => response.data);
}

module.exports = {
  getAllReviews,
  getReviewsMetadata,
};
