import Tiles from './tile';
import Score from './score';
import Board from './board';
import Leaderboard from './leaderboard';
import CurrentSelection from './current_selection';
import Timer from './timer';
import SubmittedWords from './submitted_words';
import PlayButton from './play_button';
import DictionaryFile from './dictionary';
import Sound from './sound';


class Game {
  constructor() {
      this.dictionaryFile = new DictionaryFile();

      this.timer = new Timer($("#timer div"), this.gameOver.bind(this));
      this.score = new Score($("#score"));
      this.scoreValue = $("#score").children();
      this.playButton = new PlayButton($("#play"));
      this.handlePlayButton = this.playButton.handlePlayButtonClick.bind(this.playButton);
      this.tiles = new Tiles();
      this.currentSelection = new CurrentSelection($("#current-selection"));

      this.gameOverSound = new Sound('assets/sounds/mlg-airhorn.mp3');
      this.leaderboard = new Leaderboard($("#leaderboard"));

      this.board = new Board(
        $("#board"),
        this.currentSelection,
        this.isValidWord.bind(this),
        this.processValidWord.bind(this),
        this.alreadySubmitted.bind(this)
      );

      this.submittedWords = new SubmittedWords($("#submitted-words"));
      this.resetGame = this.resetGame.bind(this);
  }

  //
  // addToScore(wordArr){
  //   wordArr.forEach( wordObj => {
  //     this.score += wordObj.value;
  //   });
  //   this.$scoreValue.html(this.score);
  // }


  handlePlayButtonClick(e) {
    e.preventDefault();
    if (this.playButton.label === "START") {
      this.handlePlayButton(e, this.begin.bind(this));
    } else {
      this.handlePlayButton(e, this.resetGame.bind(this));
    }
  }


  begin() {
    this.board.activateBoard();
    this.board.populateBoard();
    this.resetScore();
    this.resetSubmittedWords();
    this.timer.start();
  }

  resetGame() {
    this.reset();

    this.timer.$el.parent().parent().removeClass("red");
    this.board.deactivateBoard();
  }

  gameOver() {
    this.board.deactivateBoard();
    this.gameOverSound.play();
    $("#board").children().children().removeClass("chosen").addClass("not-chosen");
    this.currentSelection.clear();

    if (this.leaderboard.isTopTen(this.score.value)) {
      $("#nameform").removeClass("hidden").addClass("visible");
      $("#nameform").one("submit", this.leaderboard.handleNameSubmission);
    }
  }

  isValidWord(wordArr) {
    let word = this.wordArrToWordString(wordArr).toLowerCase();
    if (Object.keys(this.dictionaryFile.dictObj).includes(word) &&
      this.alreadySubmitted(word.toUpperCase()) === false) {
      return true;
    }
    return false;
  }

  wordArrToWordString(wordArr) {
    let wordString = "";
    wordArr.forEach( tileObj => {
      wordString += (tileObj.letter);
    });
    return wordString;
  }

  alreadySubmitted(word) {
    if (this.submittedWords.list.includes(word)) {
      return true;
    }
    return false;
  }

  processValidWord(wordArr) {

    this.addWordToSubmittedWords(wordArr);
    let newScore = this.score.addValue(wordArr);
    this.currentSelection.clear();
    // this.addToScore(newScore);
  }

  reset() {
    this.timer.reset();
    this.resetScore();
    this.resetSubmittedWords();
    $("#board").children().children().removeClass("chosen").addClass("not-chosen");
  }

  resetScore() {
    this.score.value = 0;
    this.scoreValue.html(0);
  }

  resetSubmittedWords() {
    this.submittedWords.list = [];
    this.submittedWords.$el.find(".submitted-words-word").remove();
  }

  addWordToSubmittedWords(wordArr) {
    let letters = [];
    wordArr.forEach( letterObj => {
      letters.push(letterObj.letter);
    });
    let word = letters.join("");
    this.submittedWords.list.push(word);
    this.renderSubmittedWordList(word);
  }

  renderSubmittedWordList(word) {

    let $li = $("<li>");
    $li.append($("<span class='submitted-words-word'></span>"));
    $li.children().html(word);
    $("#submitted-words-list").append($li);
  }
}

export default Game;
