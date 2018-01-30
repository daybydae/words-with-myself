import db from "./db";
import Sound from './sound';

class Leaderboard {
  constructor($el) {
    this.$el = $el;
    this.leaders = JSON.parse(localStorage.getItem("leaders")) || [];
    this.db = db;
    this.sortLeaders = this.sortLeaders.bind(this);
    this.mapLeaderboard = this.mapLeaderboard.bind(this);
    this.handleNameSubmission = this.handleNameSubmission.bind(this);
    this.mouseSound = new Sound('assets/sounds/click2.wav');

    this.mapLeaderboard();
  }

  handleNameSubmission(e) {
    this.mouseSound.play();
    let newName = $("#nameinput")[0].value;
    let newValue = parseInt($("#scoreVal").html());
    this.updateLeaderboard(newName, newValue);
    $("#nameform").removeClass("visible").addClass("hidden");
    $("#nameinput")[0].value = "";
  }

  updateLeaderboard(username, score) {
    this.leaders.push({name: username, value: score});
    this.sortLeaders();
    this.leaders = this.leaders.slice(0,10);
    localStorage.setItem("leaders", JSON.stringify(this.leaders));
    this.mapLeaderboard();
  }

  mapLeaderboard() {
    $("#leaders").empty();
    if (this.leaders) {
      this.leaders.forEach( (leader, idx) => {

        let $li = $("<li>");
        $li.append($(`<span class='leaderboard-entry num'>${idx + 1}</span>`));
        $li.append($(`<div class='leaderboard-entry name'>${leader.name}</div>`));
        $li.append($(`<span class='leaderboard-entry score'>${leader.value}</span>`));
        $("#leaders").append($li);
      });
    }

  }

  sortLeaders() {
    this.leaders.sort( (a,b) => {
      return b.value - a.value;
    });
  }

  isTopTen(score) {
    if ((this.leaders.length < 10) || (this.leaders[this.leaders.length-1].value < score)) {
      return true;
    }
    return false;
  }


}

export default Leaderboard;
