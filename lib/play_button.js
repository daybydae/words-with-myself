class PlayButton {
  constructor($el) {
    this.$el = $el;
    this.label = "START";
  }

  handlePlayButtonClick(e, cb) {
    e.preventDefault();
    if (this.$el.children().html().includes("START")) {
      this.$el.children().html("RESET");
    } else {
      this.$el.children().html("START");
    }
    return e => {
      cb();
    };
  }

}


module.exports = PlayButton;
