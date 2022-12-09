const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/outfit');

const clothingPieceSchema = mongoose.Schema({
  cookie: String,
  category: String,
  id: Number,
  name: String,
});

const Piece = mongoose.model('Piece', clothingPieceSchema);

const productSchema = mongoose.Schema({
  photo: String,
  id: Number,
  price: String,
  salePrice: String,
});

const Product = mongoose.model('Product', productSchema);

const averageReviewSchema = mongoose.Schema({
  id: Number,
  average: Number,
});

const Average = mongoose.model('Average', averageReviewSchema);

function savePiece(piece) {
  return Piece.create(piece)
    .then((response) => response);
}

function getOutfit(sessionId) {
  return Piece.find({ cookie: sessionId })
    .then((outfit) => outfit);
}

function deletePiece(pieceId) {
  return Piece.deleteMany({ id: pieceId })
    .then((response) => response);
}

function saveProduct(product) {
  return Product.create(product)
    .then((response) => response);
}

function getProduct(product) {
  return Product.find({ id: product })
    .then((response) => response);
}

function deleteProducts() {
  return Product.deleteMany({})
    .then((response) => response);
}

function saveAverage(productAverage) {
  return Average.create(productAverage)
    .then((response) => response);
}

function getAverage(product) {
  return Average.find({ id: product })
    .then((response) => response);
}

function deleteAverageReviews() {
  return Average.deleteMany({})
    .then((response) => response);
}

module.exports.savePiece = savePiece;
module.exports.getOutfit = getOutfit;
module.exports.deletePiece = deletePiece;
module.exports.saveProduct = saveProduct;
module.exports.getProduct = getProduct;
module.exports.deleteProducts = deleteProducts;
module.exports.saveAverage = saveAverage;
module.exports.getAverage = getAverage;
module.exports.deleteAverageReviews = deleteAverageReviews;
