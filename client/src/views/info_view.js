const PubSub = require('../helpers/pub_sub.js');

const InfoView = function () {
  //this.information = information
};


// InfoView.prototype.bindEvents = function () {
//   PubSub.subscribe('FormView:number-submitted', (evt) => {
//     const numberSubmitted = evt.detail.value;
//     this.displayGameParameter(gameParameter);
//   });
// };


InfoView.prototype.readInput = function() {
  PubSub.subscribe('FormView:number-submitted', (evt) => {
    inputtedNum = evt.detail;
    const resultParameter = document.querySelector('#game-parameter-result');
    resultParameter.textContent = `Choose a number from 1 to ${inputtedNum}.`;
  })
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
