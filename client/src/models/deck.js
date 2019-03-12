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

Deck.prototype.updateNumberOfCards = function (number) {
  this.numberOfCards = number;
  // this.checkChangedAttribute();
};

// checkChangedAttribute
  // if this.highestNumber is not null then run fn getNumberOfCards
  // else run fn getHighestNumber
Deck.prototype.checkChangedAttribute = function () {

};

//getNumberOfCards

Deck.prototype.calculateNumberOfCards = function(){
  const base2 = Math.log2(this.highestNumber);
  const numberOfCards = Math.ceil(base2);
  this.numberOfCards = numberOfCards;
};




 //This fn does 2^number of cards and sets the highest number.
Deck.prototype.calculateHighestNumber = function () {
  const highestNumber = 2**this.numberOfCards;
  this.highestNumber = highestNumber;
};

//generateCards - create a card and push it into this.cards based on this.numberOfCards // ***this will be called from App.js

Deck.prototype.generateCards = function(){
  for (let iteration = 0; iteration < this.numberOfCards; iteration ++){
    const card = new Card(iteration, this.numberOfCards);
    card.createCard();
    this.cards.push(card);
  };

};


//getGuessedNumber
// use this.cards - loop through each card
// if card.containsGuessedNumber is true sum the first element of the array of each card.
// publish total sum.
//*** this will come from app.js

module.exports = Deck;
