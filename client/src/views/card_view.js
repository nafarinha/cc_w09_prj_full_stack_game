const PubSub = require('../helpers/pub_sub.js');

const CardView = function (prettyCard) {
  this.container = null;
  this.prettyCard = prettyCard;
};

CardView.prototype.createDiv = function(){
  const div = document.createElement('div');
  div.classList.add('card-container');


const numberElements = this.createParagraphElements();
div.appendChild(numberElements);

};


//each card takes a number range (min/max)
// dont have to do a pubsub here. Do it in app.js. use deck model,
//access one card and pass them into boardview and pass a singlecard
//into cardview.

//render card
//CardView.prototype.render = function() {

//create card here
//createElement p for the numbers
//the cardContainer has to have an id of card container.
//you can do this in html #
// }




module.exports = CardView;
