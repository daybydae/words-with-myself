class CurrentSelection {
  constructor($el) {
    this.$el = $el;
    this.currentWord = [];
    this.clear = this.clear.bind(this);
    this.text = this.text.bind(this);
  }

  clear() {
    this.currentWord = [];
    this.setText("");
  }

  receiveCurrentTile(tileObj) {
    if (this.isNotAlreadyChosen(tileObj)) {
      this.currentWord.push(tileObj);
      this.setText(tileObj.letter);
    }
  }

  isNotAlreadyChosen(tileObj) {
    if (this.currentWord.includes(tileObj)) {
      return false;
    }
    return true;
  }

  setText(text) {

    if (text === "") {
      this.$el.children().html("");
    }
    else if (this.text() === "") {
      this.$el.children().html(text);
    } else {
      this.$el.children().append(text);
    }
  }

  text() {
    return this.$el.children().html();
  }
}

export default CurrentSelection;
