const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');
const Card = require('./card.js');


const Deck = function (highestNumber = null, numberOfCards = null ) {

  this.highestNumber = highestNumber;
  this.numberOfCards = numberOfCards;

};
