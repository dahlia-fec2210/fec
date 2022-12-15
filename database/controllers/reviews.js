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

function postReview(data) {
  return axios.post(path.join(process.env.DATABASE_URL, '/reviews'), data, headers)
    .then((response) => response.data);
}

function markReviewHelpful(reviewId) {
  return axios.put(path.join(process.env.DATABASE_URL, `/reviews/${reviewId}/helpful`), {}, headers)
    .then((response) => response.data);
}

function reportReview(reviewId) {
  return axios.put(path.join(process.env.DATABASE_URL, `/reviews/${reviewId}/report`), {}, headers)
    .then((response) => response.data);
}

module.exports = {
  getAllReviews,
  getReviewsMetadata,
  postReview,
  markReviewHelpful,
  reportReview,
};
