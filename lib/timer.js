class Timer {
  constructor($el) {
    this.$el = $.el;
    this.setTime(60);
  }

  reset() {

  }

  start() {

  }

  handleTimeOut() {

  }

  countDown() {
    this.setTime(this.seconds - 1);
    if (this.seconds === 0) {
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
