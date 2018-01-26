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
    this.previousTilePos = [];
  }

  setup() {
    this.$el.children().remove();
    const $ul = $("<ul>");

    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        let $li = $("<li>");
        $li.data("pos", [col, row]);
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
      $(li).addClass("not-chosen");
      $(li).data({tileObj: { letter : randomTile.letter, value : randomTile.value}});
      $(li).children(".points").html(randomTile.value);
      $(li).children(".letter").html(randomTile.letter);
    });
    this.tiles.populateAllTiles();
  }

  activateBoard() {
    $("#board li").mousedown( (e) =>{
      this.handleTileMousedown(e);
    }).mouseenter( (e) => {
      if (this.isDragging) {
        this.handleTileMouseenter(e);
      }
    });

    $("body")
    .on("mouseup mouseleave", this.handleWordSubmission);
  }

  deactivateBoard() {
    $("#board li").off();
    $("body").off();
  }

  handleTileMousedown(e) {
    e.preventDefault();
    $(e.currentTarget).removeClass("not-chosen").addClass("chosen");
    this.updateCurrentSelection($(e.currentTarget).data().tileObj);
    this.isDragging = true;
    this.previousTilePos.push($(e.currentTarget).data().pos);
  }

  handleTileMouseenter(e) {
    e.preventDefault();
    $(e.currentTarget).removeClass("not-chosen").addClass("chosen");

    if (this.isDragging === true && this.isValidSelection($(e.currentTarget).data().pos)) {

      this.updateCurrentSelection($(e.currentTarget).data().tileObj);
      this.previousTilePos.push($(e.currentTarget).data().pos);
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
    $("#board").children().children().removeClass("chosen").addClass("not-chosen");
    this.previousTilePos = [];
  }

  isValidSelection(pos) {
    // verifies the e.currentTarget is
    // next to the previous currentTarget
    // only for handleTileMousenter
    let length = this.previousTilePos.length;
    let x = this.previousTilePos[length-1][0];
    let y = this.previousTilePos[length-1][1];
    if (
      (this.previousTilePos.includes(pos) === false) &&
      ((((pos[0] - 1) === x) && ([(y-1), y, (y+1)].includes(pos[1]))) ||
      (((pos[0]) === x) && ([(y-1),(y+1)].includes(pos[1]))) ||
      (((pos[0] + 1) === x) && ([(y-1), y, (y+1)].includes(pos[1]))))
      ) {
        return true;
    }
    return false;
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
