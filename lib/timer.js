import Sound from './sound';

class Timer {
  constructor($el, callback) {
    this.$el = $el;
    this.setTime(15);
    this.gameOverCallback = callback;
    this.start.bind(this);
    this.timeWindingSound = new Sound('assets/sounds/countdown.flac');
  }

  reset() {
    clearInterval(this.interval);
    this.setTime(15);
    this.$el.removeClass("red");
  }

  start() {
    this.reset();

    this.interval = setInterval(this.countDown.bind(this), 1000);
  }

  countDown() {
    this.setTime(this.seconds - 1);
    if (this.seconds === 0) {
      clearInterval(this.interval);
      this.gameOverCallback();
      this.$el.parent().parent().removeClass("red");
    } else if (this.seconds <= 10){
      this.timeWindingSound.play();
      this.$el.parent().parent().addClass("red");
    }
  }

  setTime(seconds) {
    this.seconds = seconds;
    this.$el.html(this.seconds);
  }
}

export default Timer;
