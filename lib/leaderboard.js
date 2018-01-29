import db from "./db";

class Leaderboard {
  constructor($el) {
    this.$el = $el;
    this.leaders = [{name: "Dae", value: 0}];
    this.db = db;
    // this.setup = this.setup.bind(this);
    this.sortLeaders = this.sortLeaders.bind(this);
    this.mapLeaderboard = this.mapLeaderboard.bind(this);
    this.handleNameSubmission = this.handleNameSubmission.bind(this);
    this.mapLeaderboard();

  }

  updateLeaderboard(username, score) {
    this.leaders.push({name: username, value: score});
    this.sortLeaders();
    this.leaders.slice(0,11);
    this.mapLeaderboard();
  }

  mapLeaderboard() {
    $("#leaders").empty();
    debugger
    this.leaders.forEach( (leader, idx) => {

      let $li = $("<li>");
      $li.append($(`<span class='leaderboard-entry num'>${idx + 1}</span>`));
      $li.append($(`<span class='leaderboard-entry name'>${leader.name}</span>`));
      $li.append($(`<span class='leaderboard-entry score'>${leader.value}</span>`));
      $("#leaders").append($li);
    });

  }

  sortLeaders() {
    this.leaders.sort( (a,b) => {
      return b.value - a.value;
    });
  }


  handleNameSubmission(e) {
    e.preventDefault();
    let newName = $(e.currentTarget).children().first()[0].value;
    let newValue = parseInt($("#scoreVal").html());
    debugger
    this.updateLeaderboard(newName, newValue);
    // $("#nameform").removeClass("visible").addClass("hidden");

  }

  isTopTen(score) {
    if ((this.leaders[this.leaders.length-1].value < score) || (this.leaders.length === 0)){
      return true;
    }
    return false;
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

export default Leaderboard;
