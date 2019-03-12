const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');


const Card = function (iteration, totalNumberOfCards) {
  this.cardNumbers = [];
  this.containsNumber = false;
  this.iteration = iteration;
  this.totalNumberOfCards = totalNumberOfCards;
  this.lowestNumber = null;
  this.highestNumber = null;

};


//createCard
//this will populate a card using the following logic:
//getNumberRange()
// for loop goes here
  // using this.lowestNumber as a starting point, loop untill this.highestNumber and increment (++)
  // assign a variable to numberToBinary(currentNumber)
  // assign a variable to reverseString(binaryVariable)
    //populateNumber(reverseBinaryVariable,currentNumber)


Card.prototype.getNumberRange = function(){
  lowestNumber = this.iteration **2;
  highestNumber = this.totalNumberOfCards **2;
  this.lowestNumber = lowestNumber;
  this.highestNumber = highestNumber;
};
// using this.iteration (received from Deck as an iteration value)
// using this.totalNumberOfCards (received from Deck as the total number of cards)
// calculate lowest number based on 2  to the power of this.iteration.
// assign the result to this.lowestNumber
// calculate highest Number based on (2 to the power of this.totalNumberOfCards) -1
// assign the result to this.highestNumber



// this will turn numbers to binary.
Card.prototype.numberToBinary = function(number){
    return (number).toString(2);
};

Card.prototype.reverseString = function(string) {
    return string.split("").reverse().join("");
};

//populateNumber(reverseBinaryVariable,currentNumber)
// assign a let variable to be 0 - e.g counter
//using a for of (loop through the reversedBinaryVariable)
// assign a varible (index) to counter ++
// conditional if statement with an AND operator .
  // if bit in reverseBinaryVariable equals '1' AND index equals this.iteration
  // if true push number into the number array (this.cardNumbers)

//prettyCard
//this fn will return an object with card numbers and a key/value pair (containsNumber) to know if the guessed number is or isn't included in the card numbers array

// prettyCard = {this.cardNumbers, this.containsNumber};
// return prettyCard;

//updateContainsNumber()
//this fn is called when the guess number is inluded in the card numbers.
//The fn updates this.containsNumber to true.

module.exports = Card;
