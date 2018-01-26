const TILEDATA = {
  "A": {
    freq: 9,
    pts: 1
  },
  "B": {
    freq: 2,
    pts: 3
  },
  "C": {
    freq: 2,
    pts: 3
  },
  "D": {
    freq: 4,
    pts: 2
  },
  "E": {
    freq: 12,
    pts: 1
  },
  "F": {
    freq: 2,
    pts: 4
  },
  "G": {
    freq: 3,
    pts: 2
  },
  "H": {
    freq: 2,
    pts: 4
  },
  "I": {
    freq: 9,
    pts: 1
  },
  "J": {
    freq: 1,
    pts: 8
  },
  "K": {
    freq: 1,
    pts: 5
  },
  "L": {
    freq: 4,
    pts: 1
  },
  "M": {
    freq: 2,
    pts: 3
  },
  "N": {
    freq: 6,
    pts: 1
  },
  "O": {
    freq: 8,
    pts: 1
  },
  "P": {
    freq: 2,
    pts: 3
  },
  "Q": {
    freq: 1,
    pts: 10
  },
  "R": {
    freq: 6,
    pts: 1
  },
  "S": {
    freq: 4,
    pts: 1
  },
  "T": {
    freq: 6,
    pts: 1
  },
  "U": {
    freq: 4,
    pts: 1
  },
  "V": {
    freq: 2,
    pts: 4
  },
  "W": {
    freq: 2,
    pts: 4
  },
  "X": {
    freq: 1,
    pts: 8
  },
  "Y": {
    freq: 2,
    pts: 4
  },
  "Z": {
    freq: 1,
    pts: 10
  }
};

class Tiles {
  constructor() {

    this.allTiles = [];
    this.populateAllTiles = this.populateAllTiles.bind(this);
    this.populateAllTiles();
  }

  value(letter) {
    //letter is a string
    return TILEDATA[letter].pts;
  }

  randomInt() {
    return Math.floor(Math.random() * (this.allTiles.length));
  }

  randomTile() {
    let tileObj = {};
    let randomNum = this.randomInt();
    let letter = this.allTiles[randomNum];
    tileObj.letter = letter;
    tileObj.value = TILEDATA[letter].pts;
    this.allTiles.splice(randomNum,1);
    return tileObj;
  }

  populateAllTiles() {
    Object.keys(TILEDATA).forEach( letterString => {
      for (let i = 0; i < TILEDATA[letterString].freq; i++) {
        this.allTiles.push(letterString);
      }
    });
  }
}

export default Tiles;
