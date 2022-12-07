const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/outfit');

const clothingPieceSchema = mongoose.Schema({
  cookie: String,
  category: String,
  id: Number,
  name: String,
});

const Piece = mongoose.model('Piece', clothingPieceSchema);

function savePiece(piece) {
  return Piece.create(piece)
    .then((response) => response);
}

function getOutfit() {
  return Piece.find({})
    .then((outfit) => outfit);
}

function deletePiece(pieceId) {
  return Piece.deleteMany({ id: pieceId })
    .then((response) => response);
}

module.exports.savePiece = savePiece;
module.exports.getOutfit = getOutfit;
module.exports.deletePiece = deletePiece;
