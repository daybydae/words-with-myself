const Tiles = require('./tile');
const Score = require('./score');
const Board = require('./board');
const LeaderBoard = require('./leaderboard');
const CurrentSelection = require('./current_selection');
const Timer = require('./timer');
const SubmittedWords = require('./submitted_words');
const PlayButton = require('./play_button');
const Dictionary = require('./dictionary');

class Game {
  constructor() {
    $.ajax({
      method: 'GET',
      url: '../assets/ospd.xml'
    }).then( (dict) => {
      console.log("yes");

      this.dictionary = this.createDictionary(dict);

      this.timer = new Timer($("#timer span"), this.gameOver.bind(this));
      this.score = new Score($("#score"));
      this.playButton = new PlayButton($("#play_button"));

      this.currentSelection = new CurrentSelection($("#current_selection"));

      this.leaderboard = new LeaderBoard($("#leaderboard"));

      this.board = new Board();

      this.submitted_words = new SubmittedWords($("#submitted_words"));

    });

  }







  reset() {

  }

  resetScore() {

  }

  resetSubmittedWords() {

  }

}

module.exports = Game;
