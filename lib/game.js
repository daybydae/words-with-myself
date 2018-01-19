import Tiles from './tile';
import Score from './score';
import Board from './board';
import LeaderBoard from './leaderboard';
import CurrentSelection from './current_selection';
import Timer from './timer';
import SubmittedWords from './submitted_words';
import PlayButton from './play_button';
import DictionaryFile from './dictionary';


class Game {
  constructor() {
      this.dictionaryFile = new DictionaryFile();

      this.timer = new Timer($("#timer span"), this.gameOver.bind(this));
      this.score = new Score($("#score"));
      this.playButton = new PlayButton($("#play"));
      this.handlePlayButton = this.playButton.handlePlayButtonClick.bind(this.playButton);
      this.currentSelection = new CurrentSelection($("#current_selection"));

      this.leaderboard = new LeaderBoard($("#leaderboard"));

      this.board = new Board(


      );

      this.submitted_words = new SubmittedWords($("#submitted-words"));

      this.$scoreValue = $("#score").children();
      debugger

  }


  addToScore(wordObj){
    this.score += wordObj.value;
    this.$scoreValue.html(this.score);
  }


  handlePlayButtonClick(e) {
    if (this.playButton.label === "START") {
      this.handlePlayButton(e, this.start);
    } else {
      this.handlePlayButton(e, this.reset);
    }
  }


  start() {
    console.log("Start");
  }

  restart() {

  }

  gameOver() {

  }


  isValidWord(word) {

  }

  processValidWord() {

  }


  reset() {
    console.log("REset");

  }

  resetScore() {

  }

  resetSubmittedWords() {

  }

}

export default Game;
