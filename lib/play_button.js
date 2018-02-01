import Sound from './sound';

class PlayButton {
  constructor($el) {
    this.$el = $el;
    this.label = "START";

    this.mouseSound = new Sound('assets/sounds/click2.wav');
  }

  handlePlayButtonClick(e, cb) {
    e.preventDefault();
    this.mouseSound.play();
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


export default PlayButton;
