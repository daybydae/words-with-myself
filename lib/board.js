import Tiles from './tile';

class Board {
  constructor($el, currentSelection, isValidWord, submitWordCB, alreadySubmittedCB) {
    this.$el = $el;
    this.currentSelection = currentSelection;
    this.isValidWord = isValidWord;
    this.tiles = new Tiles();
    this.processValidWordCB = submitWordCB;
    this.alreadySubmittedCB = alreadySubmittedCB;

    this.handleTileMousedown = this.handleTileMousedown.bind(this);
    this.handleTileMouseenter = this.handleTileMouseenter.bind(this);
    this.handleWordSubmission = this.handleWordSubmission.bind(this);

    this.resetCurrentSelection = this.resetCurrentSelection.bind(this);
    this.setup();
    this.isDragging = false;
  }

  setup() {
    this.$el.children().remove();
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
      $(li).data({tileObj: { letter : randomTile.letter, value : randomTile.value}});
      $(li).children(".points").html(randomTile.value);
      $(li).children(".letter").html(randomTile.letter);
    });
  }

  activateBoard() {
    $("#board li")
    .on("mousedown", this.handleTileMousedown)
    .on("mouseenter", this.handleTileMousenter);

    $("body")
    .on("mouseup mouseleave", this.handleWordSubmission);
  }

  deactivateBoard() {
    $("#board li").off();
    $("body").off();
  }

  handleTileMousedown(e) {
    e.preventDefault();
    this.updateCurrentSelection($(e.currentTarget).data().tileObj);
    this.isDragging = true;
  }

  handleTileMouseenter(e) {
    e.preventDefault();
    debugger
    if (this.isDragging === true) {
      this.updateCurrentSelection($(e.currentTarget).data().tileObj);
    }
  }

  handleWordSubmission(e) {
    e.preventDefault();
    const wasDragging = this.isDragging;
    this.isDragging = false;
    if (wasDragging) {

      if (this.isValidWord(this.currentSelection.currentWord)) {
        this.processValidWordCB(this.currentSelection.currentWord);
      }
      this.resetCurrentSelection();
    }
  }

  isValidSelection(tile) {
    // verifies the e.currentTarget is
    // next to the previous currentTarget
    // only for handleTileMousenter
  }



  updateCurrentSelection(tileObj) {
    // adds tileObj to currentSelection array

    this.currentSelection.receiveCurrentTile(tileObj);
  }

  resetCurrentSelection() {
    this.currentSelection.clear();
  }

}

export default Board;
