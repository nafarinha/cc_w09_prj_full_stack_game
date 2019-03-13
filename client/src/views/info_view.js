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

InfoView.prototype.handleInput = (evt) => {
  console.log('Something was typed');
  const num = evt.target.value;

  const resultParameter = document.querySelector('#game-parameter-result');
  resultParameter.textContent = `You can choose a number from 1 to ${num}`;
};
//TEMPLATE
// const handleInput = (event) => {
//   console.log('Something has been typed');
//   const text = event.target.value;
//
//   const resultParagraph = document.querySelector('#input-result');
//   resultParagraph.textContent = `You typed: ${text}`;
//
// }

InfoView.prototype.numInput = function () {
  const inputtedNum = document.querySelector('#cardsNumber');
  inputtedNum.addEventListener('input', this.handleInput);
};

// const textInput = document.querySelector('#input');
// textInput.addEventListener('input', handleInput);


//END TEMPLATE



  // InfoView.prototype.displayGameParameter = function (gameParameter) {
  //   const parameterElement = document.querySelector('#cardsNumber');
  //   parameterElement.
  //   console.log(parameterElement);
  //   resultElement.textContent = `You entered ${gameParameter} cards.`;
  // };

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
