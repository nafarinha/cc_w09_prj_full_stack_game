const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');
const Card = require('./card.js');


const Deck = function (highestNumber = null, numberOfCards = null ) {
  this.cards = [];
  this.highestNumber = highestNumber;
  this.numberOfCards = numberOfCards;

};

//resposible for getting the highestNumber OR number of cards.

// checkChangedAttribute
  // if this.highestNumber is not null then run fn getNumberOfCards
  // else run fn getHighestNumber
//

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
// for each iteration create a Card object and push it into this.cards.
// ***this will be called from App.js
