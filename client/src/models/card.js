const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');


const Card = function (iteration, totalNumberOfCards) {
  this.card = [];
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


//getNumberRange()
// using this.iteration (received from Deck as an iteration value)
// using this.totalNumberOfCards (received from Deck as the total number of cards)
// calculate lowest number based on 2  to the power of this.iteration.
// assign the result to this.lowestNumber
// calculate highest Number based on (2 to the power of this.totalNumberOfCards) -1
// assign the result to this.highestNumber



//this will turn numbers to binary.
// function numberToBinary(number){
//     return (number).toString(2);
// };

// function reverseString(string) {
//     return string.split("").reverse().join("");
// };

//populateNumber(reverseBinaryVariable,currentNumber)
// assign a let variable to be 0 - e.g counter
//using a for of (loop through the reversedBinaryVariable)
// assign a varible (index) to counter ++
// conditional if statement with an AND operator .
  // if bit in reverseBinaryVariable equals '1' AND index equals this.iteration
  // if true push number into the card array (this.card)

module.exports = Card
