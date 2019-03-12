const assert = require('assert');
const Deck = require('../models/deck.js');
const Card = require('../models/card.js');

describe('Deck', function() {

  let deck;

  let testDeck;

  beforeEach(function() {

    card1 = new Card;
    testDeck = new Deck;

  });


  it('should be able to update highest number', function() {
    //updateHighestNumber
    testDeck.updateHighestNumber(10);
    const actual = testDeck.highestNumber;
    const expected = 10;
    assert.strictEqual(actual,expected);
  });

  xit('should be able to update the total number of cards', function() {
    //updateNumberOfCards

  });

  xit('should be able to check the changed highest number attributes', function() {
  //checkChangedAttribute

  });

  xit('should be able to get number of cards', function() {
  //getNumberOfCards
  });

  xit('should be able to get the highest number to guess', function() {
  //getHighestNumber
  });

  xit('should be able to generate cards', function() {
    //generateCards;
  })

  xit('should be able to calculate the guessed number', function() {
    //getGuessedNumber
  });



})
