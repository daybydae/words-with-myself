class Timer {
  constructor($el, callback) {
    this.$el = $el;
    this.setTime(60);
    this.callback = callback;
  }

  reset() {
    this.setTime(60);
    this.$el.html.removeClass("red");
  }

  start() {
    this.reset();
    this.interval = this.setInterval(this.countdown().bind(this), 1000);
  }

  handleTimeOut() {
    this.callback();
  }

  countDown() {
    this.setTime(this.seconds - 1);
    if (this.seconds === 0) {
      clearInterval(this.interval);
      this.handleTimeOut();

    } else if (this.seconds <= 10){
      this.$el.html.addClass("red");
    }
  }

  setTime(seconds) {
    this.seconds = seconds;
    this.$el.html(this.seconds);
  }
}

module.exports = Timer;
