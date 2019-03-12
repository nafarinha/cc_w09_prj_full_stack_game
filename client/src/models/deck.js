const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');
const Card = require('./card.js');


const Deck = function () {
  this.cards = [];
  this.highestNumber = null;
  this.numberOfCards = null;

};

//resposible for getting the highestNumber OR number of cards.
//**number will come from app.js
Deck.prototype.updateHighestNumber =function (number){
  this.highestNumber = number;
  // this.checkChangedAttribute();
};

//updateNumberOfCards(number) **number will come from app.js
// assign number to this.numberOfCards
//checkChangedAttribute()


// if this.highestNumber is not null then run fn getNumberOfCards
// else run fn getHighestNumber
//
// Deck.prototype.checkChangedAttribute = function () {
//   for(i = 0; this.cards.length(); i++) {
//
//   }
// };


//getNumberOfCards
  // Math.log2(this.highestNumber)
  //  Math.ceil(result of log2)
  // assing result of ceil to this.numberOfCards.

//getHighestNumber
 // 2 to the power of this.numberOfCards
 // floor the result above
 // asign resul of floor to this.highestNumber

//generateCards
//using this.numberOfCards
// loop up to this.numberOfCards
// for each iteration create a Card object(iteration, this.numberOfCards) and push it into this.cards
// ***this will be called from App.js


//getGuessedNumber
// use this.cards - loop through each card
// if card.containsGuessedNumber is true sum the first element of the array of each card.
// publish total sum.
//*** this will come from app.js

module.exports = Deck;
