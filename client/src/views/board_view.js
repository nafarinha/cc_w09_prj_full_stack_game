const PubSub = require('../helpers/pub_sub.js');
const CardView = require('./card_view.js');

const BoardView = function (container) {
  this.container = container;
  this.cards = null;
};

BoardView.prototype.bindEvents = function(){
  PubSub.subscribe('Deck:card-data-Ready',(evt)=>{
    this.cards = evt.detail;
    this.renderCardView(evt.detail);
  });
};
//get info from model (pubsub) subscribe and call renderCardView with the cards -- update this.cards with cards.

BoardView.prototype.renderCardView = function(cards){
  console.log(this.cards);
  cards.forEach((card)=>{
    card.prettyCard();
    const cardView = new CardView(card);
    const cardDetail = cardView.createCardView();
    this.container.appendChild(cardDetail)
    this.addButtons(card);

  });
};

BoardView.prototype.addButtons = function(card){
  const yesButton = document.createElement('button');
  yesButton.textContent = 'Yes';
  yesButton.addEventListener('click',(evt)=>{
    card.containsNumber = true;
    console.log(card);
  });
  this.container.appendChild(yesButton);

  const noButton = document.createElement('button');
  noButton.textContent = 'No';
  noButton.addEventListener('click',(evt)=>{
    console.log('no');
  });
  this.container.appendChild(noButton);

};

// Takes the answer from player 'yes' or 'no' and publishes to the model
//Needs two BUTTONS

// Publishes
// Channel CardView:user-answer
// (Deck model subscribes)




// /BUTTON
// / BoardView.prototype.bindEvents = function() {
// //   this.answer.addEventListener('submit', (evt) => {
// //  //choose YES(this.answerYes(evt))
// //   })
// // }

// Function for what happens when player presses Yes. Needs to sum those values of Cards
//together to get the final sum result in the end.
//And we want to go straight to the next page when we answer.

//CardView.prototype.answerYes = function() {


//if player presses No then nothing happens

module.exports = BoardView;
