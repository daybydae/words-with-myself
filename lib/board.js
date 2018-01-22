import Tiles from './tile';

class Board {
  constructor($el, currentSelection, isValidWord, submitWordCB, alreadySubmittedCB) {
    this.$el = $el;
    this.currentSelection = currentSelection;
    this.isValidWord = isValidWord;
    this.tiles = new Tiles();
    this.submitWordCB = submitWordCB;
    this.alreadySubmittedCB = alreadySubmittedCB;

    this.handleTileMousedown = this.handleTileMousedown.bind(this);
    this.handleTileMouseenter = this.handleTileMouseenter.bind(this);

    this.setup();
  }

  setup() {
    const $ul = $("<ul>");

    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        let $li = $("<li>");
        $li.data("pos", [row, col]);
        $li.append($("<span class='board-tile letter'></span>"));
        $li.append($("<span class='board-tile points'></span>"));
        $ul.append($li);
      }
    }

    this.$el.append($ul);
    this.populateBoard();
  }

  populateBoard() {
    $("#board li").each( (idx, li) => {
      let randomTile = this.tiles.randomTile();
      $(li).children(".points").html(randomTile.value);
      $(li).children(".letter").html(randomTile.letter);
    });
  }

  activateBoard() {
    $("#board li")
    .on("mousedown", this.handleTileMousedown)
    .on("mouseenter", this.handleTileMousenter);

    $("body")
    .on("mouseup mouseleave", this.handleWordSubmission.bind(this));
  }

  deactivateBoard() {
    $("#board li").off();
    $("body").off();
  }

  handleTileMousedown(e) {
    e.preventDefault();

    this.updateCurrentSelection(e.currentTarget);

  }

  handleTileMouseenter(e) {
    e.preventDefault();

    this.updateCurrentSelection(e.currentTarget);

  }

  isValidSelection(tile) {

  }



  updateCurrentSelection(tile) {
    // adds tileObj to currentSelection array
  }

  resetCurrentSelection() {

  }

  handleWordSubmission(wordArr) {

  }
}

export default Board;
