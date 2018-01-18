const SubmittedWords = require('./submitted_words');

class Score {
  constructor($el) {
    this.$el = $el;
    this.$el.html(`<span> ${this.score} </span>`);
    this.score = 0;
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
