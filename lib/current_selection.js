class CurrentSelection {
  constructor($el) {
    this.$el = $el;

  }

  clear() {
    this.setText("");
  }

  receiveSelection(text) {
    this.setText(text);
  }

  setText(text) {
    this.$el.children()[0].html(text);
  }

  text() {
    return this.$el.children()[0].html();
  }
}

export default CurrentSelection;
