const PubSub = require('../helpers/pub_sub.js');

const BoardView = function (card) {
  this.card = card;
};

// Gets a single-card-ready from the Deck model
//
// Channel: Cards:single-card-ready
// Subscribes
// (Deck Model publishes)

//InfoView.prototype.bindEvents = function() {
  //PubSub.subscribe('Cards:single-card-ready', (evt) => {

//})
//}


module.exports = BoardView;
