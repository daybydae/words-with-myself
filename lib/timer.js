class Timer {
  constructor($el, callback) {
    this.$el = $el;
    this.setTime(60);
    this.callback = callback;
    this.start.bind(this);
  }

  reset() {
    clearInterval(this.interval);
    this.setTime(60);
    this.$el.removeClass("red");
  }

  start() {
    this.reset();

    this.interval = setInterval(this.countDown.bind(this), 1000);
  }

  handleTimeUp() {
    this.callback();
  }

  countDown() {
    this.setTime(this.seconds - 1);
    if (this.seconds === 0) {
      clearInterval(this.interval);
      this.handleTimeUp.bind(this);

    } else if (this.seconds <= 10){
      this.$el.addClass("red");
    }
  }

  setTime(seconds) {
    this.seconds = seconds;
    this.$el.html(this.seconds);
  }
}

module.exports = Timer;
