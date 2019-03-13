const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {
  this.result = null;
  this.resultContainer = null;
};

// Gives the result that the computer calculated, the final number
//Dont show the answer right away - post an image or something that we Then
//click and when its clicked we get the result.

//
// Subscribes
// Channel Card:result-submitted
// (Deck model publishes) fn getGuessedNumber

ResultView.prototype.bindEvents = function() {
  PubSub.subscribe('Deck:result-submitted', (evt) => {
    const result = evt.detail;
    console.log(result);
    this.result = result;
    //add render function here
    this.render();
  })
}

ResultView.prototype.render = function () {
  const resultContainer = document.querySelector('#result-view-container');

  this.resultContainer = resultContainer;

  const resultText = document.createElement('h2');
  resultText.textContent = "Your number is:"
  resultContainer.appendChild(resultText);

  const resultButton = this.showResultButton();
  resultContainer.appendChild(resultButton);
};

ResultView.prototype.showResultButton = function (result){
  const button = document.createElement('button');
  button.classList.add('result-button');
  button.textContent = "Show me"

  button.addEventListener('click', (evt) => {
    const result = document.createElement('h2')
    result.id = 'result-id';
    result.textContent = this.result;
    this.resultContainer.appendChild(result);
  });
    return button;
  };


//in model add
// Deck.prototype.bindEvents = function() {
//   const result = this.calculateGuessedNumber();
//   PubSub.publish('Deck:result-submitted', result);
// }


module.exports = ResultView;
