const PubSub = require('../helpers/pub_sub.js');

const CardView = function (answer) {
  this.answer = answer;
};


// Takes the answer from player 'yes' or 'no' and publishes to the model
//
// Publishes
// Channel CardView:user-answer
// (Deck model subscribes)


//CardView.prototype.bindEvents = function() {
  //PubSub.publish('CardView:user-answer', (evt) => {

//})
//}

module.exports = CardView;
