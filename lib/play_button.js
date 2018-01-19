class PlayButton {
  constructor($el) {
    this.$el = $el;
    this.label = "START";
  }

  handlePlayButtonClick(e, cb) {
    e.preventDefault();
    if (this.label === "START") {
      this.label = "RESET";
      this.$el.children().html(this.label);
    } else {
      this.label = "START";
      this.$el.children().html(this.label);
    }
    cb();

  }

}


module.exports = PlayButton;
