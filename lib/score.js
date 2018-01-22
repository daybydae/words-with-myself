const SubmittedWords = require('./submitted_words');

class Score {
  constructor($el) {
    this.$el = $el;
    this.value = 0;
    this.$el.html(`<div id="scoreVal"> ${this.value} </div>`);
    this.updateScoreView = this.updateScoreView.bind(this);
  }

  addValue(wordArr) {
    this.value += this.valueWord(wordArr);
    this.updateScoreView();
  }

  valueWord(wordArr) {
    let points = 0;
    wordArr.forEach( tileObj => {
      points += tileObj.value;
    });
    return points;
  }

  updateScoreView() {
    $("#scoreVal").html(this.value);
  }
}

export default Score;
