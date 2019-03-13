const PubSub = require('../helpers/pub_sub.js');
const InfoView = require('./info_view.js');

const FormView = function (formElement) {
  this.element = formElement;
};

FormView.prototype.setupEventListeners = function(){
  const cardButton = document.querySelector('#number-of-cards-btn');
  cardButton.addEventListener('click',function(evt){
    const inputBox = document.querySelector('#cards-number-container');
    inputBox.classList.replace('hidden','show');
    console.log(inputBox);

    const inputtedNum = document.querySelector('#cardsNumber');
    inputtedNum.addEventListener('input', function(evt) {
      PubSub.publish('FormView:number-submitted', evt.target.value);
    })
  });

  const numbersButton = document.querySelector('#max-number-btn');
  numbersButton.addEventListener('click',function(evt){
    inputBox1 = document.querySelector('#highest-number-container');
    inputBox1.classList.replace('hidden','show');
    console.log(inputBox1);
  });
  const playButton = document.querySelector('#games-form');
  console.log(playButton);
  playButton.addEventListener('submit',(evt)=>{
    evt.preventDefault();
    console.log(evt.target.cardsNumber.value);
    PubSub.publish('FormView:sumbit',evt.target.cardsNumber.value);
  });
};



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
