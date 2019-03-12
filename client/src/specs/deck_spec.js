const assert = require('assert');
const Deck = require('../models/deck.js');
const Card = require('../models/card.js');

describe('Deck', function() {

  let deck;
  let testDeck;
  let modelDeckTest;

  beforeEach(function() {

    card1 = new Card;
    testDeck = new Deck;

    modelDeckTest =  {cards:[{
        cardNumbers:[1, 3],
        containsNumber: false
      },
      {
        cardNumbers:[2,3],
        containsNumber: false
      }],
      highestNumber: 3,
      numberOfCards: 2
    };

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

  it('should be able to check if highest number attribute changed', function() {
  //checkChangedAttribute
  testDeck.updateHighestNumber(100);
  testDeck.checkChangedAttribute();
  const actual = testDeck.numberOfCards;
  const expected = 7;
  assert.strictEqual(actual, expected);
  });

  it('should be able to check if number of cards attribute changed', function() {
      //checkChangedAttribute
      testDeck.updateNumberOfCards(7);
      testDeck.checkChangedAttribute();
      const actual = testDeck.highestNumber;
      const expected = 128;
      assert.strictEqual(actual, expected);
  });

  it('should be able to calculate number of cards', function() {
  //calculateNumberOfCards
  testDeck.highestNumber = 128
  testDeck.calculateNumberOfCards();
  const actual = testDeck.numberOfCards;
  const expected = 7;
  assert.strictEqual(actual,expected);
  });

  it('should be able to calculate the highest number', function() {
    //calculateHighestNumber
    testDeck.numberOfCards = 7;
    testDeck.calculateHighestNumber();
    actual = testDeck.highestNumber;
    expected = 128;
    assert.strictEqual(actual, expected);
  });

  it('should be able to generate cards', function() {
    //generateCards;
    testDeck.numberOfCards = 2;
    testDeck.highestNumber = 3;
    testDeck.generateCards();
    const actual = testDeck;
    const expected = modelDeckTest;
    assert.deepEqual(actual,expected)
  })

  xit('should be able to calculate the guessed number', function() {
    //getGuessedNumber
  });



})
