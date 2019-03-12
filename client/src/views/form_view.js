const PubSub = require('../helpers/pub_sub.js');
const InfoView = require('./info_view.js');

const FormView = function (formElement) {
  this.element = formElement;
};

FormView.prototype.setupEventListeners = function(){
  this.element.addEventListener('click',function(evt){
    if (evt.target.id = 'number-of-cards-btn'){
      const numButton = document.querySelector('#number-of-cards-btn');
      numButton.classList.replace('hidden','show')
      console.log(numButton);
    }
    evt.preventDefault();
    console.log(evt.target);
  })
}

// The start site with Title - Information - option to play by number of cards
// or the highest number.
// Press a BUTTON to choose to play by cards or press a BUTTON to play by
// the highest number.
// Input your number.
// Then get the INFOVIEW sent with information about highest number or number of cards
// Then press PLAY BUTTON

//
// Publishes
// Channel: FormView:number-submitted
// (Deck model subscribes)

//We need another PubSub for the PLAY BUTTOn

//BUTTON
// FormView.prototype.bindEvents = function() {
//   this.form.addEventListener('submit', (evt) => {
//  //choose to use to play by cards(this.numberOfCards(evt))
//   })
// }

//BUTTON
// / FormView.prototype.bindEvents = function() {
// //   this.form.addEventListener('submit', (evt) => {
// //  //choose to use to play by highest number(this.highestNumber(evt))
//
// //   })
// // }

// /BUTTON
// / FormView.prototype.bindEvents = function() {
// //   this.form.addEventListener('submit', (evt) => {
// //  //choose to use to start game(this.handleSubmit(evt))
// //   })
// // }

//(FormView.prototype.render = function (game) {
  // const gameForm = document.createElement('div');
  // gameForm.id = 'game';)
// }

//if player chooses to play by numberOfCards
//FormView.prototype.numberOfCards = function (evt) {
  // evt.preventDefault();
  //const playCards =
  //player inserts number
 //gets information from INFOVIEW

// }

//if player chooses to play by highestNumber
//FormView.prototype.highestNumber = function (evt) {
  // evt.preventDefault();
  //const playHighestNumber =
  //player inserts number
 //gets information from INFOVIEW

// }

//handle the Play button - then we go to the boardView(and cardView)
// FormView.prototype.handleSubmit = function (evt) {
//   evt.preventDefault();
//   const startGame = this.newGame(evt.target);
//
// };

//   return startGame;
// };




module.exports = FormView;
