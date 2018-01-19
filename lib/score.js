const SubmittedWords = require('./submitted_words');

class Score {
  constructor($el) {
    this.$el = $el;
    this.score = 0;
    this.$el.html(`<div> ${this.score} </div>`);
  }

  addValue(wordObj) {
    this.score += wordObj.value;
    this.updateScoreView();
  }

  updateScoreView() {
    $("#score span").val(this.score);
  }
}

module.exports = Score;
