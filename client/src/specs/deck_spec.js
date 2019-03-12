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
        containsNumber: false,
        iteration: 0,
        totalNumberOfCards: 2,
        lowestNumber: 1,
        highestNumber:3
      },
      {
        cardNumbers:[2,3],
        containsNumber: false,
        iteration: 1,
        totalNumberOfCards: 2,
        lowestNumber: 2,
        highestNumber:3
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
