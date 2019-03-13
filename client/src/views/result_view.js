const PubSub = require('../helpers/pub_sub.js');

const ResultView = function (result) {
  this.result = result
};

// Gives the result that the computer calculated, the final number
//Dont show the answer right away - post an image or something that we Then
//click and when its clicked we get the result.

//
// Subscribes
// Channel Card:result-submitted
// (Deck model publishes) fn getGuessedNumber

ResultView.prototype.bindEvents = function() {
  PubSub.subscribe('Card:result-submitted', (evt) => {
    const result = evt.detail;
    console.log(result);
    //add render function here
    this.render();
  })
}

ResultView.prototype.render = function () {
  const resultContainer = document.querySelector('div#result-view-container');

  const resultText = document.createElement('h1');
  resultText.textContent = "Your number is:"
  resultContainer.appendChild(resultText);

  const resultButton = this.showResultButton();
  resultContainer.appendChild(resultButton);
};

ResultView.prototype.showResultButton = function (result)

  const button = document.createElement('button');
  button.classList.add('result-button');
  button.value = result;

  button.addEventListener('click', (evt) => {
    const result = document.createElement('h2');
  });
    return button;
  };


//in model add
// Deck.prototype.bindEvents = function() {
//   const result = this.calculateGuessedNumber();
//   PubSub.publish('Card:result-submitted', result);
// }


module.exports = ResultView;
