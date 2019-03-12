const PubSub = require('../helpers/pub_sub.js');
const InfoView = require('./info_view.js');

const FormView = function (form) {
  this.form = form;
};

// The start site with Title - Information - option to play by number of cards
// or the highest number.
//Press a BUTTON to choose to play by cards og press a BUTTON to play by
//the highest number.
//Input your number.
//Then get the InfoView sent with information about highest number or number of cards
//Then press PLAY

//Publishes
//Channel: FormView:number-submitted


// FormView.prototype.bindEvents = function() {
//   this.form.addEventListener('submit', (evt) => {
//
//   })
// }

// FormView.prototype.handleSubmit = function (evt) {
//   evt.preventDefault();
//   const newGame = this.createGame(evt.target);
//   PubSub.publish('FormView:number-submitted', newGame);
//   evt.target.reset();
// };

//   return newGame;
// };




module.exports = FormView;
