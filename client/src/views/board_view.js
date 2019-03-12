const PubSub = require('../helpers/pub_sub.js');

const BoardView = function (card) {
  this.card = card;
};

// Gets a single-card-ready from the Deck model
//
// Channel: Cards:single-card-ready
// Subscribes
// (Deck Model publishes)



module.exports = BoardView;
