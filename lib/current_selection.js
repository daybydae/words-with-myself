class CurrentSelection {
  constructor($el) {
    this.$el = $el;
    this.currentWord = [];
    this.text = "";
    this.clear = this.clear.bind(this);
  }

  clear() {
    this.text = "";
    this.currentWord = [];
    this.setText("");
  }

  receiveSelection(tileObj) {
    this.currentWord.push(tileObj);
    this.text.concat(tileObj.letter);
  }

  setText(text) {
    this.$el.children()[0].html(this.text);
  }

  text() {
    return this.$el.children()[0].html();
  }
}

export default CurrentSelection;
