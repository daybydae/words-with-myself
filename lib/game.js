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
      this.playButton = new PlayButton($("#play_button"));

      this.currentSelection = new CurrentSelection($("#current_selection"));

      this.leaderboard = new LeaderBoard($("#leaderboard"));

      this.board = new Board();

      this.submitted_words = new SubmittedWords($("#submitted-words"));
  }


  addToScore(word){
    this.score += word.value;

  }

  handlePlayButtonClick(e) {

  }


  start() {

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

  }

  resetScore() {

  }

  resetSubmittedWords() {

  }

}

export default Game;
