const PubSub = require('../helpers/pub_sub.js');

const CardView = function (answer) {
  this.answer = answer;
};


// Takes the answer from player 'yes' or 'no' and publishes to the model
//Needs two BUTTONS

// Publishes
// Channel CardView:user-answer
// (Deck model subscribes)


//CardView.prototype.bindEvents = function() {
  //PubSub.publish('CardView:user-answer', (evt) => {

//})
//}

// /BUTTON
// / FormView.prototype.bindEvents = function() {
// //   this.answer.addEventListener('submit', (evt) => {
// //  //choose YES(this.answerYes(evt))
// //   })
// // }

// Function for what happens when player presses Yes. Needs to sum those values of Cards
//together to get the final sum result in the end.
//And we want to go straight to the next page when we answer. 

//CardView.prototype.answerYes = function() {

}

//if player presses No then nothing happens



module.exports = CardView;
