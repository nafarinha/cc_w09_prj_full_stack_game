const PubSub = require('../helpers/pub_sub.js');

const InfoView = function (information) {
  this.information = information
};

// This view sends information to FormView about the highest number to choose from or
// how many cards to play with
//
// Subscribes from model
// Channel: Cards:game-parameters-submitted
// (Deck model publishes)

//InfoView.prototype.bindEvents = function() {
  //PubSub.subscribe('Cards:game-parameters-submitted', (evt) => {

//}




module.exports = InfoView;
