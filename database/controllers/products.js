require('dotenv').config();
const axios = require('axios');
const path = require('path');

const headers = {
  headers: {
    Authorization: `${process.env.TOKEN}`,
  },
};

function getAllProducts() {
  return axios.get(path.join(process.env.DATABASE_URL, '/products'), headers)
    .then((response) => response.data);
}

// GET /products/:product_id
function getOneProduct(productId) {
  return axios.get(path.join(process.env.DATABASE_URL, `/products/${productId}`), headers)
    .then((response) => response.data);
}

function getProductStyles(productId) {
  return axios.get(path.join(process.env.DATABASE_URL, `/products/${productId}/styles`), headers)
    .then((response) => response.data);
}
function getRelatedProducts(productId) {
  return axios.get(path.join(process.env.DATABASE_URL, `/products/${productId}/related`), headers)
    .then((response) => response.data);
}

module.exports = {
  getAllProducts,
  getOneProduct,
  getProductStyles,
  getRelatedProducts,
};
