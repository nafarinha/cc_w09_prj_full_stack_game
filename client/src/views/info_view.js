const PubSub = require('../helpers/pub_sub.js');
const Deck = require('../models/deck.js');

const InfoView = function (information) {
  //this.information = information
};


InfoView.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-submitted', (evt) => {
    const numberSubmitted = evt.detail.value;
    this.displayGameParameter(gameParameter);
  });
};

  InfoView.prototype.displayGameParameter = function (gameParameter) {
    const parameterElement = document.querySelector('#cardsNumber');
    resultElement.textContent = `You entered ${gameParameter} cards.`;


  };

  module.exports = InfoView;

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
