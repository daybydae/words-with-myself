
class Leaderboard {
  constructor($el) {
    this.$el = $el;
    this.leaders = [];
    // this.setup = this.setup.bind(this);
  }
  //
  // setup() {
  //
  // }
  //
  // addToLeaderboard() {
  //   let letters = [];
  //   wordArr.forEach( letterObj => {
  //     letters.push(letterObj.letter);
  //   });
  //   let word = letters.join("");
  //   this.submittedWords.list.push(word);
  //   this.renderSubmittedWordList(word);
  // }
  //
  // renderLeaderboard(word) {
  //
  //   let $li = $("<li>");
  //   $li.append($("<span class='leaderboard-entry'></span>"));
  //   $li.children().html(word);
  //   $("#leaderboard-entry").append($li);
  // }

}

module.exports = Leaderboard;
