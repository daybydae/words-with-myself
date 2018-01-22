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

      this.timer = new Timer($("#timer div"), this.gameOver.bind(this));
      this.score = new Score($("#score"));
      this.playButton = new PlayButton($("#play"));
      this.handlePlayButton = this.playButton.handlePlayButtonClick.bind(this.playButton);
      this.currentSelection = new CurrentSelection($("#current_selection"));

      this.leaderboard = new LeaderBoard($("#leaderboard"));

      this.board = new Board(
        $("#board"),
        this.currentSelection,
        this.isValidWord.bind(this),
        this.processValidWord.bind(this),
        this.alreadySubmitted.bind(this)
      );

      this.submittedWords = new SubmittedWords($("#submitted-words"));

      this.scoreValue = $("#score").children();
      debugger

  }

  //
  // addToScore(wordArr){
  //   wordArr.forEach( wordObj => {
  //     this.score += wordObj.value;
  //   });
  //   this.$scoreValue.html(this.score);
  // }


  handlePlayButtonClick(e) {
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
    this.board.populateBoard();
  }

  gameOver() {
    this.board.deactivateBoard();
  }

  isValidWord(wordArr) {
    let word = this.wordArrToWordString(wordArr);

    if (Object.keys(this.dictionaryFile.dictObj).includes(word)) {
      return true;
    }
    return false;
  }

  wordArrToWordString(wordArr) {
    debugger
    let wordString = "";
    wordArr.forEach( tileObj => {
      wordString.concat(tileObj.letter);
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
    // this.addToScore(newScore);
  }

  reset() {
    this.timer.reset();
    this.resetScore();
    this.resetSubmittedWords();

  }

  resetScore() {
    this.score.value = 0;
    this.scoreValue.html(0);
  }

  resetSubmittedWords() {
    this.submittedWords.list = {};
    this.submittedWords.$el.find(".submitted-words-word").remove();
  }

  addWordToSubmittedWords(wordArr) {
    let letters = [];
    wordArr.forEach( letterObj => {
      letters.push(letterObj.letter);
    });
    let word = letters.join("");
    debugger
    this.submittedWords.list.push(word);
    this.renderSubmittedWordList();
  }

  renderSubmittedWordList() {
    const $ul = $("<ul>");

    this.submittedWords.list.forEach( word => {
      let $li = $("<li>");
      $li.append($("<span class='submitted-words-word'></span>"));
      $li.children().html(word);
      $ul.append($li);
    });

    this.submittedWords.$el.append($ul);
  }
}

export default Game;
