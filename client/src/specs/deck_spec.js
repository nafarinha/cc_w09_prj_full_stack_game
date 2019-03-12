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

  it('should be able to update the total number of cards', function() {
    //updateNumberOfCards
    testDeck.updateNumberOfCards(100);
    const actual = testDeck.numberOfCards;
    const expected = 100;
    assert.strictEqual(actual,expected);

  });

  xit('should be able to check the changed highest number attributes', function() {
  //checkChangedAttribute

  });

  it('should be able to calculate number of cards', function() {
  //calculateNumberOfCards
  testDeck.highestNumber = 128
  testDeck.calculateNumberOfCards();
  const actual = testDeck.numberOfCards;
  const expected = 7;
  assert.strictEqual(actual,expected);
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
