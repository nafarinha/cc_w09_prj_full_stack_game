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


// ResultView.prototype.bindEvents = function () {
//   PubSub.subscribe('Card:result-submitted', (event) => {
//     const result = event.detail;
//     // some prototype function here
//     //this.xxxx(result);
//   });
// };

// ResultView.prototype.xxxx = function (result) {
//
// }


module.exports = ResultView;
